import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'MDX'],
    },
    {
      category: 'Frontend Frameworks & Libraries',
      items: ['React.js', 'Next.js', 'jQuery'],
    },
    {
      category: 'UI Frameworks & Components',
      items: ['TailwindCSS', 'Shadcn UI', 'Bootstrap', 'SCSS'],
    },
    {
      category: 'Design & Prototyping',
      items: ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe XD'],
    },
    {
      category: 'CMS & E-commerce',
      items: ['WordPress', 'Shopify'],
    },
    {
      category: 'Tools & Version Control',
      items: ['Git', 'GitHub', 'Bitbucket', 'Jira'],
    },
  ];

  return (
    <div className="mx-auto max-w-xl px-4 py-20 md:px-8 lg:max-w-screen-xl lg:pt-16">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="mt-3 md:grid md:grid-cols-3 md:gap-4 lg:mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-b-1 border-dashed border-zinc-300 py-3 first-of-type:pt-0 md:border-0"
          >
            <h2 className="text-2xl">{skill.category}</h2>
            <div className="flex">
              <ul>
                {skill.items.map((item, index) => (
                  <li
                    key={index}
                    className="relative inline-block px-3 before:absolute before:top-1/2 before:left-0 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
