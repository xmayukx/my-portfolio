import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "../styles/Home.module.css";
import Navbar from "./Navbar";
import SwipeableEdgeDrawer from "./Drawer";
import ReactDOM, { useEffect, useState } from "react";
import Hometxt from "./Hometxt";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Hometxt />
    </div>
  );
}
