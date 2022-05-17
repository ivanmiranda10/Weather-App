import React from "react";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.searchBarDiv}>
        <SearchBar />
      </div>
      <div></div>
    </nav>
  );
}
