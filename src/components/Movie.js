import React from "react";


const DEFAULT_PLACEHOLDER_IMAGE = "https://critics.io/img/movies/poster-placeholder.png";

const Movie = () => {
    
    return (
        <div className="movie">
            <h2 className="movie-title">
                { 'title' }
            </h2>
            <div className="movie-img-container">
                <img
                    className="movie-img"
                    width="200"
                    alt={`The movie titled: title`}
                    src={DEFAULT_PLACEHOLDER_IMAGE}
                />
            </div>
            <div className="movie-info">
                ({'year'})
            </div>
        </div>
    );
};


export default Movie;