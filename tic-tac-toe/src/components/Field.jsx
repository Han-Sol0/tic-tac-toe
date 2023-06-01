import React, {useState} from "react"
import Button from './Button'
import Information from "./Information"

const Field = () => {
    const [massif, setMassif] = useState(Array(9).fill(null))
    const [move, setMove] = useState(true)
    const result = Information(massif)

    const handleClick = (index) => {
        const newMassif = [...massif]
        if (result || newMassif[index]) return
        newMassif[index] = move ? 'X' : 'O'
        setMassif(newMassif)
        setMove(!move)
    }

    const clear = () => {
        return (
            <button className="btn" onClick={() => setMassif(Array(9).fill(null))}>Новая игра</button>
        )
    }

    return (
        <>
            <Button squares = {massif} click={handleClick}/>
            {clear()}
            <p className="btn">
                { result ? 'Победитель  ' + result : 'Ход  ' + (move ? 'X' : 'O')}
            </p>
        </>
    )
}

export default Field
