import React from 'react';
import {
  CodeIcon,
  CommerceIcon,
  DesignIcon,
  SaasIcon,
  SpeedIcon,
} from './Icons';

const Services = () => {
  const items = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon />,
      desc: 'Frontend development services using React and Angular to create dynamic and responsive web applications.',
    },
    {
      title: 'SaaS Products',
      icon: <SaasIcon />,
      desc: "Got a game-changing SaaS idea? We'll turn it into a sleek, scalable product that users will love.",
    },
    {
      title: 'E-commerce Development',
      icon: <CommerceIcon />,
      desc: 'Shopify design and development services to help businesses create, launch, and optimize their online stores.',
    },
    { title: 'PageSpeed Optimization', icon: <SpeedIcon />, desc: '' },
    { title: 'Graphic Design', icon: <DesignIcon />, desc: '' },
  ];
  return (
    <section className="mx-auto max-w-xl px-4 py-20 md:px-8 lg:max-w-screen-xl lg:pt-16">
      <h1 className="text-3xl font-bold">Services I can help you with</h1>
      <div className="grid grid-cols-1 gap-4 mt-3 lg:mt-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            {item.icon}
            <h2 className="text-xl font-light">{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
