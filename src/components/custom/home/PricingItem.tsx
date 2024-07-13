import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

export default function PricingItem({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('p-6 border border-slate-200', className)}>
      {children}
    </div>
  );
}
