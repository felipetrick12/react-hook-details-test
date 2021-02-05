import  {shallow} from 'enzyme';
import TodoApp from '../../components/08-Reducer/TodoApp';
import { demoTodos } from "../fixtures/demoTodos";

describe('Prueba de Componente, TodoApp', () => {

    const wrapper = shallow(<TodoApp />)
    
    test('debe de renderizar el componente', () => {
        
       
        expect(wrapper).toMatchSnapshot();
    });
    
    test('no debe de enviar la funcion HandleSubmit',()=> {

            // const FormSubmit= wrapper.find('form').prop('onSubmit');

            // FormSubmit({preventDefault(){}});

            // expect(wrapper.find('form').at(0).prop('handleSubmit')).toEqual(FormSubmit);
    })
});
