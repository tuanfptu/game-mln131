'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';
import Button from '@/components/ui/Button';
import { getLeaderboard } from '@/firebase/services';
import { LeaderboardEntry } from '@/types';

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard(20);
        setEntries(data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen treasure-bg">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🏆
          </motion.div>
          <h1 className="font-game text-3xl text-amber-300 text-shadow-game mb-2">
            Bảng Xếp Hạng
          </h1>
          <p className="font-body text-amber-100/70 text-sm">
            Top thợ mỏ xuất sắc nhất MLN131
          </p>
        </motion.div>

        {/* Leaderboard */}
        <LeaderboardTable entries={entries} isLoading={isLoading} />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button
            variant="secondary"
            onClick={() => router.push('/')}
          >
            🏠 Về Trang Chủ
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
