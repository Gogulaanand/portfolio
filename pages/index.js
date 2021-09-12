import Head from "next/head";
import Link from "next/link";
import Nav from "@/components/index/nav";
import Contact from "@/components/index/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-2">
      <Head>
        <title>Gogulaanand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center mt-12 min-h-screen max-h-screen">
        <Nav />

        <section className="flex flex-col items-start w-3/5">
          <h1 className="text-left font-bold text-6xl leading-tight">
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

        {/* <div className="w-96 h-96 relative">
          <div className="absolute left-0 top-0 mx-auto w-72 h-72 bg-purple-300 rounded-full opacity-70 mix-blend-luminosity filter blur-2xl animate-blob delay-500"></div>
          <div className="absolute top-0 right-0 mx-auto w-72 h-72 bg-yellow-500 rounded-full opacity-70 mix-blend-luminosity filter blur-2xl animate-blob delay-1000"></div>
          <div className="absolute bottom-0 right-0 mx-auto w-72 h-72 bg-green-100 rounded-full opacity-70 mix-blend-luminosity filter blur-2xl animate-blob delay-200"></div>
          <div className="absolute bottom-0 left-0 mx-auto w-72 h-72 bg-red-300 rounded-full opacity-70 mix-blend-luminosity filter blur-2xl animate-blob delay-200"></div>
        </div> */}
      </main>

      <Contact />
      <div className="h-screen"></div>

      <footer className="flex flex-col items-center justify-between w-full h-24 py-4"></footer>
    </div>
  );
}
