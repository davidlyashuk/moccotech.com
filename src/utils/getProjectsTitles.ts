import { client } from '@/lib/sanity';

export async function getProjectsTitles() {
  const query = `*[_type == 'projects']{
      title,
      _id
    }`;
  const projects = await client.fetch(query);
  return projects;
}
