import  {shallow} from 'enzyme';
import ButtonDelete from '../../components/08-Reducer/ButtonDelete';
import { demoTodos } from "../fixtures/demoTodos";



describe('Prueba de componente ButtonDelete', () => {
    
    const handleDelete= jest.fn();
    const wrapper = shallow(<ButtonDelete todo={demoTodos[0]} i={0} handleDelete={handleDelete}/>);
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de llamar la funcion delete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);
        
    })
    
})
