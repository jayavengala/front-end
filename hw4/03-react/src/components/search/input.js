import React from 'react';
import './input-styles.css'

export const Input = ({placeholder , handleChange }) => {
    return(
        <>
        <input 
        className = 'search'
        placeholder = {placeholder}
        onChange = {handleChange}
        ></input>
        </>
    )
}


export default Input;