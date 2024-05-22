'use client';

import React from 'react';

import HorizontalScrollBar from './HorizontalScrollBar';
import { Button } from '@/components/ui/button';
import { TechnologiesInterface } from '@/interfaces/technologies';
import { ProjectTitles } from '@/interfaces/project-titles';
import { DialogTrigger } from '@/components/ui/dialog';

import { TypeAnimation } from 'react-type-animation';

interface HomeBannerInterface {
  technologies: TechnologiesInterface[];
  projects: ProjectTitles[];
}

function HomeBanner({ technologies, projects }: HomeBannerInterface) {
  return (
    <div className="py-20 relative overflow-hidden sm:h-[600px]">
      <div className="absolute top-0 sm:-rotate-45 sm:translate-x-[-40%] sm:translate-y-0 md:translate-x-[-40%]">
        <HorizontalScrollBar items={technologies} />
      </div>
      <div className="absolute bottom-0 left-0">
        <HorizontalScrollBar items={projects} />
      </div>
      <div className="px-6 flex flex-col gap-3 sm:absolute sm:top-1/2 sm:left-1/4 sm:-translate-y-1/2">
        <p className="font-heading font-medium text-slate-800 text-2xl lg:text-4xl">
          We create gorgeous websites for{' '}
          <TypeAnimation
            sequence={[
              'agencies',
              2500,
              'marketers',
              2500,
              'marketing teams',
              2500,
              'influencers',
              2500,
              'ecommerce',
              2500,
              'cafés',
              2500,
              'restaurants',
              2500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
            className="bg-indigo-50 text-indigo-500 rounded-lg px-2 border border-indigo-400"
          />
        </p>
        <p className="text-slate-500 lg:max-w-[500px] text-md mb-2">
          Let&apos;s build your dream web app together and grow your business to
          an outstanding level.
        </p>
        <DialogTrigger asChild className="w-fit">
          <Button className="bg-indigo-500 hover:bg-indigo-400 rounded-lg h-9 px-6 text-base lg:font-semibold lg:h-10 lg:px-6 lg:text-md">
            Get in touch
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
}

export default HomeBanner;
