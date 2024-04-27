import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

const itemsList = [1, 2, 3];

export interface ScrollBarList {
  icon?: string;
  title: string;
  _id: string;
}

export default function HorizontalScrollBar({
  items,
}: {
  items: ScrollBarList[];
}) {
  return (
    <div className="w-full bg-indigo-50 border-y border-indigo-500 py-2 inline-flex flex-nowrap overflow-hidden z-10 infinite-scroll-container">
      {itemsList.map((list, index) => {
        return (
          <ul
            key={index}
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll font-body"
          >
            {items.map((item) => (
              <li
                key={item._id}
                className="whitespace-nowrap flex gap-1 items-center"
              >
                {item.icon && (
                  <Image
                    src={urlFor(item.icon).url()}
                    alt={item.title}
                    className="w-4"
                    width={20}
                    height={20}
                  />
                )}
                {item.title}
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
