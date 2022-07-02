import React from "react";
import * as MyConstants from "./MyConstants";
import { useState, useEffect } from "react";

function People() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      console.log(`fetching`);
      fetch(
        `${MyConstants.GHIBLI_BASE_URL}${MyConstants.GHIBLI_PEOPLE_ENDPOINT}`
      )
        .then((res) => res.json())
        .then((res) => setPeople(res))
        .catch((err) => console.error(err))
        .finally((res) => {
          setIsLoading(false);
        });
    }
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    people.map((person) => <h2 key={person.id}>{person.name}</h2>)
  );
}

export default People;
