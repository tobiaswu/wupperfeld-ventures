'use client';

import { StarField } from '@/components/StarField';
import { CommandCenter } from '@/components/CommandCenter';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarField />
      <div className="relative z-10">
        <CommandCenter />
      </div>
    </main>
  );
}
