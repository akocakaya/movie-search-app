import React from "react";


const DEFAULT_PLACEHOLDER_IMAGE = "https://critics.io/img/movies/poster-placeholder.png";

const Movie = () => {
    
    return (
        <div className="movie">
        <h2>{'title'}</h2>
        <div>
            <img
                width="200"
                alt={`The movie titled: title`}
                src={DEFAULT_PLACEHOLDER_IMAGE}
            />
        </div>
        <p>({'year'})</p>
        </div>
    );
};


export default Movie;