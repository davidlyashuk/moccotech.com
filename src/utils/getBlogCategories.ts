import { client } from '@/lib/sanity';

export async function getBlogCategories() {
  const query = `*[_type == 'blogCategories']{
        category
      }`;
  const categories = await client.fetch(query);
  return categories;
}
