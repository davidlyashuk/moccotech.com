import { Check } from 'lucide-react';
import React from 'react';

export default function PricingListItem({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-[2px]">
      <Check strokeWidth={1.25} className="text-indigo-500" />
      {children}
    </li>
  );
}
