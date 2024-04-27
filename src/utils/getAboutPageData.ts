import { client } from '@/lib/sanity';

export async function getAboutPageData() {
  const query = `*[_type == 'aboutPage'][0] {
      image,
      description,
      blockEditor
      }`;
  const data = client.fetch(query);
  return data;
}
