import React from 'react'
import useCounter from '../../hooks/useCounter'

export default function CounterWithCustomHook() {

   const {state,increment,decrement,reset} = useCounter();
    return (
        <>
            <h1>
                Counter With Hook:{state}
            </h1>
        <hr/>
            <button onClick={increment} className="btn btn-primary mx-2">+1</button>
            <button onClick={reset} className="btn btn-primary mx-2">reset</button>
            <button onClick={decrement} className="btn btn-primary mx-2">-1</button>
        </>
    )
}
