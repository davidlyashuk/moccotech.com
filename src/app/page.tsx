import Heading from '@/components/custom/Heading';
import HomeBanner from '@/components/custom/home/HomeBanner';
import ProjectsList from '@/components/custom/projects/ProjectsList';
import ReviewsList from '@/components/custom/reviews/ReviewsList';
import ServicesList from '@/components/custom/services/ServicesList';
import { getProjects } from '@/utils/getProjects';
import { getProjectsTitles } from '@/utils/getProjectsTitles';
import { getReviews } from '@/utils/getReviews';
import { getServices } from '@/utils/getServices';
import { getTechnologies } from '@/utils/getTechnologies';
import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Mocco Tech | Website Development Agency',
  description:
    'We develop modern and optimized web applications. We are an international company creating web-applications of any complexity',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech | Website Development Agency`,
    description:
      'We develop modern and optimized web applications. We are an international company creating web-applications of any complexity',
    url: `https://www.moccotech.com`,
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

export default async function Home() {
  const technologies = await getTechnologies();
  const projectsTitles = await getProjectsTitles();
  const projects = await getProjects();
  const reviews = await getReviews();
  const services = await getServices();
  const sortedServices = services.sort((a: any, b: any) => a.id - b.id);

  return (
    <main>
      <HomeBanner projects={projectsTitles} technologies={technologies} />

      <div className="bg-gray-50 border-y px-4 py-10 sm:p-4 font-body sm:py-8 sm:px-8">
        <Heading type="h2">Services</Heading>
        <ServicesList services={sortedServices} />
      </div>

      <div className="px-4 py-8 sm:p-4 font-body sm:py-8 sm:px-8">
        <Heading type="h2">Projects</Heading>
        <ProjectsList projects={projects} />
      </div>

      <div
        id="feedback"
        className="bg-gray-50 border-y py-10 px-4 sm:p-4 font-body sm:py-8 sm:px-8"
      >
        <Heading type="h2">What people say?</Heading>
        <ReviewsList reviews={reviews} />
      </div>
    </main>
  );
}
