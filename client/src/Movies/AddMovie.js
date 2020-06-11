import React, { useParams, useState } from "react";
import axios from "axios";

const AddMovie = props =>{
    // const params = useParams();
        


    const [formState, setFormState] = useState(
    {
    title: "",
    director: "",
    id: "",
    metascore:"",
    stars: []
    }
    
)

    
const handleSubmit = e => {
    e.preventDefault();
    axios
    .post(`http://localhost:5000/api/movies/`, formState)
    .then(res => { console.log("Add Movie",res)
    window.location = "/"
    })
    .catch(err => console.log(err))
}
const handleChange = e => {
    setFormState({...formState, [e.target.name]: [e.target.value]})
}

    return (

        <div >            
            <form className="form" onSubmit={e=> handleSubmit(e)}>
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

export default AddMovie;