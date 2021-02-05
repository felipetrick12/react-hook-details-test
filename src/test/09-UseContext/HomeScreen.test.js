import React from 'react';
import {shallow} from 'enzyme';
import HomeScreen from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('prueba de componenente en HomeScreen', () => {

    const user = {
        id: 'felipe',
        email: 'duvan@gmail.com',
    }
    const wrapper = shallow(
    <UserContext.Provider value={{user}}> 
            <HomeScreen/>
    </UserContext.Provider >
    )
    

    test('debe de mostrarse el componenente', () => {
       expect(wrapper).toMatchSnapshot();
    })
    
    
})
