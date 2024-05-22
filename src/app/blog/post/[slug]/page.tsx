import React from 'react';

import { urlFor } from '@/lib/sanity';
import { getBlogPost } from '@/utils/getBlogPost';

import MoccoPortableText from '@/components/custom/MoccoPortableText';
import Separator from '@/components/custom/Separator';
import { SinglePostInterface } from '@/interfaces/single-post-interface';
import Breadcrumbs from '@/components/custom/Breadcrumbs';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post: SinglePostInterface = await getBlogPost(params.slug);

  return {
    title: `${post.title}`,
    description: post.description,

    metadataBase: new URL('https://www.moccotech.com'),
    openGraph: {
      title: `${post.title}`,
      description: post.description,
      url: `https://moccotech.com/blog/post/${post.slug}`,
      siteName: 'Mocco Tech',
      images: [
        {
          url: post?.image,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export const revalidate = 0;

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post: SinglePostInterface = await getBlogPost(params.slug);

  return (
    <main className="px-3 py-8 sm:p-4 font-body sm:py-12 sm:px-8">
      <div className="max-w-[800px] mx-auto">
        <Breadcrumbs
          category={post?.categories?.[0]?.category}
          title={post.title}
        />
        <h1 className="text-2xl lg:text-3xl font-heading font-medium text-slate-800 mb-1">
          {post?.title}
        </h1>
        <h3 className="text-slate-500">{post?.excerpt}</h3>
        <Separator className="my-3" />
        <MoccoPortableText value={post?.blockEditor} />
      </div>
    </main>
  );
}
