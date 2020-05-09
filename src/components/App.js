import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
import '../App.css';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);

    const search = searchValue => {
        setLoading(true);

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(jsonResponse => {
                console.log('jsonResponse -> ', jsonResponse)
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            });
    };
      
    const getMovies = () => {
        if(loading)
            return <span>Loading...</span>

        return (
            movies.map( ( movie, index ) => {
                return <Movie key={'movie' + index} movie={ movie } />
            })
        );
    }

    return (
        <div className="App">
            <Header text="Movie Search App" />
            <Search search={search} />
            <div className="movies">
                { getMovies() }
            </div>
        </div>
    );
}

export default App;
