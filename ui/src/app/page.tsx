'use client';

import PollList from '@/components/PollList';
import CreatePoll from '@/components/CreatePoll';

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Active Polls</h1>
        </div>
        <PollList />
      </section>

      <section className="border-t pt-8">
        <CreatePoll />
      </section>
    </div>
  );
}
