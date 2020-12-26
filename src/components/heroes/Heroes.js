import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

import "./HeroCard.css";

export const Heroes = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
  // const hero = getHeroesById(heroeId);

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="hero-wrap">
      <img
        src={`../assets/${heroeId}.jpg`}
        className="img-thumb animate__animated animate__zoomIn"
        alt={superhero}
      />
      <div className="text-wrap">
        <h1>{superhero}</h1>
        <ul>
          <li>Alter ego: {alter_ego}</li>
          <hr />
          <li>Publisher: {publisher}</li>
          <hr />
          <li>First appearance: {first_appearance}</li>
        </ul>
        {alter_ego !== characters && (
          <div>
            <h3>Characters</h3>
            <p>{characters}</p>
          </div>
        )}
        <div>
          <button className="blue mg-top-30" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
