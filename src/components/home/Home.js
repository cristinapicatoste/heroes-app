import React from "react";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-wrap">
      <h1>HEROES APP</h1>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
