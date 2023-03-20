import Navbar from "./Navbar";
import ReactDOM, { useEffect, useState } from "react";
import Intro from "./Intro";
import Dock from "./Dock";
import Head from "next/head";
import About from "./about";
import Contact from "./Contact";
import Work from "./Work";

export default function Home() {

  return (

    <div>
      <Head>
        <title>Mayukh Hazari</title>
      </Head>
      <Navbar />
      <div className="mx-[1.85rem]">
        {/* <Dock /> */}
        <Intro />
        {/* <About />
      <Work />
      <Contact /> */}
      </div>
    </div>
  );
}
