
const initialState = [{ //un simple arreglo
        id: 1,
        todo: 'comprar pan',
        done: false
}]


const todoReducer =(state = initialState , action) =>{ //una funcion de reduce , por defecto tiene que tener dos argumentos, la del state y la action

    if(action?.type === 'agregar'){
        return [...state,action.payload]
    }
    return state; //por defecto siempre tiene que devolver el estado.
}

let todos = todoReducer( );

    const sendTodo = {
        type: 'agregar',
        payload: newTodo
    }

    const newTodo =({
        id: 2,
        todo: 'comprar leche',
        done: false
    })

    todos = todoReducer (todos,sendTodo)


console.log(todos)