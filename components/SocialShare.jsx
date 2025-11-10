'use client';

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'] });

export default function SocialShare({ title, description, url }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || title);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedDesc}`,
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}%0A${encodedDesc}&url=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedDesc}%20${encodedUrl}`,
    },
  ];

  return (
    <div className={`flex gap-2 justify-center mt-4 ${poppins.className}`}>
      {shareLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="
            flex items-center justify-center
            px-8 py-2
            border border-current
            rounded-md
            text-black hover:bg-black hover:text-white
            dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black
            transition
          ">
          {link.icon}
        </a>
      ))}
    </div>
  );
}
