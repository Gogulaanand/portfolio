import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2">
      <Head>
        <title>Gogulaanand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-4/5 flex-1 text-center relative">
        <Nav />
        <div className="absolute top-0 mx-auto left-72 w-96 h-96 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob delay-500"></div>
        <div className="absolute top-0 mx-auto right-72 w-96 h-96 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob delay-1000"></div>
        <div className="absolute top-32 mx-auto w-96 h-96 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-2xl animate-blob delay-200"></div>

        <Image
          src="/profile.jpg"
          height={96}
          width={96}
          className="rounded-full my-2"
        />
        <h1 className="text-2xl font-semibold mt-4">HI, I'M GOGULAANAND</h1>

        <p className="mt-6 text-3xl font-extralight w-3/5 text-left align-middle leading-10 tracking-wide">
          I specialize in frontend web development. <br />I love building
          websites that allow people to immerse into the content and be
          inspired.
        </p>
        <ul className="flex justify-center mt-14">
          <li className="mx-8 text-red-400 leading-10 tracking-wide">
            <Link href="https://github.com/Gogulaanand/" passHref>
              <a target="_blank" rel="noreferrer">
                GITHUB
              </a>
            </Link>
          </li>
          <li className="mx-8 text-red-400 leading-10 tracking-wide">
            <Link href="https://www.linkedin.com/in/gogulaanand/" passHref>
              <a target="_blank" rel="noreferrer">
                LINKEDIN
              </a>
            </Link>
          </li>
          <li className="mx-8 text-red-400 leading-10 tracking-wide">
            <Link href="https://twitter.com/Gogulaanand13" passHref>
              <a target="_blank" rel="noreferrer">
                TWITTER
              </a>
            </Link>
          </li>
        </ul>
      </main>

      <footer className="flex flex-col items-center justify-between w-full h-24 py-4 border-t bg-black">
        <div className="w-4/5 flex justify-between text-white">
          <div>Socials</div>
          <div>
            <p className="text-sm hover:text-gray-400 cursor-pointer">
              GOGULAANAND02@GMAIL.COM
            </p>
          </div>
        </div>
        <hr className="w-4/5" />
        <a
          className="flex items-center justify-center text-gray-400 text-sm"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Gogulaanand Rammohan 2021
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
