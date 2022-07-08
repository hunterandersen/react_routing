import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIService } from "../shared/API.service";
import * as MyConstants from "../shared/MyConstants";
import { Link } from "react-router-dom";

export default function Film() {
  const [person, setPerson] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  async function getData() {
    let person = await APIService.getItem(
      MyConstants.GHIBLI_PEOPLE_ENDPOINT,
      params.personId
    );
    if (person) {
      setPerson(person);
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
    <div className="flex-column flex-center gap-10">
      <h1>{person.name}</h1>
      <p>
        {person.gender} - {person.age}
      </p>
      <p>Eyes: {person.eye_color}</p>
      <p>Hair: {person.hair_color}</p>
      {person.films.map((film) => {
        let filmId = film.slice(film.lastIndexOf("/") + 1);
        return (
          <Link
            to={`/films/${filmId}`}
            key={`${filmId}`}
            style={{ textDecoration: "none", color: "blue" }}
          >
            Go To Movie
          </Link>
        );
      })}
    </div>
  );
}
