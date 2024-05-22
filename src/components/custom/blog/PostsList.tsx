import { PostInterface } from '@/interfaces/post-preview';
import React from 'react';
import PostCard from './PostCard';
import { urlFor } from '@/lib/sanity';

export default function PostsList({ posts }: { posts: PostInterface[] }) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
      {posts.map((post: PostInterface, index: number) => {
        return (
          <PostCard
            key={post.slug.current}
            title={post.title}
            imageSrc={post?.image}
            excerpt={post.excerpt}
            slug={post.slug.current}
          />
        );
      })}
    </main>
  );
}
