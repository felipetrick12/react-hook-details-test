import React from 'react'
import useCounter from '../../hooks/useCounter';
import { useFecth } from '../../hooks/useFecth'

export const MultipleCustomHooks = () => {
    
 
    const {counter,increment} =useCounter();
   const {loading,data}=useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
   
    return (
        <>
            <h1>Breaking Bad</h1>

            {
                loading
                ?
                <div className='alert alert-info text-center'>
                    <h1 className='text-white'>loading</h1>
                </div>
                :
                <blockquote className='blockquote text-center '>
                        <p className='mb-0'>{quote}</p>
                        <footer className='blockquote-footer mt-2'>{author}</footer>
                </blockquote>
                
                
            }
            <button  className='btn btn-primary mt-5' onClick={increment}>
                    Cambiar
             </button>
    
        </>
    )
}
