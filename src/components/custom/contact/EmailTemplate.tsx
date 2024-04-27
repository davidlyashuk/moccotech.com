import { Hr, Html, Text } from '@react-email/components';
import React from 'react';

import { FieldValues } from 'react-hook-form';

export function EmailTemplate({
  email,
  fullName,
  message,
  phoneNumber,
}: FieldValues) {
  return (
    <Html lang="en">
      <Text>
        <b>Name:</b> {fullName}
      </Text>
      <Hr />
      <Text>
        <b>Email:</b> {email}
      </Text>
      <Hr />
      <Text>
        <b>Phone:</b> {phoneNumber}
      </Text>
      <Hr />
      <Text>
        <b>Message:</b> {message}
      </Text>
    </Html>
  );
}

export default EmailTemplate;
