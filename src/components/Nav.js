import React, { useState } from 'react';
import { loadMovie } from '../actions/movieAction';
import { useDispatch } from 'react-redux';
import logo from '../img/film-strip.svg';

const Nav = () => {
    const dispatch = useDispatch();
    // Input State
    const [inputText, setInputText] = useState('');
    // InputHandler
    const inputHandler = (e) => {
        setInputText(e.target.value);
    }
    // Submit Search
    const submitSearchHandler = (e) => {
        e.preventDefault();
        dispatch(loadMovie(inputText))
        setInputText('');
    }

    return (
        <div>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Aura Studios</h1>
            </div>
            <div className="search">
                <input value={inputText} onChange={inputHandler} type="text" />
                <button onClick={submitSearchHandler} type='submit'>Search</button>
            </div>
        </div>
    )
}

export default Nav;