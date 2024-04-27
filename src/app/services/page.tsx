import React from 'react';

import { getServices } from '@/utils/getServices';
import Heading from '@/components/custom/Heading';
import ServicesList from '@/components/custom/services/ServicesList';

export const metadata = {
  title: 'Mocco Tech - services we provide',
  description:
    'Take a look for the services we can provide. We do the website and development, rebuild the old website, mobile apps development, promotion and marketing',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech - services we provide`,
    description:
      'Take a look for the services we can provide. We do the website and development, rebuild the old website, mobile apps development, promotion and marketing',
    url: `https://moccotech.com/services`,
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

export const revalidate = 0;

async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="px-4 py-10 sm:p-4 font-body sm:py-12 sm:px-8">
      <div className="text-center">
        <Heading>Services</Heading>
      </div>
      <ServicesList services={services} />
    </main>
  );
}

export default ServicesPage;
