import { Hr, Html, Text } from '@react-email/components';
import React from 'react';

import { FieldValues } from 'react-hook-form';

export function EmailTemplateClient({
  email,
  fullName,
  message,
  phoneNumber,
}: FieldValues) {
  return (
    <Html lang="en">
      <Text>
        Dear {fullName}, thanks a lot for your request!
        <br /> Our team will contact you ASAP and answer all your questions.
      </Text>
      <Hr />
      <Text>
        <b>Your request:</b>
      </Text>
      <Text>Your message: {message}</Text>
      <Text>Your phone: {phoneNumber}</Text>
      <Text>Your email: {email}</Text>
      <Hr />
      <Text>This is an automated email, please do not reply to it.</Text>
    </Html>
  );
}

export default EmailTemplateClient;
