import React from "react";
import { useState, useEffect } from "react";
import * as MyConstants from "../shared/MyConstants";
import { APIService } from "../shared/API.service";
import { useNavigate } from "react-router-dom";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
          <p>
            {film.title} ({film.original_title_romanised}) - {film.release_date}
          </p>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>{film.rt_score}%</p>
          <button onClick={()=>{
            navigate(`${film.id}`);
          }}>See More</button>
        </li>
      ))}
    </ul>
  );
}

export default Films;
