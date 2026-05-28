import { seedStations } from '../firebase/services';

async function main() {
  console.log('🌱 Seeding stations to Firestore...');
  try {
    await seedStations();
    console.log('✅ Done! All stations seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

main();
