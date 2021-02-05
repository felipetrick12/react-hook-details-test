import {renderHook} from '@testing-library/react-hooks';
import { useFecth } from '../../hooks/useFecth';


describe('prueba de   useFetch', () => {

    test('deberia renderizar el componenente', () => {
        
        const {result}= renderHook(()=>useFecth('https://www.breakingbadapi.com/api/quotes/1'));
        const {data,loading,error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
      
    })
    
    // test('deberia mostrar nuestra api',async() => {
        
    //     const {result,waitForNextUpdate}= renderHook(()=>useFecth('https://www.breakingbadapi.com/api/quotes/1'));
    //     await waitForNextUpdate();
        
    //     const {data} = result.current;
        
    //     expect(data.length).toBe(1);
      
       
       
    // })

    // test('debe de manejar el error', ()=> {

    // })
    
    
});
