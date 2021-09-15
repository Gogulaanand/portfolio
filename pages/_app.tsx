import "tailwindcss/tailwind.css";
import "@/styles/global.sass";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Social from "@/components/social";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <Social />
    </>
  );
}

export default MyApp;
