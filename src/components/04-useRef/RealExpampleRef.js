import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

export default function RealExpampleRef() {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>
                Real Example Ref
            </h1>
            <hr/>
        {
            show && <MultipleCustomHooks/>
        }

        <button className='btn btn-primary mt-5' onClick={()=>{
                setShow(!show);
            }}>
                Llamar 
        </button>
        </>
    )
}
