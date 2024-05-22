import { client } from '@/lib/sanity';

export async function getBlogPost(slug: string) {
  const query = `*[_type == 'blogPosts' && slug.current =='${slug}'][0] {
        title,
        excerpt,
        description,
        "slug": slug.current,
        categories[]->{category},
        images,
        blockEditor
      }`;
  const data = await client.fetch(query);
  return data;
}
