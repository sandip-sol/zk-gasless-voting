'use client';

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import { PollFactoryABI, AnonPollABI } from '@/lib/abis';
import { useWallet } from './Providers';

interface Poll {
    id: number;
    address: string;
    question: string;
    start: number;
    end: number;
}

export default function PollList() {
    const { provider } = useWallet();
    const [polls, setPolls] = useState<Poll[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPolls = async () => {
            try {
                // Use a read-only provider if wallet not connected
                const readProvider = provider || new ethers.JsonRpcProvider(CONFIG.rpcUrl);
                const factory = new ethers.Contract(CONFIG.contracts.PollFactory, PollFactoryABI, readProvider);

                // Fetch PollCreated events
                // In a real app, we'd cache this or use a subgraph
                const filter = factory.filters.PollCreated();
                const events = await factory.queryFilter(filter);

                const loadedPolls = await Promise.all(events.map(async (event: any) => {
                    const { pollId, poll: pollAddress, questionCID } = event.args;

                    // Fetch details from the poll contract
                    const pollContract = new ethers.Contract(pollAddress, AnonPollABI, readProvider);
                    const start = await pollContract.start();
                    const end = await pollContract.end();

                    // In a real app, we'd fetch the question from IPFS using questionCID
                    // Here we assume questionCID is the question text for simplicity or we mock it
                    const question = questionCID;

                    return {
                        id: Number(pollId),
                        address: pollAddress,
                        question,
                        start: Number(start),
                        end: Number(end)
                    };
                }));

                setPolls(loadedPolls.reverse()); // Show newest first
            } catch (err) {
                console.error("Error fetching polls:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPolls();
    }, [provider]);

    if (loading) return <div>Loading polls...</div>;

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {polls.map((poll) => (
                <Link key={poll.id} href={`/polls/${poll.id}`} className="block group">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{poll.question}</h3>
                        <div className="text-sm text-muted-foreground">
                            <p>Poll ID: {poll.id}</p>
                            <p>Ends: {new Date(poll.end * 1000).toLocaleDateString()}</p>
                        </div>
                    </div>
                </Link>
            ))}
            {polls.length === 0 && (
                <div className="col-span-full text-center text-muted-foreground">
                    No polls found. Create one!
                </div>
            )}
        </div>
    );
}
