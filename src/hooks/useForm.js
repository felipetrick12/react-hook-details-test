import  { useState } from 'react'

export const useForm = (initialState ={}) => {

    const [Form, setForm] = useState(initialState);

    const reseTxt =()=>{
        setForm (initialState);
    }
    const handleInputChange = ({target}) =>{
        setForm( {
            ...Form,
            [target.name]: target.value
        })
    }

    return [Form,handleInputChange,reseTxt];
    
}
