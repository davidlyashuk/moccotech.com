'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  image: string;
  id: string;
}
export default function ProjectCard({
  title,
  shortDescription,
  image,
  id,
}: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <motion.div
        className="flex flex-col border-b pb-6 sm:border-b-0 sm:pb-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-64 sm:h-72 relative border-2 border-white hover:border-indigo-500 duration-300 rounded-xl mb-2">
          <Image
            src={image}
            alt={title}
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <h3 className="font-heading font-medium text-2xl z-[5] text-gray-700 mb-1">
          {title}
        </h3>
        <p className="text-md z-[5] text-gray-600 line-clamp-2">
          {shortDescription}
        </p>
      </motion.div>
    </Link>
  );
}
