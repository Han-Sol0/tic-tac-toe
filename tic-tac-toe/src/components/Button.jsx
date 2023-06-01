import React from "react"


const Button = ({squares, click}) => {
    return (
        <>
            {
                squares.map((square, i) => (
                    <button className = 'button' onClick={()=> click(i)}>{square}</button>
                ))
            }
        </>
    )
}

export default Button
