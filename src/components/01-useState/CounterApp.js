import { useState } from "react";
import React from 'react';

export default function CounterApp() {

    
    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40,
    });

    const {counter1,counter2}= state; //estamos tomando las propiedades del counter 1 y del cunter 2, del estado.

    return (
        <>
            <h1>Counter</h1>
            <hr/>
            <h2>{counter1}</h2>
            <h2>{counter2}</h2>
            <button className='btn btn-primary' onClick={()=>{setState({ //el setState es el que permite hacer el cambio de estado del elemento
                ...state, //se utiliza el expred para mantener nuetras propiedades del estado y no perjudicarlas
                counter1:counter1+1, //aqui se toma la posicion 1 y se le suma 1 
            })}}>+1</button>
        </>
    )
}
