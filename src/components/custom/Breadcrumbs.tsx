import Link from 'next/link';
import React from 'react';

export default function Breadcrumbs({
  category,
  title,
  isProject = false,
}: {
  category: string;
  title: string;
  isProject?: boolean;
}) {
  return (
    <div className="mb-3 text-slate-400 text-sm">
      {
        <Link href="/" className="hover:text-indigo-500 duration-200">
          Home
        </Link>
      }{' '}
      |{' '}
      {
        <Link
          href={isProject ? `/projects` : `/blog/category/${category}`}
          className="hover:text-indigo-500 duration-200"
        >
          {category}
        </Link>
      }{' '}
      | <span className="text-slate-600">{title}</span>
    </div>
  );
}
