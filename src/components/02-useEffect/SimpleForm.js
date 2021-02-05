import React, { useEffect, useState } from 'react'
import Message from './Message';

export default function SimpleForm() {
    const [state, setState] = useState({
        name:'',
        email:''
    });
    
    const {name,email}= state;

    useEffect(() => {
        console.log('hey')
    },[]); //se utiliza este arreglo de dependencias para que solo se cargue una vez el useeffect

    // useEffect(() => {
    //     console.log('hey')
    // },[email]);  //si quiero hacer un efecto cuando se ejecute unicamente email
    
    const handleInputChange = ({target}) =>{
        setState( {
            ...state,
            [target.name]: target.value
        })
    }
    return (
        <div>
            <h1>Use Effect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    name='name'
                    placeholder='Ingrese Nombre'
                    value={name}
                    autoComplete='off'
                    onChange={handleInputChange}
                > 
                </input>
                {name===('Duvan')&& <Message/>}
                <input
                    type='text'
                    className='form-control mt-2'
                    name='email'
                    placeholder='Ingrese Email'
                    value={email}
                    autoComplete='off'
                    onChange={handleInputChange}
                > 
                </input>

            </div>
        </div>
    )
}
