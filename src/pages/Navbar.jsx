import styles from "../styles/Navbar.module.css";
import { Inter } from "@next/font/google";

export function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
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
