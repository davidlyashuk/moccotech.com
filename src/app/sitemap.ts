import { ProjectsInterface } from '@/interfaces/projects';
import { getProjects } from '@/utils/getProjects';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const URL = 'https://moccotech.com';

  const restUrls = [
    {
      url: `${URL}/`, // Home Page
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/projects`, // Projects Page
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/about`, // About Page
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/contact`, // Contact Page
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/services`, // Services Page
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
  ];

  const allPrpjects = projects.map((project: ProjectsInterface, date: Date) => {
    return {
      url: `${URL}/project/${project.slug}`,
      lastModified: new Date(date),
      priority: 0.64,
      changeFrequency: 'daily',
    };
  });

  return [...restUrls, ...allPrpjects];
}
