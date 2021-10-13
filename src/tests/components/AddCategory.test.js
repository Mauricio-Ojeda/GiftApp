import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    
    let wrapper = shallow( <AddCategory setCategories = { setCategories } />);

    beforeEach( ()=>{ 

        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories = { setCategories } />);

     } )

    test('debe de mostrar un snapshot del codigo html de Addcategory', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'hola Prisma'
        input.simulate('change', { target: { value } });

    })

    test('no debe postear la informacion si el input esta vacio', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){  } });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar setCategories y limpiar la caja de texto', () => {
        
        const value = 'hola Prisma'
        const input = wrapper.find('input');
        
        input.simulate('change', { target: { value } });
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        
        expect(input.prop('value')).toBe('');        
    })
    
    
    
    

})
