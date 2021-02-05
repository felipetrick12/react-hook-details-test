import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function HomeScreen() {

    const {value} = useContext(UserContext);
  
    return (
        <div>
            
            <h1>HomeScreen</h1>
            <hr/>

            <pre>
                { JSON.stringify(value,null,3)}
            </pre>
        </div>
    )
}
