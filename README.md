# 🏆 Truy Tìm Kho Báu MLN131

Web game thử thách học tập môn Xác suất Thống kê MLN131. Trả lời câu hỏi, đào kho báu và đạt điểm cao!

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)
![Firebase](https://img.shields.io/badge/Firebase-11-orange)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple)

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Cài đặt](#-cài-đặt)
- [Cấu hình Firebase](#-cấu-hình-firebase)
- [Chạy dự án](#-chạy-dự-án)
- [Deploy lên Vercel](#-deploy-lên-vercel)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)

## ✨ Tính năng

- 🎮 10 trạm câu hỏi với độ khó tăng dần
- ⏱️ Timer countdown cho mỗi câu hỏi
- 🗺️ Game board 8x8 với animation kho báu
- 📊 Bảng xếp hạng real-time
- 📱 Responsive trên desktop và mobile
- 🎨 UI cartoon game đẹp mắt với animation mượt
- 🔥 Firebase Firestore lưu trữ dữ liệu

## 🚀 Cài đặt

### Yêu cầu
- **Node.js** >= 18.0 (Download tại: https://nodejs.org/)
- **npm** >= 9.0

### Bước 1: Cài đặt Node.js

Nếu chưa có Node.js, tải và cài đặt tại: https://nodejs.org/en/download

Sau khi cài xong, kiểm tra:
```bash
node --version
npm --version
```

### Bước 2: Cài dependencies

```bash
cd "d:\FPT Uni\SUMMER 2026\MLN131 - updated SP24-20260510T221322Z-3-001\GAME 1"
npm install
```

## 🔥 Cấu hình Firebase

Firebase đã được cấu hình sẵn trong `src/firebase/config.ts`.

### Tạo Firestore Database

1. Vào [Firebase Console](https://console.firebase.google.com/)
2. Chọn project **game-1---mln131**
3. Vào **Firestore Database** → **Create Database**
4. Chọn **Start in test mode** (cho phát triển)
5. Chọn location gần nhất (ví dụ: `asia-southeast1`)

### Firestore Rules (Test Mode)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ **Lưu ý**: Rules trên chỉ dùng cho development. Khi deploy production, hãy thắt chặt rules.

### Seed dữ liệu câu hỏi

```bash
npm run seed
```

Lệnh này sẽ tạo 10 trạm câu hỏi mẫu trong Firestore.

> 💡 **Lưu ý**: Dù không seed, game vẫn chạy được vì có mock data fallback.

## 💻 Chạy dự án

### Development

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deploy lên Vercel

### Cách 1: CLI

```bash
npm install -g vercel
vercel
```

### Cách 2: GitHub + Vercel

1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com)
3. Import project từ GitHub
4. Vercel tự động detect Next.js
5. Click **Deploy**

### Environment Variables (Vercel)

Không cần thêm env variables vì Firebase config đã được hardcode trong code.
Nếu muốn bảo mật hơn, tạo file `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCA53k0ZAxeFG6XsRf1799UDaaqhto244U
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=game-1---mln131.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=game-1---mln131
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=game-1---mln131.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=193392736186
NEXT_PUBLIC_FIREBASE_APP_ID=1:193392736186:web:57ab669adafc3608edcf83
```

## 📁 Cấu trúc thư mục

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── game/
│   │   └── page.tsx        # Game page
│   └── leaderboard/
│       └── page.tsx        # Leaderboard page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Timer.tsx
│   │   └── LoadingSpinner.tsx
│   ├── game/               # Game-specific components
│   │   ├── QuestionCard.tsx
│   │   ├── AnswerButton.tsx
│   │   ├── GameBoard.tsx
│   │   ├── GameHeader.tsx
│   │   ├── StationComplete.tsx
│   │   └── GameComplete.tsx
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   └── RegistrationForm.tsx
│   └── leaderboard/
│       └── LeaderboardTable.tsx
├── firebase/
│   ├── config.ts           # Firebase initialization
│   └── services.ts         # Firestore CRUD operations
├── hooks/
│   ├── useGameState.ts     # Game state management
│   └── useTimer.ts         # Countdown timer
├── types/
│   └── index.ts            # TypeScript interfaces
├── data/
│   └── mockStations.ts     # Mock station data
├── utils/
│   └── helpers.ts          # Utility functions
└── scripts/
    └── seedFirestore.ts    # Seed data script
```

## 🎮 Gameplay

1. Truy cập trang web
2. Nhập thông tin: Họ tên, MSSV, Mã lớp
3. Bắt đầu tại Trạm 1
4. Trả lời đúng → Cộng điểm + Animation kho báu + Sang trạm tiếp
5. Trả lời sai → Trừ điểm
6. Hết thời gian → Tính như sai
7. Hoàn thành 10 trạm → Xem tổng điểm + Bảng xếp hạng

## 📝 License

MIT
