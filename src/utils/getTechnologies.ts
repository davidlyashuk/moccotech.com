import { client } from '@/lib/sanity';

export async function getTechnologies() {
  const query = `*[_type == 'technologies'] {
      icon,
      title,
      _id
    }`;
  const technologies = await client.fetch(query);
  return technologies;
}
