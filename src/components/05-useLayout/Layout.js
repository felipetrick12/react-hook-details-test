import React from 'react'
import useCounter from '../../hooks/useCounter';
import { useFecth } from '../../hooks/useFecth'

export const Layout = () => {
    
 
    const {counter,increment} =useCounter();
   const {data}=useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote} = !!data && data[0];
   
    return (
        <>
            <h1>Layout Effect</h1>

            <blockquote className='blockquote text-center '>
                        <p className='mb-0'>{quote}</p>
                        
            </blockquote>

            <button  className='btn btn-primary mt-5' onClick={increment}>
                    Cambiar
             </button>
    
        </>
    )
}
