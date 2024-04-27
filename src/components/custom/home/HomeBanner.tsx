'use client';

import React from 'react';
import Link from 'next/link';

import HorizontalScrollBar from './HorizontalScrollBar';
import { Button } from '@/components/ui/button';
import { TechnologiesInterface } from '@/interfaces/technologies';
import { ProjectTitles } from '@/interfaces/project-titles';
import { DialogTrigger } from '@/components/ui/dialog';

interface HomeBannerInterface {
  technologies: TechnologiesInterface[];
  projects: ProjectTitles[];
}

const menu = [
  { label: 'Projects', link: '/projects' },
  { label: 'Consulting', link: '/contact' },
  { label: 'Feedback', link: '#feedback' },
  { label: 'Services', link: '/services' },
  { label: 'About us', link: '/about' },
];

function HomeBanner({ technologies, projects }: HomeBannerInterface) {
  return (
    <div className="py-20 relative overflow-hidden sm:h-[500px]">
      <div className="absolute top-0 sm:-rotate-45 sm:translate-x-[-40%] sm:translate-y-0 md:translate-x-[-40%]">
        <HorizontalScrollBar items={technologies} />
      </div>
      <div className="absolute bottom-0 left-0">
        <HorizontalScrollBar items={projects} />
      </div>
      <div className="px-4 sm:absolute sm:top-1/2 sm:left-3/4 sm:-translate-x-1/2 sm:-translate-y-3/4 sm:min-w-[250px] mb-6 sm:mb-0">
        <ul className="flex flex-col">
          {menu.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link href={menuItem.link}>
                  <Button className="text-2xl bg-transparent text-slate-700 hover:text-indigo-50 hover:bg-indigo-500 w-fit md:w-full justify-start font-heading">
                    {menuItem.label}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-4 sm:absolute sm:bottom-[35%] sm:left-[20%] sm:-translate-y-1/2">
        <DialogTrigger asChild>
          <Button className="bg-indigo-500 hover:bg-indigo-400 rounded-lg h-9 px-6">
            Get in touch
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
}

export default HomeBanner;
