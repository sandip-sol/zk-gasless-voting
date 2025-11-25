'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { useWallet } from './Providers';
import { CONFIG } from '@/lib/config';
import { AnonPollABI } from '@/lib/abis';

interface VoteFormProps {
    pollId: number;
    pollAddress: string;
    optionsCount: number;
    onVoteSuccess: () => void;
}

export default function VoteForm({ pollId, pollAddress, optionsCount, onVoteSuccess }: VoteFormProps) {
    const { provider, account, connect } = useWallet();
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const vote = async () => {
        if (selectedOption === null) return;
        if (!provider || !account) {
            connect();
            return;
        }

        setLoading(true);
        setStatus('Preparing vote...');

        try {
            const signer = await provider.getSigner();

            // 1. Generate Mock Proof
            // In real app, this would be a ZK proof generation
            // MockVerifier expects: abi.encode(address identity, bool valid)
            const proofData = ethers.AbiCoder.defaultAbiCoder().encode(
                ['address', 'bool'],
                [account, true]
            );

            // 2. Construct Meta-Transaction
            const pollContract = new ethers.Contract(pollAddress, AnonPollABI, signer);

            // We need to encode the function call: vote(option, verifier, proofData)
            const data = pollContract.interface.encodeFunctionData("vote", [
                selectedOption,
                CONFIG.contracts.MockSemaphoreVerifier,
                proofData
            ]);

            // 3. Get Nonce from Forwarder
            // We need the Forwarder contract to check nonce
            // But for simplicity, we can ask the relayer or just query chain
            // Let's query chain using a read-only provider
            const readProvider = new ethers.JsonRpcProvider(CONFIG.rpcUrl);
            const forwarderABI = [
                "function getNonce(address from) view returns (uint256)",
                "function execute((address from,address to,uint256 value,uint256 gas,uint256 nonce,bytes data), bytes) payable returns (bytes)"
            ];
            const forwarder = new ethers.Contract(CONFIG.contracts.Forwarder, forwarderABI, readProvider);
            const nonce = await forwarder.getNonce(account);

            // 4. Sign Message (SimpleForwarder expects EthSignedMessageHash of abi.encoded struct)
            // The contract does:
            // keccak256(abi.encode(from, to, value, gas, nonce, keccak256(data)))

            const abiCoder = new ethers.AbiCoder();
            const dataHash = ethers.keccak256(data);

            const structHash = ethers.keccak256(abiCoder.encode(
                ['address', 'address', 'uint256', 'uint256', 'uint256', 'bytes32'],
                [account, pollAddress, 0, 500000, Number(nonce), dataHash]
            ));

            // Sign the hash (ethers.signMessage automatically adds the prefix)
            // We need to pass the raw bytes of the hash
            const signature = await signer.signMessage(ethers.getBytes(structHash));

            const req = {
                from: account,
                to: pollAddress,
                value: 0,
                gas: 500000,
                nonce: Number(nonce),
                data: data,
            };

            // 5. Send to Relayer
            setStatus('Sending to Relayer...');
            await axios.post(`${CONFIG.relayerUrl}/relay`, {
                forwardRequest: req,
                signature: signature
            });

            setStatus('Vote relayed! Waiting for mining...');
            // In a real app, we'd poll for the tx hash returned by relayer
            // For now, just wait a bit
            await new Promise(r => setTimeout(r, 2000));

            alert('Vote submitted successfully!');
            onVoteSuccess();
        } catch (err: any) {
            console.error("Vote failed:", err);
            setStatus(`Error: ${err.message || 'Vote failed'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Cast your Vote</h3>
            <div className="space-y-2">
                {Array.from({ length: optionsCount }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedOption(idx)}
                        className={`w-full text-left px-4 py-3 rounded-md border transition-colors ${selectedOption === idx
                            ? 'border-primary bg-primary/10 ring-1 ring-primary'
                            : 'border-input hover:bg-accent hover:text-accent-foreground'
                            }`}
                    >
                        Option {idx + 1}
                    </button>
                ))}
            </div>

            {status && <p className="text-sm text-muted-foreground mt-2">{status}</p>}

            <button
                onClick={vote}
                disabled={loading || selectedOption === null}
                className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
                {loading ? 'Voting...' : 'Submit Vote'}
            </button>
        </div>
    );
}
