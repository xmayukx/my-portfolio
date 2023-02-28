import styles from "../styles/Hometxt.module.css";
import React, { useEffect, useState } from "react";
import greet from "./intro";
export function Hometxt() {
  // const properties = Object.keys(greet);
  // console.log(greet);
  return (
    <div>
      <div className="montse font-bold text-yellow-400 text-7xl mt-48">
        <h1 className={styles.greet}>
          Hello <span className="text-white">there!</span>
        </h1>
      </div>

      <div className="montse font-normal text-left flex-wrap text-gray-50 mx-96 relative bottom-32">
        {greet.about}
      </div>
    </div>
  );
}
