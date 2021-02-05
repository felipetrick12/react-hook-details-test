import React from 'react'

export default function Lista({cantidad,array}) {

   
            return (
                <>
                <div>
                 <h1 className ='text-white'>Todo App  ({array.length}) </h1>
            <hr/>
            <ol>
                {
                    todos.map( todo=> (
                        <li
                        key={todo.id}
                        >{todo.desc}
                        </li>
                    ))
                }
            </ol>
        </div>
               
                </>
            )
            
 }
        
       
        
    
    
}

