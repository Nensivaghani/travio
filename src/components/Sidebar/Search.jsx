import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = () => {
    return (
        <>
            <div className="sidebar">
                <div className="title">
                    <h3>Search</h3>
                </div>
                <form method='post' className='search-form'>
                    <div class="form-group">
                        <input type="search" name="search-field" placeholder="Search" required=""/>
                            <button type="submit"><FaSearch /></button>
                    </div>
                </form>
            </div>




        </>
    )
}

export default Search