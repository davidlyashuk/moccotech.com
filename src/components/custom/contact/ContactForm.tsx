'use client';

import React from 'react';
import toast from 'react-hot-toast';
import { FieldValues, useForm } from 'react-hook-form';
import { sendEmail } from '@/app/actions/send-email';

import { emailRegex, phoneRegex } from '@/utils/regex';
import { Button } from '@/components/ui/button';
import { InputField } from './InputField';
import { TextArea } from './TextArea';

export default function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { isSubmitting, errors } = formState;

  const onSubmit = async (data: FieldValues) => {
    const status = sendEmail(data);

    toast.promise(status, {
      loading: 'Sending...',
      success: 'Your message sent successfully!',
      error: 'Some error occured',
    });

    status.then(() => {
      reset();
    });

    return status;
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        id="fullName"
        register={register}
        placeholder="Full name"
        requiredValue={true}
        requiredMessage="This field is required"
        minLengthMessaage="Name must be at least 3 symbols"
        minLengthValue={3}
        disabled={isSubmitting}
        errors={errors?.fullName}
      />

      <InputField
        id="phone"
        type="tel"
        register={register}
        placeholder="Your phone"
        requiredValue={true}
        requiredMessage="This field is required"
        minLengthMessaage="Phone must be at least 3 symbols"
        minLengthValue={3}
        patternValue={phoneRegex}
        patternMessage="Please enter a valid phone number (only digits, not less than 7 symbols)"
        disabled={isSubmitting}
        errors={errors?.phone}
      />

      <InputField
        id="email"
        type="email"
        register={register}
        placeholder="Your email"
        requiredValue={true}
        requiredMessage="This field is required"
        minLengthMessaage="Email must be at least 3 symbols"
        minLengthValue={3}
        patternValue={emailRegex}
        patternMessage="Please enter a valid email"
        disabled={isSubmitting}
        errors={errors?.email}
      />

      <TextArea
        id="message"
        register={register}
        placeholder="Your message"
        requiredValue={true}
        requiredMessage="This field is required"
        minLengthMessaage="The message must be at least 10 characters long"
        minLengthValue={10}
        disabled={isSubmitting}
        errors={errors?.message}
      />

      <Button
        className={`${
          isSubmitting ? 'bg-slate-400' : 'bg-indigo-500'
        } hover:bg-indigo-400 font-heading`}
        disabled={isSubmitting}
      >
        Send request
      </Button>
    </form>
  );
}
