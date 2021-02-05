import React from 'react'

export default function borras( {todo,i,handleDelete}) {
    return (
        <>
            <li className="list-group-item">
                <p className="text-center pt-3"> {i+1}. {todo.desc} </p>

                <button onClick={()=> handleDelete (todo.id)} className="btn btn-danger">Borrar</button>
              </li>
        </>
    )
}
