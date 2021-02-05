   import {shallow} from 'enzyme'
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

   describe(' prueba de MultipleCustomHooks', () => {

    test('debe renderizar el componente', () => {

        const div = shallow(<MultipleCustomHooks/>)

        expect(div).toMatchSnapshot();

    })
   })
   