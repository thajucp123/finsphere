import '@/app/ui/global.css';
import { poppins } from '@/app/ui/fonts';
import Head from 'next/head';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
      <Head key="head">
        <title>FinSphere</title>
      </Head>
        {children}</body>
    </html>
  );
}
