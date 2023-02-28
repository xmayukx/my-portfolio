import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "../styles/Home.module.css";
import { Navbar } from "./Navbar";
import SwipeableEdgeDrawer from "./Drawer";
import ReactDOM, { useEffect, useState } from "react";
import { Hometxt } from "./Hometxt";

export default function Home() {
  const [windo, setwindo] = useState({
    height: 0,
    width: 0,
  });

  async function windoHandler() {
    await setwindo({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", windoHandler);
    return () => window.removeEventListener("resize", windoHandler);
  }, []);

  return (
    <div>
      <Navbar dimension={windo} />
      <Hometxt/>
    </div>
  );
}
