import {renderHook,act} from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'


    describe('Debe probar el componenete usForm', () => {
        const initialState = {
            name: 'fernando',
            email: 'felipe@gmail.com'
        }
        test('debe de regresar un formulario  por defecto ', () => {

            const {result}= renderHook(()=>useForm(initialState));
            const [Form,handleInputChange,reseTxt] = result.current;

            expect(Form).toEqual(initialState);
            expect(typeof handleInputChange).toBe('function');
            expect(typeof reseTxt).toBe('function');
           
        })

        test('debe de cambiar el valor del formulario ', () => {

            const {result}= renderHook(()=>useForm(initialState));
            const [,handleInputChange] = result.current;

            act(() => {

                handleInputChange({
                    target:{
                        name:'name',
                        value:'melissa'
                    }
                });
            });

            const [Form] = result.current;
            console.log(Form)
            expect(Form).toEqual({...initialState,name:'melissa'});
            
        });

        test('debe de restablecer el Formulario en Reset', () => {

            const {result}= renderHook(()=>useForm(initialState));
            const [,handleInputChange,reseTxt] = result.current;

            act(() => {

                handleInputChange({
                    target:{
                        name:'name',
                        value:'melissa'
                    }
                });
                reseTxt();
            });
          

            const [Form] = result.current;
            console.log(Form)
            expect(Form).toEqual(initialState);

            
            
        })
        
        
    
})
