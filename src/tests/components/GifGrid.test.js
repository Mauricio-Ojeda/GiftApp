
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {
    
    const category = 'hola Prisma';

    test('crear snapshot de GifGrid', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category = { category } /> );

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe mostrar items cuando cargan las imagenes de useFetchGifs', () => {
        
        // sirve para falsear simular algo

        const gifs = [{
            id: 'abc',
            url: 'https://localhost.gato.jpg',
            title: 'cualquiera'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category = { category } /> );

        expect(wrapper.find('h2').exists()).toBe(true);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
    
    
})
