import React from "react";
import * as MyConstants from "../shared/MyConstants";
import { useState, useEffect } from "react";
import { APIService } from "../shared/API.service";

function People() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData(){
    let people = await APIService.getList(MyConstants.GHIBLI_PEOPLE_ENDPOINT);
    if (people) {
      setPeople(people);
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    getData();
  } , []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    people.map((person) => <h2 key={person.id}>{person.name}</h2>)
  );
}

export default People;
