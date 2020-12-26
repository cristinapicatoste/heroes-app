import React from "react";
import { HeroesList } from "../heroes/HeroesList";

export const Dc = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>DC HEROES</h1>
      <HeroesList publisher="DC Comics" />
    </div>
  );
};
