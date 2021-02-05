import { todoReducer } from "../../components/08-Reducer/todoReducer"
import { demoTodos } from "../fixtures/demoTodos"

    describe('Prueba de todoReducer', () => {
        
        test('debe de retornar el estado por defecto', () => {
            
            const state= todoReducer(demoTodos,{});

            expect(state).toEqual(demoTodos);
        })

        test('debe agregar un nuevo Todo', () => {

            const newTodo ={
                id:3,
                desc:'aprender ux-ui',
                done: false

            }
            const action = {
                type:'add',
                payload:newTodo
            }

            const state= todoReducer(demoTodos,action);

            expect(state).toEqual([...demoTodos,action.payload]);

        });

        test('debe de eliminar un todo', () => {
             
            const action = {
                type:'delete',
                payload:1
            }

            const state= todoReducer(demoTodos,action);

            expect(state).toEqual([demoTodos[1]]);

            console.log(state)
        })
        
        
    })
    