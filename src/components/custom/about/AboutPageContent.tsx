'use client';

import Image from 'next/image';
import { DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity';
import MoccoPortableText from '../MoccoPortableText';

interface Props {
  image: string;
  description: string;
  blockEditor: [{}];
}

function AboutPageContent({ content }: { content: Props }) {
  return (
    <div className="py-4 sm:py-8 grid sm:grid-cols-2 gap-6 items-center order-last">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <MoccoPortableText value={content.blockEditor} />
        </div>
        <DialogTrigger asChild>
          <Button className="rounded-lg px-6 h-9 bg-indigo-500 hover:bg-indigo-400">
            Get in touch
          </Button>
        </DialogTrigger>
      </motion.div>
      <motion.div
        className="h-72 sm:h-[400px]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={urlFor(content.image).url()}
          alt="About us"
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}

export default AboutPageContent;
