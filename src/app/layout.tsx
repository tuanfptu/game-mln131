import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thám Hiểm Mê Cung MLN131 - Game Học Tập',
  description:
    'Web game thử thách kiến thức Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH. Vượt mê cung, trả lời câu hỏi và chinh phục kho báu!',
  keywords: ['MLN131', 'game', 'mê cung', 'dân tộc', 'tôn giáo', 'CNXH', 'FPT'],
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
