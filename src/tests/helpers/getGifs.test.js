

import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs Fetch', () => {
       
    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('ronaldo');

        expect( gifs.length ).toBe( 10 );

    })
    
    test('debe ser el largo igual a 0', async () => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    

})
