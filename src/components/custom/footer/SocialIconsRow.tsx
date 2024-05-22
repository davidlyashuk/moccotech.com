import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function SocialIconsRow() {
  return (
    <div className="justify-center flex gap-5 items-center">
      <Link
        href="https://www.linkedin.com/company/mocco-group-oü/about/"
        target="_blank"
      >
        <SocialIcon
          network="linkedin"
          as="div"
          bgColor="#475569"
          style={{ width: '2rem', height: '2rem' }}
          className="hover:ring rounded-full bg-slate-600 ring-slate-600 duration-200"
        />
      </Link>

      <Link href="https://github.com/Mocco-Tech" target="_blank">
        <SocialIcon
          network="github"
          as="div"
          bgColor="#475569"
          style={{ width: '2rem', height: '2rem' }}
          className="hover:ring rounded-full bg-slate-600 ring-slate-600 duration-200"
        />
      </Link>

      <Link
        href="https://www.linkedin.com/company/mocco-group-oü/about/"
        target="_blank"
      >
        <SocialIcon
          network="facebook"
          as="div"
          bgColor="#475569"
          style={{ width: '2rem', height: '2rem' }}
          className="hover:ring rounded-full bg-slate-600 ring-slate-600 duration-200"
        />
      </Link>

      <Link
        href="https://www.linkedin.com/company/mocco-group-oü/about/"
        target="_blank"
      >
        <SocialIcon
          network="instagram"
          as="div"
          bgColor="#475569"
          style={{ width: '2rem', height: '2rem' }}
          className="hover:ring rounded-full bg-slate-600 ring-slate-600 duration-200"
        />
      </Link>
    </div>
  );
}
