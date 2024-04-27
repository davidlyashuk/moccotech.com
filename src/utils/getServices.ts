import { client } from '@/lib/sanity';

export async function getServices() {
  const query = `*[_type == 'services']{
      title,
      description,
      shortDescription,
      icon,
      id
    }`;
  const projects = await client.fetch(query);
  return projects;
}
