'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/landing/HeroSection';
import RegistrationForm from '@/components/landing/RegistrationForm';
import { createPlayer } from '@/firebase/services';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
