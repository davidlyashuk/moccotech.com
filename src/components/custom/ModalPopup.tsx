import React from 'react';
import { DialogContent } from '../ui/dialog';
import ContactForm from './contact/ContactForm';

export default function ModalPopup() {
  return (
    <DialogContent className="flex-col gap-5 max-w-full max-h-full w-[95%] lg:w-4/5 h-4/5 flex items-center justify-center">
      <p className="font-heading text-2xl font-medium text-gray-700">
        Just fill the form to contact us
      </p>
      <div className="max-w-96 lg:max-w-[600px] w-full">
        <ContactForm />
      </div>
    </DialogContent>
  );
}
