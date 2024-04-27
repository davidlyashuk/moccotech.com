import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="w-64 sm:w-72">
      <Link href="/">
        <Image
          src="/mocco-tech-logo.png"
          alt="Mocco Tech"
          width={300}
          height={50}
          priority
        />
      </Link>
    </div>
  );
}
