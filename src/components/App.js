import React from 'react';
import Header from './Header';
import Search from './Search';
import '../App.css';

function App() {
    return (
        <div className="App">
            <Header text="Movie Search App" />
            <Search />
        </div>
    );
}

export default App;
