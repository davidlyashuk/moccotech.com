'use client';
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import PricingItem from './PricingItem';
import PricingListItem from './PricingListItem';

export default function SubscriptionBlock() {
  return (
    <div
      className="px-4 py-8 sm:p-4 font-body sm:py-12 sm:px-8 bg-slate-50 border-t"
      id="pricing"
    >
      <div className="text-center mb-10">
        <p className="text-indigo-600 font-semibold text-sm">
          Monthly subscription plans
        </p>
        <h3 className="font-heading text-3xl text-slate-800 font-bold mb-2">
          Subscriptions types
        </h3>
        <p className="text-slate-500">
          Ideal for enterprises and teams with constant design and web
          development requirements.
          <br /> Best if you require high-quality design and development on a
          regular basis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0">
        <PricingItem className="rounded-xl md:border-r-0 md:rounded-l-xl">
          <h4 className="mb-2 text-lg font-heading text-slate-800 font-semibold">
            Basic
          </h4>
          <h4 className="mb-4 flex items-end gap-2 text-2xl text-slate-800 font-bold font-heading">
            $400 / month
            <span className="pb-1 text-slate-500 text-sm font-medium">
              up to 20 hours
            </span>
          </h4>
          <ul className="mb-6 text-slate-500">
            <PricingListItem>Web-development</PricingListItem>
            <PricingListItem>
              Integration of New Systems (Lead management, marketing automation,
              etc.)
            </PricingListItem>
            <PricingListItem>Premium technical support</PricingListItem>
            <PricingListItem>Pause/cancel anytime</PricingListItem>
          </ul>
          <DialogTrigger asChild className="w-fit">
            <Button className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-500/80 !font-semibold">
              Contact
            </Button>
          </DialogTrigger>
        </PricingItem>
        <PricingItem className="rounded-xl md:rounded-r-xl">
          <h4 className="mb-2 text-lg font-heading text-slate-800 font-semibold flex justify-between items-center">
            Premium
          </h4>
          <h4 className="mb-4 flex items-end gap-2 text-2xl text-slate-800 font-bold font-heading">
            $1400 / month
            <span className="pb-1 text-slate-500 text-sm font-medium">
              up to 70 hours
            </span>
          </h4>
          <ul className="mb-6 list-disc text-slate-500">
            <PricingListItem>Web-development</PricingListItem>
            <PricingListItem>Graphic and product design</PricingListItem>
            <PricingListItem>Premium technical support</PricingListItem>
            <PricingListItem>Pause/cancel anytime</PricingListItem>
          </ul>
          <DialogTrigger asChild className="w-fit">
            <Button className="w-fit rounded-lg bg-indigo-500 hover:bg-indigo-500/80 !font-semibold">
              Contact
            </Button>
          </DialogTrigger>
        </PricingItem>
      </div>
    </div>
  );
}
