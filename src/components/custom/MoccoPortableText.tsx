import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

const { PortableText } = require('next-sanity');

const myPortableTextComponents = {
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl font-heading font-medium text-gray-800 my-2">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-heading font-medium text-gray-800 my-2">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-xl font-heading font-medium text-gray-800 my-3">
        {children}
      </h2>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-lg font-heading text-gray-800 my-3">{children}</h4>
    ),
    h5: ({ children }: { children: React.ReactNode }) => (
      <h5 className="text-md font-heading text-gray-800 my-4">{children}</h5>
    ),
    h6: ({ children }: { children: React.ReactNode }) => (
      <h6 className="text-md font-heading text-gray-800 my-4">{children}</h6>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-md font-body text-gray-700 my-3">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="text-md font-body text-gray-500 border-l-[3px] pl-3 my-3 py-[6px] border-indigo-400 bg-slate-50 rounded-sm">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc text-gray-700 ml-4 my-3">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-number text-gray-700 ml-4">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li>
        <span className="flex gap-2 items-center">{children}</span>
      </li>
    ),
  },

  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: any }) => {
      return (
        <Link href={value.href} className="duration-100 hover:text-indigo-500">
          {children}
        </Link>
      );
    },
  },

  types: {
    image: ({
      value,
    }: {
      value: {
        asset: string;
      };
    }) => {
      return (
        <Image
          src={urlFor(value.asset).url()}
          alt="a"
          width={1000}
          height={1000}
          className="w-full object-cover max-h-[400px]"
        />
      );
    },
  },
};

export default function MoccoPortableText(props: any) {
  return (
    <PortableText value={props.value} components={myPortableTextComponents} />
  );
}
