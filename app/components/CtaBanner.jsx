import React from 'react';
import { MagicWandIcon } from './Icons';

const CtaBanner = () => {
  return (
    <section className="bg-zinc-100">
      <div className="mx-auto max-w-xl px-4 py-20 md:px-8 lg:max-w-screen-xl lg:pt-16 lg:text-center">
        <h1 className="text-4xl font-light">
          Let&apos;s create something extraordinary together.
        </h1>
        <a
          href="https://www.linkedin.com/in/vikrammahto/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex gap-3 rounded-lg border bg-white px-6 py-3 text-2xl text-zinc-600 transition duration-300 outline-none hover:cursor-pointer hover:bg-zinc-600 hover:text-white"
        >
          Book a call <MagicWandIcon />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
