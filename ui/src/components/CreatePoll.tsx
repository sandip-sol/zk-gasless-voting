'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import { useWallet } from './Providers';
import { CONFIG } from '@/lib/config';
import { PollFactoryABI } from '@/lib/abis';

export default function CreatePoll() {
    const { provider, account, connect } = useWallet();
    const [question, setQuestion] = useState('');
    const [optionsCount, setOptionsCount] = useState(2);
    const [duration, setDuration] = useState(3600); // 1 hour
    const [loading, setLoading] = useState(false);

    const createPoll = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!provider || !account) {
            connect();
            return;
        }

        setLoading(true);
        try {
            const signer = await provider.getSigner();
            const factory = new ethers.Contract(CONFIG.contracts.PollFactory, PollFactoryABI, signer);

            const start = Math.floor(Date.now() / 1000);
            const end = start + duration;

            // In a real app, we'd upload question to IPFS and get CID
            // Here we just use the text as the CID
            const tx = await factory.createAnonPoll(
                question,
                start,
                end,
                optionsCount,
                CONFIG.contracts.EligibilityAggregator,
                { gasLimit: 3000000 }
            );

            await tx.wait();
            alert('Poll created successfully!');
            setQuestion('');
            // Ideally refresh list or redirect
            window.location.reload();
        } catch (err) {
            console.error("Failed to create poll:", err);
            alert('Failed to create poll');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Create Poll</h2>
            <form onSubmit={createPoll} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Options Count</label>
                    <input
                        type="number"
                        min="2"
                        value={optionsCount}
                        onChange={(e) => setOptionsCount(parseInt(e.target.value))}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Duration (seconds)</label>
                    <input
                        type="number"
                        min="60"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                >
                    {loading ? 'Creating...' : 'Create Poll'}
                </button>
            </form>
        </div>
    );
}
