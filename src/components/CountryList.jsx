import React from "react";
import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CityContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your First city by clicking on the Map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} city={country} />
      ))}
    </ul>
  );
}

export default CountryList;
