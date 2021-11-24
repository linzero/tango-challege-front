import { mount } from "enzyme"
import { Provider } from "react-redux"
import { getNumber_GET } from "../api/FiboApi"
import FiboApp from "../FiboApp"
import { store } from "../store/store"

export default describe('Fibonacci Test', (initialState={}) => {
    test( 'First Display <FiboApp></FiboApp>',() =>{

        const wrapper = mount( <Provider store={ store }><FiboApp /></Provider> )

        expect( wrapper ).toMatchSnapshot();
    })

    test( 'API Test', async() =>{

        try {
            const values = [0,1,1,2,3,5,8]

            for (let i = 0; i<values.length; i++ ) {
                const result = await getNumber_GET(i)

                expect(result.data.response).toBe(values[i])
            }

        }
        catch(e:any){
            throw new Error(e)
        }

    })
})