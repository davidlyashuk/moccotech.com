import { client } from '@/lib/sanity';

export async function getBlogPosts() {
  const query = `*[_type == 'blogPosts']{
    categories[]->{category},
    title,
    excerpt,
    description,
    "image": images.asset->url,
    slug,
  }`;
  const data = await client.fetch(query);
  return data;
}
