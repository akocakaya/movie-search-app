import React, { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        console.log('e -> ', e)
        resetInputField();
    }

    return (
        <form className="search">
            <input
                className="search-input"
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input 
                className="search-button"
                onClick={callSearchFunction} 
                type="submit" 
                value="SEARCH" 
            />
        </form>
        );
}

export default Search;
