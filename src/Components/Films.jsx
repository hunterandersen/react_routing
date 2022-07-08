import React from "react";
import { useState, useEffect } from "react";
import * as MyConstants from "../shared/MyConstants";
import FilmCard from "./FilmCard";
import { APIService } from "../shared/API.service";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function getData() {
    let films = await APIService.getList(MyConstants.GHIBLI_FILMS_ENDPOINT);
    if (films) {
      setFilms(films);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <FilmCard film={film}/>
        </li>
      ))}
    </ul>
  );
}

export default Films;
