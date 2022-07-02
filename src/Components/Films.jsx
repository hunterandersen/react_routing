import React from "react";
import { useState, useEffect } from "react";
import * as MyConstants from "./MyConstants";

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading){
        fetch(`${MyConstants.GHIBLI_BASE_URL}${MyConstants.GHIBLI_FILMS_ENDPOINT}`)
        .then(res => res.json())
        .then(res => setFilms(res))
        .catch(err => console.error(err))
        .finally((res)=>{
            setIsLoading(false)
        })

    }
  }, []);

  return (
    isLoading? <h1>Loading...</h1> :
    films.map((film) => <h2 key={film.id}>{film.title}</h2>)
  );
}

export default Films;
