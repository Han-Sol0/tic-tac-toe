import React from "react"
import { useState } from 'react';

const Button = (key, squares, setSquares) => {
    const [value, setValue] = useState(squares[key]);
    const handleClick = () => {
        setValue('X');
        setSquares(squares[key]=value);// надо изменить массив а он не изменяется
    }
    return <>
        <button className='button' onClick={handleClick} key={key}>{value}</button>
    </>
}
export default Button