import {renderHook,act} from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';
   
    describe('Probando Hook Counter', () => {
        test('deberia retornar valores por defecto ', () => {
            
            const {result} = renderHook(()=> useCounter());
            // console.log(result.current) //trae los elementos o funciones de nuestro hook
            
            expect(result.current.counter).toBe(1);
            expect(typeof result.current.increment).toBe('function');
            expect(typeof result.current.decrement).toBe('function');
            expect(typeof result.current.reset).toBe('function');
        })

        test('deberia retornar valor en 100 ', () => {
            
            const {result} = renderHook(()=> useCounter(100));
            expect(result.current.counter).toBe(100);
        
        })
        test('debe incrementar el valor en 1', () => {
            
            const {result} = renderHook(()=> useCounter(100));
            const {increment}= result.current;

            act( () => {
                increment();
            })
            const {counter} = result.current;
            expect(counter).toBe(101);
        })

        test('debe decrementar el valor en 1', () => {
            
            const {result} = renderHook(()=> useCounter(100));
            const {decrement}= result.current;

            act( () => {
                decrement();
            })
            const {counter} = result.current;
            expect(counter).toBe(99);
        })

        test('debe volver su valor al inicial', () => {
            
            const {result} = renderHook(()=> useCounter(100));
            const {reset}= result.current;

            act( () => {
                reset();
            })
            const {counter} = result.current;
            expect(counter).toBe(100);
        })
        
        
    })
