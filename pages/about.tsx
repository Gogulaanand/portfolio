import React from "react";
import Image from "next/image";
import Contact from "@/components/contact";

export default function About() {
  const skills = [
    { name: "HTML", logo: "html5" },
    { name: "CSS", logo: "css3" },
    { name: "JAVASCRIPT", logo: "javascript" },
    { name: "TYPESCRIPT", logo: "typescript" },
    { name: "REACT", logo: "react" },
    { name: "NEXT.JS", logo: "nextdotjs" },
    { name: "TAILWINDCSS", logo: "tailwindcss" },
    { name: "JEST", logo: "jest" },
    { name: "GRAPHQL", logo: "graphql" },
    { name: "EXPRESS", logo: "express" },
    { name: "MONGODB", logo: "mongodb" },
    { name: "CI/CD", logo: "circleci" },
    { name: "CMS", logo: "strapi" },
    { name: "TECH WRITING", logo: "blogger" },
  ];

  return (
    <>
      <main className="w-4/5 flex flex-col mx-auto">
        <div className="flex items-center justify-between flex-1 text-center mx-auto mt-12 w-5/6 min-h-screen max-h-screen fade-in-bottom">
          <Image
            src="/profile.jpg"
            height={600}
            width={550}
            className="rounded-xl"
          />
          <section className="w-full justify-start text-left mx-12">
            <h1 className="text-7xl">Hi there !</h1>
            <p className="text-2xl font-thin mt-4">
              Fuelled by a passion for building beautiful, compelling websites,
              I have a deep desire to excel and continuously improve in my work.
              Learn more about my journey below.
            </p>
          </section>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between flex-1 text-center mx-auto w-5/6 fade-in-bottom mb-36">
          <section className="w-full lg:w-4/6 text-center lg:text-left lg:pr-12">
            <h2 className="text-5xl">My Career So Far</h2>
            <p className="text-xl font-extralight mt-8">
              Always up for a challenge, I have worked for lean start-ups and
              was a member of the first New Zealand start-up to attend Y
              Combinator, the largest start-up accelerator in the world. From
              there, I worked my way up to Art Director and Team Lead at Appster
              where I oversaw the design of 30+ mobile and desktop apps.
              Currently, I work as a software engineer at SaaS start-up xyz.
            </p>
          </section>
          <section className="w-full lg:w-2/6 flex flex-wrap justify-start">
            {skills.map((skill) => {
              return (
                <>
                  <div className="skills flex" key={skill.name}>
                    <p className="px-2">{skill.name}</p>
                    <Image
                      src={`/skills/${skill.logo}.svg`}
                      width={24}
                      height={24}
                    />
                  </div>
                </>
              );
            })}
          </section>
        </div>
      </main>
      <Contact />
    </>
  );
}
