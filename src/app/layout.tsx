import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trạm 1 — Nguồn Gốc Đức Tin | MLN131',
  description:
    'Thử thách kiến thức Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH. Vượt mê cung và chinh phục kho báu!',
  keywords: ['MLN131', 'game', 'dân tộc', 'tôn giáo', 'CNXH', 'nguồn gốc đức tin', 'FPT'],
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
