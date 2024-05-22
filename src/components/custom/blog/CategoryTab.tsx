import Link from 'next/link';
import React from 'react';

export default function CategoryTab({
  category,
  isCurrentCategory,
}: {
  category: string;
  isCurrentCategory: boolean;
}) {
  return (
    <li>
      <Link
        href={`/blog/category/${category}`}
        className={`block w-full px-4 py-[6px] hover:text-indigo-50 hover:bg-indigo-400 rounded-lg text-sm duration-200 ${
          isCurrentCategory
            ? 'bg-indigo-500 text-white'
            : 'bg-slate-100 text-slate-700'
        }`}
      >
        {category}
      </Link>
    </li>
  );
}
