import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  imageSrc,
}: PostCardProps) {
  return (
    <div className="flex flex-col border-b pb-6 sm:border-b-0 sm:pb-0">
      <Link
        href={`/blog/post/${slug}`}
        className="w-full h-64 sm:h-72 relative duration-300 rounded-xl overflow-hidden hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover object-center rounded-lg hover:scale-105 duration-300"
        />
      </Link>
      <Link href={`/blog/post/${slug}`} className="w-fit">
        <h3 className="font-heading font-medium text-2xl z-[5] text-gray-700 mt-2">
          {title}
        </h3>
      </Link>
      <p className="text-md z-[5] text-gray-600 line-clamp-2 mt-1">{excerpt}</p>
    </div>
  );
}
