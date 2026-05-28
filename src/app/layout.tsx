import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Truy Tìm Kho Báu MLN131 - Game Học Tập',
  description:
    'Web game thử thách học tập môn Xác suất Thống kê MLN131. Trả lời câu hỏi, đào kho báu và đạt điểm cao!',
  keywords: ['MLN131', 'game', 'kho báu', 'xác suất', 'thống kê', 'FPT'],
  authors: [{ name: 'MLN131 Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
