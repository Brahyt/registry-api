import React, { useEffect } from "react";
//import './SearchResults.scss';

const SearchResults = ({location}) => {

    useEffect(() => {


    })

    console.log({location})
        return (
            <div className="App">
              <p>{location.search}</p>
            </div>
        )
}

export default SearchResults;
