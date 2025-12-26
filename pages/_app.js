import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import OffCanvasMenu from "@/components/offCanvasMenu/OffCanvasMenu";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

// we use useContext for access to menuStatus value to all our components or better say that to share them all
export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [menuStatus, setMenuStatus] = useState("close");

  // we use useEffect for close our offCanvasMenu when change our routes for ex : from laptops go to mobile in this time our menu is closed.
  const router = useRouter();

  useEffect(() => {
    setMenuStatus("close");
  }, [router.asPath]);

  return (
    <AppContext.Provider value={{ menuStatus, setMenuStatus }}>
      <Head>
        <title>store project</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {menuStatus === "open" && <OffCanvasMenu />}
    </AppContext.Provider>
  );
}
