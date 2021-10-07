import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Social() {
  const socials = [
    { link: "https://www.linkedin.com/in/gogulaanand/", logo: "linkedin" },
    { link: "https://github.com/Gogulaanand", logo: "github" },
    { link: "https://twitter.com/Gogulaanand13", logo: "twitter" },
    { link: "mailto:gogulaanand02@gmail.com", logo: "gmail" },
  ];
  return (
    <div className="hidden lg:flex lg:flex-col gap-2 fixed bottom-0 right-0 z-10 mr-6 mb-12 fade-in-right">
      {socials.map((social) => {
        return (
          <Link href={social.link} passHref key={social.logo}>
            <a target="_blank" rel="noreferrer">
              <Image
                src={`/socials/${social.logo}.svg`}
                width={24}
                height={24}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
}
