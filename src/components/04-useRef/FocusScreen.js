import React, { useRef } from 'react'

export default function FocusScreen() {

    
        const RefInput =useRef();
        

    const handleRef =()=>{

        RefInput.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                className='form-control'
                ref={RefInput}
                placeholder='ingrese su nombre'

            />
        
            <button className='btn btn-primary mt-1'  onClick={handleRef}>
                Focus 
            </button>
            
        </>
    )
}
