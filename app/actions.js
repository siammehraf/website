'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(email) {
  try {
    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: '35ec349e-a002-449f-a06e-b0eea6949d55',
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    await resend.emails.send({
      from: 'Siam Mehraf <newsletter@siammehraf.com>',
      to: email,
      subject: 'Welcome to my Newsletter! 🚀',
      html: '<p>Thanks for subscribing! You are now on my audience list.</p>',
    });

    return { success: true };
  } catch (err) {
    console.error('Server Error:', err);
    return { success: false, error: 'Something went wrong.' };
  }
}
