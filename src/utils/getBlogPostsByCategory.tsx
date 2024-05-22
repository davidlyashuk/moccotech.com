import { client } from '@/lib/sanity';

export async function getBlogPostsByCategory(slug: string) {
  const query = `*[_type == 'blogPosts' && '${slug}' in categories[]->category]{
    title,
    description,
    excerpt,
    "image": images.asset->url,
    slug,
    categories[]->{category},
  }`;
  const data = await client.fetch(query);
  return data;
}
