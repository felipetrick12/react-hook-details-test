import {shallow} from 'enzyme';
import RealExpampleRef from '../../components/04-useRef/RealExpampleRef';


    describe('Prueba de Componenete ', () => {
        
        test('Deberia renderizar nuestro componente', () => {

            const wrapper = shallow(<RealExpampleRef/>)
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('RealExpampleRef').exists()).toBe(false);  
        })
        
        test('debe de mostrar el componente por un cick', () => {

            const wrapper = shallow(<RealExpampleRef/>)
            wrapper.find('button').simulate('click');
            expect(wrapper.find('RealExpampleRef').exists()).toBe(false);            
        })
        
    })
    