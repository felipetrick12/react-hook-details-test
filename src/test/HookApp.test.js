import {shallow} from 'enzyme'
import HookApp from '../HookApp'
    
    describe('Prueba de Componente HookApp', () => {
        test('Deberia renderizar el componente ', () => {

            const div = shallow(<HookApp/>)

            expect(div).toMatchSnapshot();
        })
        
})
