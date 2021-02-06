import React from "react";
import "./HeroCard.css";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card-wrap">
      <div className="card-img">
        <img src={`./assets/${id}.jpg`} alt={superhero} className="img" />
      </div>
      <div className="card-body">
        <h3>{superhero}</h3>
        <p>{alter_ego}</p>
        {/* {alter_ego !== characters && <p>{characters}</p>} */}
        <pre>{first_appearance}</pre>
        <Link to={`./heroes/${id}`}>More...</Link>
      </div>
    </div>
  );
};
