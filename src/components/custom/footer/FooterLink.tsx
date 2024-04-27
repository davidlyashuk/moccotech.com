import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="footer-link hover:text-indigo-500 duration-300 font-body"
    >
      {children}
    </Link>
  );
}

export default FooterLink;
