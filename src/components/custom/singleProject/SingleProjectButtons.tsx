'use client';

import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';

function SingleProjectButtons({ link }: { link: string }) {
  return (
    <div className="flex gap-3 items-center">
      <DialogTrigger asChild>
        <Button className="bg-indigo-500 hover:bg-indigo-400">
          Get in touch
        </Button>
      </DialogTrigger>
      <a href={link} target="_blank">
        <Button variant="secondary">View project</Button>
      </a>
    </div>
  );
}

export default SingleProjectButtons;
