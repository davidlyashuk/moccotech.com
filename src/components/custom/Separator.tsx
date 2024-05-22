import { cn } from '@/lib/utils';
import React from 'react';

export default function Separator({ className }: { className?: string }) {
  return <div className={cn('h-[1px] w-full bg-slate-200', className)}></div>;
}
