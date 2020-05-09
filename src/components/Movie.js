import React from "react";


const DEFAULT_PLACEHOLDER_IMAGE = "https://critics.io/img/movies/poster-placeholder.png";

const Movie = ({ movie }) => {
    
    return (
        <div className="movie" onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}/`, '_blank')}>
            <h2 className="movie-title">
                { movie.Title }
            </h2>
            <div className="movie-img-container">
                <img
                    className="movie-img"
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={movie.Poster == 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}
                />
            </div>
            <div className="movie-info">
                ({ movie.Year })
            </div>
        </div>
    );
};


export default Movie;