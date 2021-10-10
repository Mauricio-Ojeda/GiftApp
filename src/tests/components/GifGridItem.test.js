import React from 'react';
import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'


describe('pruebas en GifGridItem', () => {
    
    const title = 'Soy un titulo';
    const url = 'https://soyunaurl.localhost.jpg';
    const wrapper = shallow( <GifGridItem
                                    title= { title }
                                    url = { url }
                             /> );
    
    test('debe mostrar el componente en un snapshot', () => {
        

        expect( wrapper ).toMatchSnapshot();

        
    });

    test('debe tener un parrafo con el title', () => {
        
        const testTitle = wrapper.find('p');
        expect( testTitle.text().trim() ).toBe( title );

    });
    
    test('debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
        
        
    })
    

})
