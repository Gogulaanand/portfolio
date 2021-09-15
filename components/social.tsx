import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Social() {
  return (
    <div className="flex flex-col gap-2 fixed bottom-0 right-0 z-10 mr-6 mb-12 fade-in-right">
      <Link href="https://www.linkedin.com/in/gogulaanand/" passHref>
        <a target="_blank" rel="noreferrer">
          <Image src="/linkedin.svg" width={24} height={24} />
        </a>
      </Link>
      <Link href="https://github.com/Gogulaanand" passHref>
        <a target="_blank" rel="noreferrer">
          <Image src="/github.svg" width={24} height={24} />
        </a>
      </Link>
      <Link href="https://twitter.com/Gogulaanand13" passHref>
        <a target="_blank" rel="noreferrer">
          <Image src="/twitter.svg" width={24} height={24} />
        </a>
      </Link>
      <Link href="mailto:gogulaanand02@gmail.com" passHref>
        <a target="_blank" rel="noreferrer">
          <Image src="/gmail.svg" width={24} height={24} />
        </a>
      </Link>
    </div>
  );
}
