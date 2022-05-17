import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.brandNameContainer}>
          <h1 className={styles.brandName}>Weather App</h1>
        </div>
        <div className={styles.productDescContainer}>
          <h1 className={styles.productDescription}>
            The only
            <br />
            <strong className={styles.weather}>Weather Forecast </strong>
            you need
          </h1>
        </div>
        <div>
          <Link to="/home">
            <button className={styles.button}>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
