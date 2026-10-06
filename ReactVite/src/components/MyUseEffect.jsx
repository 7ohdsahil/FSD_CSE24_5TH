import React, { useEffect, useState } from 'react'

export default function MyUseEffect() {

    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(0);


    function increasecounter(){
        setCounter(counter+10);
    }

    function decreasePointer() {
        setPointer(pointer - 10);
    }

    useEffect(() => {
        console.log("Counter = " + counter);
        console.log("Pointer = " + pointer);
    }, [counter, pointer]);

    return (
        <div>
            <h2>Counter App</h2>
            <h1 style={{color:'red'}}>Counter Value = {counter}</h1>
            <h1 style={{ color: 'blue' }}>
                Pointer Value = {pointer}
            </h1>
            <button onClick={increasecounter}>Counter</button>
            <button onClick={decreasePointer}>Pointer</button>
        </div>
    )
}