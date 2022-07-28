import React from 'react'

import * as C from './style'
import ProductAbout from '../../components/ProductAbout'
import ProductIngredient from '../../components/ProductIngredient'
import Cart from '../../components/Cart'

export default function Product () {

    return(
        <C.Container>
            <Cart/>
            <ProductAbout/>
            <ProductIngredient/>
        </C.Container>
    )
}