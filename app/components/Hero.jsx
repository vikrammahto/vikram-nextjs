'use client';
import React, { useState, useEffect } from 'react';
import { MagicWandIcon } from './Icons';

const Hero = () => {
  const greetings = [
    { text: 'Hi 👋', lang: 'English' },
    { text: 'नमस्ते 🙏', lang: 'Hindi' },
    { text: 'जोहार 🌻', lang: 'Nagpuri' },
    { text: 'Hola 💃', lang: 'Spanish' },
    { text: 'Bonjour 🥐', lang: 'French' },
    { text: 'こんにちは 🎌', lang: 'Japanese' },
    { text: '안녕하세요 🌸', lang: 'Korean' },
    { text: '你好 🏮', lang: 'Chinese' },
    { text: 'Hallo 🍺', lang: 'German' },
    { text: 'Olá 🌴', lang: 'Portuguese' },
    { text: 'నమస్కారం 🌟', lang: 'Telugu' },
    { text: 'કેમ છો 💫', lang: 'Gujarati' },
    { text: 'নমস্কার 🎋', lang: 'Bengali' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setFade(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(fadeInterval);
  }, []);
  return (
    <section className="mx-auto flex max-w-xl flex-col justify-between px-4 py-20 md:px-8 lg:max-w-screen-xl lg:flex-row lg:pt-16">
      <div>
        <h1 className="text-3xl font-medium lg:text-5xl">
          <span
            className={`text-2xl transition-opacity duration-1000 ${
              fade ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {greetings[currentIndex].text}
          </span>
          <br /> I’m Vikram!
        </h1>
        <p className="font-light lg:text-xl">
          Frontend Engineer | Open-Source Contributor
        </p>
        <p className="mt-5 text-2xl font-light lg:text-4xl">
          I craft visually stunning, accessible, and high-performing websites.{' '}
          <br className="hidden lg:block" />
          With expertise in{' '}
          <span className="font-normal">
            {' '}
            React.js, Next.js, and TailwindCSS,
          </span>{' '}
          I blend creativity with code to build seamless digital experiences.
        </p>
        <p className="mt-5 text-2xl font-light text-zinc-500 lg:text-4xl">
          Have an idea? Let me help you make that next big thing.
        </p>
        <a
          href="https://www.linkedin.com/in/vikrammahto/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex gap-3 rounded-lg border bg-zinc-600 px-6 py-3 text-2xl text-white transition duration-300 outline-none hover:cursor-pointer hover:bg-white hover:text-zinc-600"
        >
          Hire me! <MagicWandIcon />
        </a>
        <div className="flex items-center gap-3 mt-3">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-lime-500"></span>
          </span>
          <span className='text-zinc-500'>Available for freelance </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
