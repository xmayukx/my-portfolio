import Navbar from "./Navbar";
import ReactDOM, { useEffect, useState } from "react";
import Hometxt from "./Hometxt";
import Dock from "./Dock";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Dock/>
      <Hometxt />
    </div>
  );
}
