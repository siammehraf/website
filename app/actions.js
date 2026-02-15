'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(email) {
  try {
    // ১. অডিয়েন্স লিস্টে কন্টাক্ট হিসেবে অ্যাড করা
    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: '35ec349e-a002-449f-a06e-b0eea6949d55',
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    // ২. সোশ্যাল মিডিয়া লিঙ্কসহ প্রফেশনাল অনবোর্ডিং ইমেইল পাঠানো
    await resend.emails.send({
      from: 'Siam Mehraf <newsletter@siammehraf.com>',
      to: email,
      subject: "Welcome on Board to Siam Mehraf's Family! 🚀",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
            <h2 style="color: #2563eb; text-align: center;">You're officially on Board! 🎉</h2>
            
            <p>Hi There,</p>
            
            <p>I am thrilled to have you here! Your onboarding to my newsletter is officially complete. This is the place where I share my most personal and creative updates directly with you.</p>
            
            <p><strong>Here is what you will be receiving from me:</strong></p>
            <ul style="list-style-type: none; padding: 0;">
                <li>📚 <strong>Books & Updates:</strong> Exclusive sneak peeks and updates about my upcoming books.</li>
                <li>📖 <strong>Stories:</strong> Short stories and creative narratives that I don't share anywhere else.</li>
                <li>✍️ <strong>Writings & Thoughts:</strong> My deep dives into movies, books, world politics, and various life experiences.</li>
            </ul>

            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
                <p style="margin: 0; font-style: italic;">"I believe in the power of stories and shared knowledge. I'm honored to have you as a reader."</p>
            </div>

            <p style="text-align: center; margin: 25px 0;">
                <strong>Connect with me:</strong><br/>
                <a href="https://facebook.com/siammehraf" style="margin: 0 10px; color: #1877F2; text-decoration: none; font-weight: bold;">Facebook</a> | 
                <a href="https://instagram.com/siammehraf" style="margin: 0 10px; color: #E4405F; text-decoration: none; font-weight: bold;">Instagram</a> | 
                <a href="https://x.com/siammehraf" style="margin: 0 10px; color: #333; text-decoration: none; font-weight: bold;">X</a>
            </p>

            <p>I can't wait to share my next writing with you. If you ever want to chat or share your thoughts, just contact me on Social Media!</p>
            
            <p style="margin-top: 30px;">Warmly,<br>
            <strong>Siam Mehraf</strong><br>
            <a href="https://siammehraf.com" style="color: #2563eb; text-decoration: none;">siammehraf.com</a></p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #999; text-align: center;">
                You received this email because you completed the onboarding on siammehraf.com.
            </p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Server Error:', err);
    return { success: false, error: 'Something went wrong.' };
  }
}
