import Heading from '@/components/custom/Heading';
import AboutPageContent from '@/components/custom/about/AboutPageContent';
import { getAboutPageData } from '@/utils/getAboutPageData';
import React from 'react';

export const revalidate = 0;

export const metadata = {
  title: 'Mocco Tech - Contact us',
  description:
    'Contact us and get the price of your new website. Mobile applications development. Platforms development. Build your Social Media',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech - Contact us`,
    description:
      'Contact us and get the price of your new website. Mobile applications development. Platforms development. Build your Social Media',
    url: `https://moccotech.com/contact`,
    siteName: 'Mocco Tech',
    images: [
      {
        url: '/website-develomnet.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function page() {
  const aboutPageData = await getAboutPageData();

  return (
    <main className="px-4 py-8 sm:p-4 font-body sm:py-8 sm:px-8">
      <div className="text-center">
        <Heading>About us</Heading>
      </div>
      <AboutPageContent content={aboutPageData} />
    </main>
  );
}
