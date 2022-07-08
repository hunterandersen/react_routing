import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIService } from "../shared/API.service";
import * as MyConstants from "../shared/MyConstants";

export default function Film() {
  const [film, setFilm] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  async function getData() {
    let film = await APIService.getItem(
      MyConstants.GHIBLI_FILMS_ENDPOINT,
      params.filmId
    );
    if (film) {
      setFilm(film);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-center flex-column gap-10">
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <img src={`${film.movie_banner}`} alt={`Banner for ${film.title}`} className="film-banner-img"></img>
    </div>
  );
}
