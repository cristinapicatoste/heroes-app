import React from "react";
import { HeroesList } from "../heroes/HeroesList";

export const Marvel = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>MARVEL HEROES</h1>
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
};
