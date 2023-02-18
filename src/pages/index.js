import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "../styles/Home.module.css";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello World!</h1>
    </div>
  );
}
