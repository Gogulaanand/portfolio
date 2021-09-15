import "tailwindcss/tailwind.css";
import "@/styles/global.sass";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
