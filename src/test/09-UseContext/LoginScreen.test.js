import React from 'react';
import {mount} from 'enzyme';
import LoginScreen from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('prueba de componenente en HomeScreen', () => {

   
    const setUser =jest.fn();

    const wrapper = mount(
    <UserContext.Provider value={{setUser}}> 
            <LoginScreen/>
    </UserContext.Provider >
    )
    

    test('debe de mostrarse el componenente', () => {
       expect(wrapper).toMatchSnapshot();
    })

    // test('debe de ejectuar el set user con el argumento esperado', () => {
        
    //     wrapper.find('button').simulate('click')();
    //     expect(setUser).toHaveBeenCalledWith({
    //         id: new Date().getTime(),
    //         nombre:'felipe'
    //     });
    // })
    
    
    
})