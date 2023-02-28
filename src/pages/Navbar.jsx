import styles from "../styles/Navbar.module.css";
import { Inter } from "@next/font/google";
import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
import { ClassNames } from "@emotion/react";
import SwipeableEdgeDrawer from "./Drawer";

export function Navbar(props) {
  const [showNav, setshowNav] = useState(true);

  let height = props.dimension.height;
  let width = props.dimension.width;

  // useEffect(() => {
  //   if (height <= 1024 || width <= 768) {
  //     setshowNav(false);
  //   }
  // }, []);

  return (
    <div>
      <nav
        className={styles.nav1}
        // style={{ display: !showNav ? "none" : "" }}
      >
        <ul>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <li>
            <a href="/career">CAREER</a>
          </li>
          <li>
            <a href="/about">ABOUT ME</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
