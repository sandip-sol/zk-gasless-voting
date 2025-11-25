'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ethers } from 'ethers';
import { CONFIG } from '@/lib/config';
import { PollFactoryABI, AnonPollABI } from '@/lib/abis';
import { useWallet } from '@/components/Providers';
import VoteForm from '@/components/VoteForm';

interface PollDetails {
    id: number;
    address: string;
    question: string;
    start: number;
    end: number;
    tallies: number[];
    optionsCount: number;
}

export default function PollPage() {
    const params = useParams();
    const { provider } = useWallet();
    const [poll, setPoll] = useState<PollDetails | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchPoll = async () => {
        try {
            const pollId = Number(params.id);
            const readProvider = provider || new ethers.JsonRpcProvider(CONFIG.rpcUrl);

            // We need to find the poll address from the factory events or by querying the factory if it had a mapping
            // The factory emits PollCreated(id, address, cid)
            // We can query filter for that specific ID
            const factory = new ethers.Contract(CONFIG.contracts.PollFactory, PollFactoryABI, readProvider);
            const filter = factory.filters.PollCreated(pollId);
            const events = await factory.queryFilter(filter);

            if (events.length === 0) {
                setLoading(false);
                return;
            }

            const event: any = events[0];
            const pollAddress = event.args.poll;
            const questionCID = event.args.questionCID;

            const pollContract = new ethers.Contract(pollAddress, AnonPollABI, readProvider);
            const start = await pollContract.start();
            const end = await pollContract.end();
            const tallies = await pollContract.results(); // uint256[]

            setPoll({
                id: pollId,
                address: pollAddress,
                question: questionCID,
                start: Number(start),
                end: Number(end),
                tallies: tallies.map((t: any) => Number(t)),
                optionsCount: tallies.length
            });
        } catch (err) {
            console.error("Error fetching poll:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPoll();
    }, [params.id, provider]);

    if (loading) return <div>Loading poll...</div>;
    if (!poll) return <div>Poll not found</div>;

    const now = Math.floor(Date.now() / 1000);
    const isActive = now >= poll.start && now <= poll.end;
    const isEnded = now > poll.end;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{poll.question}</h1>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>ID: {poll.id}</span>
                    <span>Status: {isActive ? 'Active' : (isEnded ? 'Ended' : 'Upcoming')}</span>
                </div>
            </div>

            <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    <div className="space-y-4">
                        {poll.tallies.map((count, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span>Option {idx + 1}</span>
                                    <span className="font-medium">{count} votes</span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-secondary">
                                    <div
                                        className="h-full rounded-full bg-primary transition-all"
                                        style={{
                                            width: `${poll.tallies.reduce((a, b) => a + b, 0) > 0
                                                ? (count / poll.tallies.reduce((a, b) => a + b, 0)) * 100
                                                : 0}%`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isActive && (
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                        <VoteForm
                            pollId={poll.id}
                            pollAddress={poll.address}
                            optionsCount={poll.optionsCount}
                            onVoteSuccess={fetchPoll}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
