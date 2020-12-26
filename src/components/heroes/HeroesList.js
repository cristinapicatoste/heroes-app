import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";
import "./HeroCard.css";

export const HeroesList = ({ publisher }) => {
  //Usamos el useMemo para optimizar el rendimineto de la aplicación
  //y evitar que se recargen los cards a no ser que cambie el publisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  // const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-list">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
