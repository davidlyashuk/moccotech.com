import { ReviewsInterface } from '@/interfaces/reviews';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import React from 'react';

export default function ReviewCard({
  _id,
  author,
  position,
  review,
  avatar,
}: ReviewsInterface) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl ring-1 ring-gray-300 hover:ring-indigo-500 duration-300 hover:ring-2">
      <div className="flex gap-3 items-center">
        <Image
          src={urlFor(avatar).url()}
          alt={author}
          width={50}
          height={50}
          priority
        />
        <div>
          <h4 className="font-heading text-lg font-semibold">{author}</h4>
          <p className="font-body text-gray-600">{position}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-600">{review}</p>
      </div>
    </div>
  );
}
