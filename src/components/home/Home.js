import React from "react";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import "./Home.css";

export const Home = () => {
  let heroesRandom = [];

  for (let i = 0; i < heroes.length; i++) {
    const randomI = Math.floor(Math.random() * heroes.length);
    heroesRandom.push(heroes[randomI]);
  }

  return (
    <div className="home-wrap">
      <h1>HEROES APP</h1>
      {heroesRandom.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
