import React from 'react';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from '../components/Icons';

const Footer = () => {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 flex justify-center flex-col items-center">
      <p>Made by Vikram Mahto</p>
      <Social />
    </footer>
  );
};

export default Footer;

export const Social = () => {
  const iconStyle =
    'inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full transition';
  const socialIcons = [
    {
      icon: <GithubIcon size={16} />,
      href: 'https://github.com/vikrammahto',
      label: 'Github',
    },
    {
      icon: <LinkedinIcon size={16} />,
      href: 'https://www.linkedin.com/in/vikrammahto',
      label: 'LinkedIn',
    },
    {
      icon: <InstagramIcon size={16} />,
      href: 'https://www.instagram.com/here_vikram',
      label: 'Instagram',
    },
    {
      icon: <XIcon size={16} />,
      href: 'https://www.instagram.com/here_vikram',
      label: 'X',
    },
  ];
  return (
    <div className="space-x-2">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          className={`${iconStyle}, hover:text-github`}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow me on ${social.label}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
