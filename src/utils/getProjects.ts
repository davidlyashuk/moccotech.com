import { client } from '@/lib/sanity';

export async function getProjects() {
  const query = `*[_type == 'projects'] {
      title,
      description,
      "slug": slug.current,
      images,
      link,
      _id
    }`;
  const data = await client.fetch(query);
  return data;
}
