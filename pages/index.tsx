import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/nav";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2 mx-auto relative">
      <Head>
        <title>Gogulaanand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute -top-16 right-0 hidden lg:block">
        <Image
          src="/blob.png"
          width={1000}
          height={1000}
          className="animate-blob mix-blend-multiply"
        />
      </div>
      <main className="flex flex-col items-center justify-center flex-1 text-center mt-12 min-h-screen max-h-screen">
        <Nav />
        <section className="flex flex-col items-start w-3/5 fade-in-bottom">
          <h1 className="text-left font-bold text-4xl md:text-6xl leading-tight">
            A frontend developer passionate about building beautifully designed
            websites
          </h1>
          <p className="text-left font-semibol text-2xl leading-tight text-gray-500 my-8">
            Software Engineer at{" "}
            <a
              className="text-gray-600 underline"
              href="https://freshworks.com"
              target="_blank"
              rel="norefferer"
            >
              xyz
            </a>
          </p>
          <button className="mt-3 px-4 py-3 bg-black text-white rounded-lg font-semibold">
            View Projects
          </button>
        </section>
      </main>
      <Contact />
      <div className="h-screen"></div>
    </div>
  );
}
