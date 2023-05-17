import React from 'react'
const Search = ({placeholder}) => {
    return (
        <input placeholder={`${placeholder? `${placeholder}`:""}`}
        className='placeholder:text-blue-400 px-2 outline-none text-sm rounded-md h-8' type="text"
        />

    )
}
export default Search