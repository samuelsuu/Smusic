import React from 'react';
import './search.css';
import { IoSearchOutline } from "react-icons/io5";

function Search() {
    return ( 
        <div className='search'>
            <input type='search' name='search' placeholder='Search' />
            <button><IoSearchOutline /></button>
        </div>
     );
}

export default Search;