import React, { useContext } from 'react'
import { UserContext } from "./UserContext";

export default function LoginScreen() {

    const {value, setValue} = useContext(UserContext);
        console.log(value)
    
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={()=>setValue ({
                    id: new Date().getTime(),
                    nombre: 'felipe'
                })}
            >
                Extraer
            </button>
        </div>
    )
}
