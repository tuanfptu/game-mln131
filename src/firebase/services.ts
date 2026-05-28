import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';
import { Player, Station, LeaderboardEntry } from '@/types';
import { MOCK_STATIONS } from '@/data/mockStations';

// ============ PLAYER FUNCTIONS ============

export async function createPlayer(
  name: string,
  mssv: string,
  classCode: string
): Promise<Player> {
  const playerId = `${mssv}_${Date.now()}`;
  const playerData = {
    name,
    mssv,
    classCode,
    score: 0,
    currentStation: 1,
    duration: 0,
    isGameLost: false,
    completedAt: null,
    createdAt: serverTimestamp(),
  };

  await setDoc(doc(db, 'players', playerId), playerData);

  return {
    id: playerId,
    name,
    mssv,
    classCode,
    score: 0,
    currentStation: 1,
    duration: 0,
    isGameLost: false,
    completedAt: null,
    createdAt: new Date(),
  };
}

export async function getPlayer(playerId: string): Promise<Player | null> {
  const docRef = doc(db, 'players', playerId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  const data = docSnap.data();
  return {
    id: docSnap.id,
    name: data.name,
    mssv: data.mssv,
    classCode: data.classCode,
    score: data.score,
    currentStation: data.currentStation,
    duration: data.duration || 0,
    isGameLost: data.isGameLost || false,
    completedAt: data.completedAt ? (data.completedAt as Timestamp).toDate() : null,
    createdAt: data.createdAt ? (data.createdAt as Timestamp).toDate() : new Date(),
  };
}

export async function updatePlayerScore(
  playerId: string,
  newScore: number,
  nextStation: number
): Promise<void> {
  const docRef = doc(db, 'players', playerId);
  await updateDoc(docRef, {
    score: newScore,
    currentStation: nextStation,
  });
}

export async function completeGame(
  playerId: string,
  finalScore: number,
  duration: number,
  isGameLost: boolean = false
): Promise<void> {
  const docRef = doc(db, 'players', playerId);
  await updateDoc(docRef, {
    score: finalScore,
    duration: duration,
    isGameLost: isGameLost,
    completedAt: serverTimestamp(),
  });
}

// ============ STATION FUNCTIONS ============

export async function getStation(stationNumber: number): Promise<Station | null> {
  // Use local mock data first for instant loading
  const mockStation = MOCK_STATIONS.find(s => s.stationNumber === stationNumber);
  if (mockStation) return mockStation;

  // Fallback to Firestore only if local data is missing
  try {
    const q = query(
      collection(db, 'stations'),
      where('stationNumber', '==', stationNumber),
      limit(1)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      return {
        id: querySnapshot.docs[0].id,
        stationNumber: docData.stationNumber,
        title: docData.title,
        question: docData.question,
        answers: docData.answers,
        correctAnswer: docData.correctAnswer,
        difficulty: docData.difficulty,
        timeLimit: docData.timeLimit,
      };
    }
  } catch (error) {
    console.warn('Firestore station fetch failed:', error);
  }

  return null;
}

export async function getAllStations(): Promise<Station[]> {
  try {
    const q = query(
      collection(db, 'stations'),
      orderBy('stationNumber', 'asc')
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs.map(docSnap => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          stationNumber: data.stationNumber,
          title: data.title,
          question: data.question,
          answers: data.answers,
          correctAnswer: data.correctAnswer,
          difficulty: data.difficulty,
          timeLimit: data.timeLimit,
        };
      });
    }
  } catch (error) {
    console.warn('Firestore stations fetch failed, using mock data:', error);
  }

  return MOCK_STATIONS;
}

// ============ LEADERBOARD FUNCTIONS ============

export async function getLeaderboard(limitCount: number = 20): Promise<LeaderboardEntry[]> {
  try {
    const q = query(
      collection(db, 'players'),
      where('completedAt', '!=', null)
    );
    const querySnapshot = await getDocs(q);

    const players = querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        name: data.name,
        mssv: data.mssv,
        classCode: data.classCode,
        score: data.score,
        duration: data.duration !== undefined ? data.duration : 999999,
        isGameLost: data.isGameLost || false,
        completedAt: data.completedAt ? (data.completedAt as Timestamp).toDate() : null,
      };
    });

    // Chỉ lấy những người chiến thắng (không thua cuộc)
    const winners = players.filter((p) => !p.isGameLost);

    // Sắp xếp theo duration tăng dần (hoàn thành nhanh nhất xếp trước)
    winners.sort((a, b) => a.duration - b.duration);

    return winners.slice(0, limitCount).map((p, index) => ({
      rank: index + 1,
      name: p.name,
      mssv: p.mssv,
      classCode: p.classCode,
      score: p.score,
      duration: p.duration === 999999 ? undefined : p.duration,
      completedAt: p.completedAt,
    }));
  } catch (error) {
    console.warn('Leaderboard fetch failed:', error);
    return [];
  }
}

// ============ SEED FUNCTION ============

export async function seedStations(): Promise<void> {
  for (const station of MOCK_STATIONS) {
    const docId = `station_${station.stationNumber}`;
    await setDoc(doc(db, 'stations', docId), {
      stationNumber: station.stationNumber,
      title: station.title,
      question: station.question,
      answers: station.answers,
      correctAnswer: station.correctAnswer,
      difficulty: station.difficulty,
      timeLimit: station.timeLimit,
    });
  }
  console.log('Seeded all stations to Firestore!');
}

export async function ensureStationsSeeded(): Promise<void> {
  try {
    const querySnapshot = await getDocs(collection(db, 'stations'));
    if (querySnapshot.size < 50) {
      console.log(`Firestore has only ${querySnapshot.size} stations. Auto-seeding 50 stations...`);
      await seedStations();
    } else {
      console.log('Firestore is already fully seeded with 50 stations.');
    }
  } catch (error) {
    console.error('Failed to auto-seed stations:', error);
  }
}

