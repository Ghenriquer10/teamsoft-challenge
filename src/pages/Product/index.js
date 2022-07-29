import React, {useContext} from 'react'
import * as C from './style'
import ProductAbout from '../../components/ProductAbout'
import ProductIngredient from '../../components/ProductIngredient'
import Cart from '../../components/Cart'
import { ProductContext } from '../../contexts/productData'
import {useTransition, animated} from 'react-spring'

export default function Product () {

    // Contexto global para o acionamento do modal

    const {modal} = useContext(ProductContext)

    // Animação para o modal de pedido adicionado

    const animation = useTransition(modal, {
        from: {x: 100, y:100, position: 'absolute'},
        enter: {x: 0, y:100, opacity: 5, position: 'absolute'} 
    });

    return(
        <C.Container>
            {animation((style, item) => 
            item ?  
            <animated.div style={style} className="animated">
                {modal ? (<Cart/>): null}
            </animated.div> : ''
            )}
            <ProductAbout/>
            <ProductIngredient/>
        </C.Container>
    )
}