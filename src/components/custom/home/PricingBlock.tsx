"use client";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import PricingItem from "./PricingItem";
import PricingListItem from "./PricingListItem";

export default function PricingBlock() {
  return (
    <div
      className="px-4 py-8 sm:p-4 font-body sm:pt-12 sm:pb-12 sm:px-8"
      id="pricing"
    >
      <div className="text-center mb-8 lg:mb-14">
        <p className="text-indigo-600 font-semibold text-sm">Pricing</p>
        <h3 className="font-heading text-3xl text-slate-800 font-bold mb-2">
          Website packages
        </h3>
        <p className="text-slate-500">One time payments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
        <PricingItem className="rounded-xl md:border-r-0 md:rounded-r-none">
          <h4 className="mb-2 text-lg font-heading text-slate-800 font-semibold">
            Basic website
          </h4>
          <p className="mb-2 text-sm text-slate-500">
            A multi-page website with an easy-to-use WordPress/Webflow CMS.
            Ideal for early-stage projects.
          </p>
          <h4 className="mb-4 flex items-end gap-2 text-2xl text-slate-800 font-bold font-heading">
            $4700
            <span className="pb-1 text-slate-500 text-sm font-medium">
              starting from
            </span>
          </h4>
          <ul className="mb-6 text-slate-500">
            <PricingListItem> Up to 10 Pages/Templates</PricingListItem>
            <PricingListItem>Web-development</PricingListItem>
            <PricingListItem>Easy-to-Maintain & Update</PricingListItem>
            <PricingListItem>SEO optimized</PricingListItem>
          </ul>
          <DialogTrigger asChild className="w-fit">
            <Button className="w-full rounded-lg" variant={"outline"}>
              Contact
            </Button>
          </DialogTrigger>
        </PricingItem>
        <PricingItem className="rounded-xl md:rounded-b-none md:-mt-5">
          <h4 className="mb-2 text-lg font-heading text-indigo-600 font-semibold flex justify-between items-center">
            Ecommerce website
            <span className="font-body text-sm font-medium text-indigo-600/90 bg-indigo-100/60 rounded-xl px-3 py-1">
              Most popular
            </span>
          </h4>
          <p className="mb-2 text-sm text-slate-500">
            A multi-page website with an easy-to-use WordPress/Shopify CMS.
            Ideal for starting an online store business.
          </p>
          <h4 className="mb-4 flex items-end gap-2 text-2xl text-slate-800 font-bold font-heading">
            $9400
            <span className="pb-1 text-slate-500 text-sm font-medium">
              starting from
            </span>
          </h4>
          <ul className="mb-6 list-disc text-slate-500">
            <PricingListItem>Unlimited pages</PricingListItem>
            <PricingListItem>Web-development</PricingListItem>
            <PricingListItem>Easy-to-Maintain & Update</PricingListItem>
            <PricingListItem>SEO optimized</PricingListItem>
            <PricingListItem>Payments integration</PricingListItem>
          </ul>
          <DialogTrigger asChild className="w-fit">
            <Button className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-500/80 !font-semibold">
              Contact
            </Button>
          </DialogTrigger>
        </PricingItem>
        <PricingItem className="rounded-xl md:border-l-0 md:rounded-l-none">
          <h4 className="mb-2 text-lg font-heading text-slate-800 font-semibold">
            Corporate website
          </h4>
          <p className="mb-2 text-sm text-slate-500">
            A unique website will help you stand out and express your story.
            Ideal for enterprises and teams with traction looking to scale
            quickly or who need to migrate to low-code.
          </p>
          <h4 className="mb-4 flex items-end gap-2 text-2xl text-slate-800 font-bold font-heading">
            $11900
            <span className="pb-1 text-slate-500 text-sm font-medium">
              starting from
            </span>
          </h4>
          <ul className="mb-6 list-disc text-slate-500">
            <PricingListItem>Unlimited pages</PricingListItem>
            <PricingListItem>Web-development</PricingListItem>
            <PricingListItem>SEO optimized</PricingListItem>
            <PricingListItem>Advanced analytics setup</PricingListItem>
          </ul>
          <DialogTrigger asChild className="w-fit">
            <Button className="w-full rounded-lg" variant={"outline"}>
              Contact
            </Button>
          </DialogTrigger>
        </PricingItem>
      </div>
    </div>
  );
}
