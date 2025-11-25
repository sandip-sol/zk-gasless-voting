'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONFIG } from '@/lib/config';

declare global {
    interface Window {
        ethereum: any;
    }
}

interface WalletContextType {
    account: string | null;
    provider: ethers.BrowserProvider | null;
    connect: () => Promise<void>;
    isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType>({
    account: null,
    provider: null,
    connect: async () => { },
    isConnecting: false,
});

export const useWallet = () => useContext(WalletContext);

export function WalletProvider({ children }: { children: React.ReactNode }) {
    const [account, setAccount] = useState<string | null>(null);
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.ethereum) {
            const p = new ethers.BrowserProvider(window.ethereum);
            setProvider(p);

            p.listAccounts().then(accounts => {
                if (accounts.length > 0) {
                    setAccount(accounts[0].address);
                }
            });

            window.ethereum.on('chainChanged', (_chainId: string) => {
                window.location.reload();
            });

            window.ethereum.on('accountsChanged', (accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                } else {
                    setAccount(null);
                }
            });
        }
    }, []);

    const connect = async () => {
        if (!provider) return;
        setIsConnecting(true);
        try {
            const accounts = await provider.send("eth_requestAccounts", []);
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            }

            // Check network
            const network = await provider.getNetwork();
            const targetChainId = BigInt(CONFIG.chainId);

            if (network.chainId !== targetChainId) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x' + targetChainId.toString(16) }],
                    });
                } catch (switchError: any) {
                    // This error code indicates that the chain has not been added to MetaMask.
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        chainId: '0x' + targetChainId.toString(16),
                                        chainName: 'Hoodi Testnet',
                                        rpcUrls: [CONFIG.rpcUrl],
                                        nativeCurrency: {
                                            name: 'ETH',
                                            symbol: 'ETH',
                                            decimals: 18
                                        },
                                        blockExplorerUrls: ['https://sepolia.etherscan.io']
                                    },
                                ],
                            });
                        } catch (addError) {
                            console.error("Failed to add network", addError);
                        }
                    } else {
                        console.error("Failed to switch network", switchError);
                    }
                }
            }
        } catch (error) {
            console.error("Failed to connect", error);
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <WalletContext.Provider value={{ account, provider, connect, isConnecting }}>
            {children}
        </WalletContext.Provider>
    );
}
