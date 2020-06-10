import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom';

const UpdateMovie = props => {
    const params = useParams();
        
    const movieTitle = props.movies.length === 0? [] : props.movies.filter(movie => params.id === movie.id? movie.title : null);
    console.log(movieTitle);

    const [formState, setFormState] = useState(
    {
    title: "",
    director: "",
    id: params.id,
    metascore:"",
    stars: []
    }
    
)

    
const handleSubmit = e => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/api/movies/${params.id}`, formState)
    .then(res => { console.log(res)
    window.location = "/"
    })
    .catch(err => console.log(err))
}
const handleChange = e => {
    setFormState({...formState, [e.target.name]: e.target.name === "stars" ? [e.target.value] : e.target.value})
}

    return (

        <div>            
            <form onSubmit={e=> handleSubmit(e)}>
                <label htmlFor="title">
                    Title:
                    <input id="title" type="text" name="title" onChange={handleChange} value={formState.title}  />
                </label>
                <label htmlFor="director">
                    Director:
                    <input id="director" type="text" name="director" onChange={handleChange} value={formState.director} />
                </label>
                <label htmlFor="metascore">
                    Metascore:
                    <input id="metascore" type="text" name="metascore" onChange={handleChange} value={formState.metascore} />
                </label>
                <label htmlFor="stars">
                    Actors:
                    <input id="stars" type="text" name="stars" onChange={handleChange} value={formState.stars} />
                </label>
                <button>Submit</button>
            </form> 

        </div>
    )
}

export default UpdateMovie;