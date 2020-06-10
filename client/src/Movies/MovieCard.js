import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  const movie = props.movie;
  console.log({movie})

  const deleteMovie = () =>{
    axios.delete(`http://localhost:5000/api/movies/${id}`)
    .then(res =>{
      console.log('delete',res)
      window.location = "/"
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <button onClick={deleteMovie}>Delete</button>
    </div>
  );
};

export default MovieCard;
