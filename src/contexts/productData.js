import {useState, createContext} from 'react'

export const ProductContext = createContext({});

function ProductProvider({children}){

    const [product, setProduct] = useState({});

    return(
        <ProductContext.Provider value={{product, setProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;