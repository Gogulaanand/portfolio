import React from "react";
import Image from "next/image";
import Contact from "@/components/contact";

export default function About() {
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
            <p className="skills">HTML</p>
            <p className="skills">CSS</p>
            <p className="skills">JAVASCRIPT</p>
            <p className="skills">TYPESCRIPT</p>
            <p className="skills">REACT</p>
            <p className="skills">NEXT.JS</p>
            <p className="skills">TAILWINDCSS</p>
            <p className="skills">JEST</p>
            <p className="skills">GRAPHQL</p>
            <p className="skills">EXPRESS</p>
            <p className="skills">MONGODB</p>
            <p className="skills">CMS</p>
            <p className="skills">CI/CD</p>
            <p className="skills">TECH WRITING</p>
          </section>
        </div>
      </main>
      <Contact />
    </>
  );
}
