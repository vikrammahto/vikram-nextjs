import Image from 'next/image';
import React from 'react';
const Projects = () => {
  const works = [
    {
      title: 'Tototimer',
      description:
        'PWA App to Manage Time, Money and Work. [React, Tailwind CSS]',
      code: 'https://github.com/vikrammahto/tototimer',
      live: 'https://tototimer.vercel.app/',
      stack: 'React, Tailwind CSS',
      thumbnail: '/tototimer.svg',
    },
    {
      title: 'Sangeet - Music UI',
      description: 'Music app desktop UI made using HTML, Vanilla CSS and JS',
      code: 'https://github.com/vikrammahto/sangeet',
      live: 'https://vikrammahto.github.io/sangeet/',
      stack: 'HTMl, CSS, JavaScript',
      thumbnail: '/sangeet-music-desktop-ui.png',
    },
    {
      title: 'EngDing',
      description: 'E-learning landing page design using Bootstrap 5',
      code: 'https://github.com/vikrammahto/engding',
      live: 'https://vikrammahto.github.io/engding/',
      stack: 'HTML, Bootstrap 5',
      thumbnail: '/engding-thumb.png',
    },
  ];
  return (
    <section className="mx-auto max-w-xl px-4 py-20 md:px-8 lg:max-w-screen-xl lg:pt-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-4 grid gap-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="group space-y-5 rounded-2xl lg:gap-x-0 lg:gap-y-5"
          >
            <Image
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="h-auto w-full rounded-2xl object-cover"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p>{work.description}</p>
              <div className="flex w-full flex-row items-center gap-3">
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-60 inline-flex gap-2 rounded-lg border hover:bg-zinc-600 px-2 items-center py-1 hover:text-white transition duration-300 outline-none hover:cursor-pointer"
                >
                  Live{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-devices inline-block h-4 w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                    <path d="M16 9h2"></path>
                  </svg>
                </a>
                <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-60 inline-flex gap-2 rounded-lg border hover:bg-zinc-600 px-2 items-center py-1 hover:text-white transition duration-300 outline-none hover:cursor-pointer"
                >
                  Source code{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-code inline-block h-4 w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
