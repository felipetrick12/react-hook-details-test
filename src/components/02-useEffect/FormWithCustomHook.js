import React from 'react'
import { useForm } from '../../hooks/useForm';
// import Message from './Message';

export default function FormWithCustomHook() {

    const [Form, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });
    
    const {name,email,password}= Form;

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(Form);
    }

    return (
        <form onSubmit={handleSubmit}>
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

                <input
                    type='password'
                    className='form-control mt-2'
                    name='password'
                    placeholder='******'
                    value={password}
                    onChange={handleInputChange}
                > 
                </input>

                <button type='submit' className='btn btn-primary mt-2'>
                    Enviar
                </button>
            </div>
        </form>
    )
}
