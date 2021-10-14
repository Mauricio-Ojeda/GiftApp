import { shallow } from "enzyme";
import GiftExpertApp from "../GiftExpertApp";

describe('pruebas en <GiftExpertApp />', () => {

    
    test('Crear snapshot para detectar cambios en el codigo', () => {
        
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe de mostrar una lista de categorias', () => {
        const categories = [ 'Messi', 'Programador' ];
        const wrapper = shallow(<GiftExpertApp defaultCategories= { categories } />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length);
        

    })
    

})
