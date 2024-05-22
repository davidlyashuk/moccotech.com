import React from 'react';

import Heading from '@/components/custom/Heading';
import BlogSidebar from '@/components/custom/blog/BlogSidebar';
import CategoriesList from '@/components/custom/blog/CategoriesList';
import PostsList from '@/components/custom/blog/PostsList';
import { getBlogPostsByCategory } from '@/utils/getBlogPostsByCategory';
import Link from 'next/link';
import EmptyBlogList from '@/components/custom/blog/EmptyBlogList';

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Mocco blog category: ${params.slug}`,
    metadataBase: new URL('https://www.moccotech.com'),
    openGraph: {
      title: `Mocco blog category: ${params.slug}`,
      description: params.slug,
      url: `https://moccotech.com/blog/category/${params.slug}`,
      siteName: 'Mocco Tech',
      images: [
        {
          url: `/website-develomnet.webp`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function BlogArchives({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getBlogPostsByCategory(params.slug);

  let categories: { category: string }[] = [];
  const generateCategories = posts.map(
    (category: any) => (categories = [...category.categories])
  );

  return (
    <div className="flex gap-5 py-4 lg:py-8 px-4 lg:px-12 flex-wrap">
      <div className="w-full text-center pb-5">
        <Heading type="h1">Category: {params.slug}</Heading>
      </div>

      <BlogSidebar>
        <h3 className="font-heading font-medium text-lg z-[5] text-gray-700">
          All blog categories
        </h3>
        <CategoriesList currentParams={params.slug} categories={categories} />
      </BlogSidebar>

      {posts.length > 0 ? <PostsList posts={posts} /> : <EmptyBlogList />}
    </div>
  );
}
