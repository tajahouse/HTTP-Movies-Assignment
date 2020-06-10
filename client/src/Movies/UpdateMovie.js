import React from 'react';

const UpdateMovie = () => {
    return (
            <form>
                <label htmlFor="movie">
                    <input id="movie" type="text" name="movie" />
                </label>
                <label htmlFor="director">
                    Director:
                    <input id="director" type="text" name="director" />
                </label>
                <label htmlFor="metascore">
                    Metascore:
                    <input id="metascore" type="text" name="metascore" />
                </label>
                <label htmlFor="actors">
                    Actors:
                    <input id="actors" type="text" name="actors" />
                </label>
                <button>Submit</button>
            </form>

    )
}

export default UpdateMovie;