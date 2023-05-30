import React from "react"
import { useState } from 'react';
import Button from '../components/Button'

 const Field = () => {
    const number = ['-','-','-','-','-','-','-','-','-',]
    const [squares, setSquares] = useState(number)
    return <>
        {
        squares.map(( e, i) => <Button key={i} e={e} squares={squares} setSquares={setSquares}/>)
        
        }
    </>
}

export default Field