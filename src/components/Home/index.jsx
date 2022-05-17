import React from "react";
import NavBar from "../NavBar";
import CityCards from "../CityCards";
import Card from "../Card/";
import CardDetail from "../CardDetail";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  const cities = useSelector((state) => state.cities);
  const displayMessage = useSelector((state) => state.displayMessage);

  return (
    <div className={styles.container}>
      <NavBar />
      {displayMessage ? (
        <h2 className={styles.message}>Search for any city!</h2>
      ) : Object.keys(city).length > 0 && cities.length > 0 ? (
        <div className={styles.cardContainer}>
          <div>
            <CityCards />
          </div>
          <div className={styles.card}>
            <Card />
          </div>
          <div>
            <CardDetail />
          </div>
        </div>
      ) : null}
    </div>
  );
}
