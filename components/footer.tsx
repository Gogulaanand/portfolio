import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col footer-font">
      <div className="flex items-center justify-between w-3/5 mx-auto h-24 py-4">
        <p>RG</p>
        <div className="flex justify-between gap-8">
          <Link href="/about" passHref>
            <a>Github</a>
          </Link>
          <Link href="https://www.linkedin.com/in/gogulaanand/" passHref>
            <a>LinkedIn</a>
          </Link>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
          <Link href="/#contact" passHref>
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <p className="text-center mt-2 mb-8 text-sm">
        Copyright © 2021 Gogulaanand Rammohan. All rights reserved.
      </p>
    </footer>
  );
}
