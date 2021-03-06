import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
import '../App.css';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies]   = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const search = searchValue => {
        setLoading(true);
        setErrorMessage(null);

        fetch(`https://www.omdbapi.com/?s=${searchValue ?? 'map'}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setErrorMessage(jsonResponse.Error);
                    setLoading(false);
                }
            });
    };

    useEffect(() => {
        search()
    }, []);

    return (
        <div className="App">
            <Header text="Movie Search App" />
            <Search search={search} />
            <div className="movies">
            {
                loading && !errorMessage 
                    ?   <span>loading...</span>
                    :   errorMessage 
                            ?   <div className="errorMessage">{errorMessage}</div> 
                            :   movies.map((movie, index) => (
                                    <Movie key={`movie-${index}`} movie={movie} />
                                ))
            }
            </div>
        </div>
    );
}

export default App;
