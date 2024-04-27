import React from 'react';

import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';

export default function CallToAction() {
  return (
    <div
      id="callToAction"
      className="bg-indigo-500 py-12 flex justify-center items-center gap-10 flex-col"
    >
      <h2 className="font-heading text-4xl sm:text-6xl font-bold text-center text-indigo-50">
        Still got some
        <br /> questions?
      </h2>
      <DialogTrigger asChild>
        <Button variant="secondary" className="rounded-lg h-9 px-6">
          Get in touch
        </Button>
      </DialogTrigger>
    </div>
  );
}
