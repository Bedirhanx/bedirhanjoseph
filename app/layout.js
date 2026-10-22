import { Syne, Space_Grotesk } from 'next/font/google';
import './globals.css';

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-display' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: 'Bedirhan Yusuf Erdemli ✦ Portfolio',
  description: 'Data Science student & Business minor at De Anza College. Turning data into decisions.',
};

export const viewport = {
  themeColor: '#0b0614',
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
