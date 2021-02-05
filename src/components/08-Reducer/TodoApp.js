import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "../08-Reducer/todoApp.css";
import { useForm } from "../../hooks/useForm";
import List from "./List";

const init = ()=>{ //init es la variable que va devolver por defecto en el intialstate y va enviar una array
        return JSON.parse(localStorage.getItem('todos'))|| [];
    //retorne un json convertido a json delo que venga en la variable 'todos', si no encuentra nada retorne un json vacio
   
   //este era el valor que enviabamos, el de arriba es el nuevo
    // // return {
    // //     id: new Date().getTime(),
    // //     desc: description, //la nueva descripcion q se va enviar.
    // //     done: false,
    // // }
};

export default function TodoApp() {
  const [todos,dispatch] = useReducer(todoReducer, [],init); 
  //se crea un reducer el cual remplaza a un useState,el cual se le envia un estado inicial q por defecto el lo que envia el init
  //y la accion es la funcion
    const i= 0;
    const [{description},handleInputChange,reseTxt]=useForm({description:''});

    //se extrae descripcion que es la que se le esta enviando a nuestro hook 'useForm',
    //el nos retorna, el valor , la funcion, y el reseteo del texto

    useEffect(() => { //el use effect se ejecuta 1 vez por defecto,
        localStorage.setItem('todos',JSON.stringify(todos));
        //para almacenar datos en nuestro localStorage, tenemos que enviar nuestro state, traducido a array
    }, [todos]) //es para que nuestro useEffect  haga el efecto cuando se aplique la accion en nuestro state

    const handleDelete =(todoId)=>{
           
        const action = {
            type: 'delete', //nombre de la accion
            payload: todoId //el nuevotodo que se va enviar
        }

        dispatch(action); 

    }
    const handleSubmit =(e)=> { //es para tomar nuestro evento cuando se envie algo del button
        e.preventDefault(); //previene que nuestro navegador se recargue
       
        const newTodo = {
            id: new Date().getTime(),
            desc: description, //la nueva descripcion q se va enviar.
            done: false,
        }
        
        const action = {
            type: 'add', //nombre de la accion
            payload: newTodo //el nuevotodo que se va enviar
        }

        dispatch(action); //aca enviamos nuestra accion al useReduce
        reseTxt(); //con esto reseteamo la informacion de nuestro input
    }

  return (
    <div>
      <h1 className="text-white">Todo App ({todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <List todos={todos} i={i} handleDelete={handleDelete}/>
        </div>

        <div className='col-5'>
                <h4>Agregar Todo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>  
                    <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender..'
                    autoComplete='off'
                    value={description}
                    onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                        className='btn  btn-outline-primary mt-1  mx-auto  btn-block'
                        
                    >
                        Agregar
                    </button>

                </form>
        </div>
      </div>
    </div>
  );
}
