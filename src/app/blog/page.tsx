import React from 'react';

import { getBlogPosts } from '@/utils/getBlogPosts';

import Heading from '@/components/custom/Heading';
import BlogSidebar from '@/components/custom/blog/BlogSidebar';
import CategoriesList from '@/components/custom/blog/CategoriesList';
import PostsList from '@/components/custom/blog/PostsList';
import EmptyBlogList from '@/components/custom/blog/EmptyBlogList';

export const metadata = {
  title: 'Mocco Tech | Web development blog',
  description:
    'Discover useful articles about web development only in our blog. We build Online Journals, eCommerce stores, single-page applications, mobile applications, and much more',

  metadataBase: new URL('https://www.moccotech.com'),
  openGraph: {
    title: `Mocco Tech - web development blog`,
    description:
      'Discover useful articles about web development only in our blog. We build Online Journals, eCommerce stores, single-page applications, mobile applications, and much more',
    url: `https://moccotech.com/blog`,
    siteName: 'Mocco Tech',
    images: [
      {
        url: '/website-develomnet.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const revalidate = 0;

export default async function BlogArchives() {
  const posts = await getBlogPosts();

  let categories: { category: string }[] = [];
  const generateCategories = posts.map(
    (category: any) => (categories = [...category.categories])
  );

  return (
    <div className="flex gap-5 py-4 lg:py-8 px-4 lg:px-12 flex-wrap">
      <div className="w-full text-center pb-5">
        <Heading type="h1">Blog</Heading>
      </div>

      {categories.length > 0 && (
        <BlogSidebar>
          <h3 className="font-heading font-medium text-lg z-[5] text-gray-700">
            All blog categories
          </h3>
          <CategoriesList categories={categories} />
        </BlogSidebar>
      )}

      {posts.length > 0 ? <PostsList posts={posts} /> : <EmptyBlogList />}
    </div>
  );
}
