'use server';
import nodemailer from 'nodemailer';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';

export async function sendEmail(formData: FieldValues) {
  const { email, fullName, message, phone } = formData;

  const transport = nodemailer.createTransport({
    pool: true,
    host: process.env.MOCCO_HOST_EMAIL,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MOCCO_ADMIN_EMAIL,
      pass: process.env.MOCCO_ADMIN_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: {
      name: 'Mocco Tech: Contact',
      address: process.env.MOCCO_ADMIN_EMAIL!,
    },
    to: process.env.MOCCO_ADMIN_EMAIL!,
    subject: `Message from ${fullName} (${email})`,
    html: `
    <p>Message: ${message}</p>
    <p>Name: ${fullName}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    `,
  };

  const clientMailOptions = {
    from: {
      name: 'Mocco Tech',
      address: process.env.MOCCO_ADMIN_EMAIL!,
    },
    to: email,
    subject: `Message from Mocco Tech`,
    html: `
    <p>Dear ${fullName}, thanks a lot for your request!
    <br /> Our team will contact you ASAP and answer all your questions.</p>
    <b>Your request:</b>
    <p>Your message: ${message}</p>
    <p>Your phone: ${phone}</p>
    <p>Your email: ${email}</p>
    <br/>
    <p>This is an automated email, please do not reply to it.</p>`,
  };

  try {
    await transport.sendMail(mailOptions);
    await transport.sendMail(clientMailOptions);
    revalidatePath('/', 'layout');
    return Promise.resolve('Message sent');
  } catch (err) {
    return Promise.reject('Rejected');
  }
}
