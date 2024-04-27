'use client';

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { urlFor } from '@/lib/sanity';
import { ServicesInterface } from '@/interfaces/services';
import { DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';

export default function ServicesList({
  services,
}: {
  services: ServicesInterface[];
}) {
  const [serviceId, setServiceId] = useState(services[0].id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
      {services.map((service) => (
        <Fragment key={service.id}>
          <ServiceCard
            id={service.id}
            name={service.title}
            icon={urlFor(service.icon).url()}
            shortDesc={service.shortDescription}
            setServiceId={setServiceId}
            serviceId={serviceId}
          />
          {serviceId === service.id && (
            <motion.div
              className={`row-start-${
                service.id + 2
              } sm:row-start-2 sm:col-start-1 sm:col-end-4`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-gray-600">{service.description}</p>
              <div className="flex gap-3 mt-4">
                <DialogTrigger asChild>
                  <Button className="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-5 h-9">
                    Get in touch
                  </Button>
                </DialogTrigger>
                <Link href="/projects">
                  <Button variant="outline" className="rounded-lg px-5 h-9">
                    Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
