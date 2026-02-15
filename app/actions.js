'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(email) {
  try {
    const data = await resend.emails.send({
      from: 'Siam Mehraf <newsletter@siammehraf.com>',
      to: email,
      subject: 'Welcome to the Newsletter! 🚀',
      html: '<p>Thanks for subscribing to my projects!</p>',
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to subscribe' };
  }
}
