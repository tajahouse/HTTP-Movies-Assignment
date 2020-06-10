import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Link } from 'react-router-dom';

import { useRouteMatch } from "react-router-dom";

function Movie(props) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const match = useRouteMatch();

  // const movie = props.movie;
// const id = movie.id
console.log(movie)

  const deleteMovie = () =>{
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(res =>{
      console.log('delete',res)
      window.location = "/"
    }).catch(err =>{
      console.log(err)
    })
  }


  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    props.addToSavedList(movie);
  };


  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      <Link className="edit-button" to={`../update-movie/${movie.id}`}>Edit</Link>
      <button className = "delete-button" onClick={deleteMovie}>Delete</button>

    </div>
  );
}

export default Movie;
