import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Movie from './Movie';
import '../App.css';

const App = () => {
    const [movies, setMovies] = useState([]);

    const search = searchValue => {
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.API_KEY}`)
            .then(response => response.json())
            .then(jsonResponse => {
                console.log('jsonResponse -> ', jsonResponse)
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                }
            });
  	};

    return (
        <div className="App">
            <Header text="Movie Search App" />
            <Search search={search} />
            <Movie />
        </div>
    );
}

export default App;
