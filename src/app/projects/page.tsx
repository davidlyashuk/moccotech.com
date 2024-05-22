import Heading from '@/components/custom/Heading';
import ProjectsList from '@/components/custom/projects/ProjectsList';
import { getProjects } from '@/utils/getProjects';

export const metadata = {
  title: 'Mocco Tech | Our Latest Projects',
  description:
    'Take a look for few of our latest projects. We build the Online Journals, eCommerece stores, sing-page applications, mobile applications and much more',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech | Our Latest Projects`,
    description:
      'Take a look for few of our latest projects. We build the Online Journals, eCommerece stores, sing-page applications, mobile applications and much more',
    url: `https://moccotech.com/projects`,
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

async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="px-4 py-10 sm:p-4 font-body sm:py-12 sm:px-8">
      <div className="text-center">
        <Heading>Latest projects</Heading>
      </div>
      <ProjectsList projects={projects} />
    </main>
  );
}

export default ProjectsPage;
