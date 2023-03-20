import Navbar from "./Navbar";
import ReactDOM, { useEffect, useState } from "react";
import Hometxt from "./Hometxt";
import Dock from "./Dock";
import Head from "next/head";

export default function Home() {

  return (
    
    <div>
    <Head>
      <title>Mayukh Hazari</title>
    </Head>
      <Navbar />
      <Dock/>
      <Hometxt />
    </div>
  );
}
