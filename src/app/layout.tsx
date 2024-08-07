import { Montserrat_Alternates, Montserrat } from 'next/font/google';
import './globals.css';
import { Dialog } from '@/components/ui/dialog';
import ModalPopup from '@/components/custom/ModalPopup';
import Header from '@/components/custom/header/Header';
import Footer from '@/components/custom/footer/Footer';
import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const headingsFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headings',
});
const bodyFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  verification: {
    google: 'bn2TNug92IE_Igk_FKJ1kXjk2Mm6OdbVFOgV1fF2OPQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingsFont.variable} ${bodyFont.variable} font-body selection:bg-slate-600 selection:text-slate-50`}
      >
        <SpeedInsights />
        <Analytics />
        <Dialog>
          <NextTopLoader color="#6366f1" showSpinner={false} />
          <Toaster position="top-center" />
          <Header />
          {children}
          <ModalPopup />
          <Footer />
        </Dialog>
      </body>
    </html>
  );
}
