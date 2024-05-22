import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function EmptyBlogList() {
  return (
    <div className="flex-1 flex items-center justify-center text-center flex-col gap-3">
      <p className="text-slate-600">
        Sorry, but this category is still empty
        <br />
        Try to browse something else in our blog or visit a homepage
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className={buttonVariants({
            size: 'sm',
            className: 'px-4 !bg-indigo-500 hover:!bg-indigo-400',
          })}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            size: 'sm',
            className: 'px-4 !bg-slate-500 hover:!bg-slate-400',
          })}
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
