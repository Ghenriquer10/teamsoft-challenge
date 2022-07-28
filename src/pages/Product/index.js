import React, {useContext, useEffect} from 'react'
import * as C from './style'
import ProductAbout from '../../components/ProductAbout'
import ProductIngredient from '../../components/ProductIngredient'
import apiData from '../../services/api'
import ProductProvider from '../../contexts/productData'

export default function Product () {

    const {setProduct} = useContext(ProductProvider)

    useEffect(() => {
        apiData.get()
            .then((response) => {
                setProduct(response.data)
            })
    }, [setProduct])

    return(
        <C.Container>
            <ProductAbout/>
            <ProductIngredient/>
        </C.Container>
    )
}