import React from 'react'
import * as C from './style'
import hamburguer from '../../assets/images/hamburguer.png'

export default function Product () {
    return(
        <C.Container>
            <C.ProductAbout>
                <div className='product-photo'>
                    <img src={hamburguer} alt='Imagem do hamburguer de picanha com bacon'/>
                </div>
                <div className='product-name'>
                    <p>Oferta Picanha Cheddar Bacon</p>
                </div>
                <div className='product-details'>
                    <p>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</p>
                </div>
                <div className='product-price'>
                    <p>R$31,99</p>
                    <p>R$34,95</p>
                </div>
            </C.ProductAbout>
            <C.ProductIngredient>
                <section className='ingredient-label'>
                    <p>Adicionar ingredientes</p>
                    <p>Até 8 ingredientes</p>
                </section>
                
                <section className='add-cutlery'>
                    <p>Precisa de Talher?</p>
                </section>
            </C.ProductIngredient>
        </C.Container>
    )
}