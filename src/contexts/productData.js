import {useState, createContext, useEffect} from 'react'
import apiData from '../services/api';

export const ProductContext = createContext({});

function ProductProvider({children}){

    const [product, setProduct] = useState();
    const [ingredients, setIngredients] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        apiData.get()
            .then((response) => {
                setProduct(response.data[0])
                console.log(response.data[0])
                setIngredients(response.data[0].ingredients[0].itens)
                console.log(response.data[0].ingredients[0].itens)
                setLoading(false)

            })
    }, [setProduct])

    return(
        <ProductContext.Provider value={{product, setProduct, loading, setLoading, ingredients}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;