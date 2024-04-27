import { client } from '@/lib/sanity';

export async function getReviews() {
  const query = `*[_type == 'reviews'] {
      author,
      review,
      avatar,
      position,
      _id
    }`;
  const reviews = client.fetch(query);
  return reviews;
}
