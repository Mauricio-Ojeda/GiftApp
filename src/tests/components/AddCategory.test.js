import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    
    const wrapper = shallow( <AddCategory setCategories = { setCategories } />);

    test('debe de mostrar un snapshot del codigo html de Addcategory', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'hola Prisma'
        input.simulate('change', { target: { value } });

    })

    test('no debe postear la informacion si el input esta vacio', () => {
        
        wrapper.find('form').simulate('submit', { pereventDefault(){  }});

        expect( setCategories ).not.toHaveBeenColled();

    })
    
    
    

})
