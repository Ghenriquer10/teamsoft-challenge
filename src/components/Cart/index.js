import React from 'react'
import * as C from './style'

export default function Cart(){
    return(
        <C.Container>
            <div className='title'>
                <p>Adicionado com Sucesso</p>
            </div>
            <div className='product-data'>
                <p className='product-title'>Oferta picanha cheddar bacon</p>
                <p className='ingredient'>Ingredientes:</p>
                <ul>
                    <li><p>1 carne 250g</p></li>
                    <li><p>2 queijo cheddar</p></li>
                    <li><p>1 bacon</p></li>
                    <li><p>1 molho especial</p></li>
                </ul>
            </div>
        </C.Container>
    )
}