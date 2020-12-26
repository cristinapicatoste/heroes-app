import React, { useMemo } from "react";
import queryString from "query-string";

import { useLocation } from "react-router-dom";
// import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

import "./Search.css";

export const Search = ({ history }) => {
  // parsea un query string
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  //   const heroesFiltered = getHeroesByName(searchText);

  const handleSearch = (e) => {
    history.push(`?q=${searchText}`);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="search-wrap animate__animated animate__fadeIn">
      <div className="search">
        <h1>Search</h1>
        <input
          type="text"
          name="searchText"
          value={searchText}
          placeholder="Find your hero"
          className="form"
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
        <button className="blue mg-top-30" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="result">
        <h1>Results</h1>
        {/* {q === "" && <div className="">Search a hero</div>} */}
        {q !== "" && heroesFiltered.length === 0 && (
          <div className="">There's no a hero with {q}</div>
        )}
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
