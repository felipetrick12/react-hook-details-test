import React from 'react'
import ButtonDelete from './ButtonDelete'

export default function List({todos , handleDelete,}) {
    return (
            <ol className="list-group  list-group-flush">

           {
                todos.map((todo,i) => (
                  <ButtonDelete 
                  todo={todo} 
                  key={todo.id} 
                  i={i} 
                  handleDelete={handleDelete}
                  />
                    ))
            }
          </ol>
     
    )
}
