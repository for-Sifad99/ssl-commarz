import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

// ফন্ট ইমপোর্ট করো
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'], 
});

export const metadata = {
  title: 'sslcommarz',
  description: 'Generated for free pay',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>{children}</body>
    </html>
  );
}
