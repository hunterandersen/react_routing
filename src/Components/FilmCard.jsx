import React from "react";
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  return (
    <Link to={`${film.id}`} className="card-link">
      <div className="hover-color">
        <p>
          {film.title} ({film.original_title_romanised}) - {film.release_date}
        </p>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
        <p>{film.rt_score}%</p>
      </div>
    </Link>
  );
}
