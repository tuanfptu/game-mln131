'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import RegistrationForm from '@/components/landing/RegistrationForm';
import { createPlayer, ensureStationsSeeded } from '@/firebase/services';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Auto-seed questions in background if they are missing
  useEffect(() => {
    ensureStationsSeeded().catch(console.error);
  }, []);

  const handleSubmit = async (
    name: string,
    mssv: string,
    classCode: string
  ) => {
    setIsLoading(true);
    try {
      const player = await createPlayer(name, mssv, classCode);
      // Store player info in sessionStorage for the game page
      sessionStorage.setItem('playerId', player.id);
      sessionStorage.setItem('playerName', player.name);
      sessionStorage.setItem('playerMssv', player.mssv);
      sessionStorage.setItem('playerClassCode', player.classCode);
      router.push('/game');
    } catch (error) {
      console.error('Failed to create player:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      <section id="register">
        <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
      </section>
    </main>
  );
}
