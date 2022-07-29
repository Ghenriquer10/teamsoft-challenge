import React, {useContext} from 'react'
import { ProductContext } from '../../contexts/productData'
import * as C from './style'


export default function Cart(){
    
    //Modal suspenso da aplicação

    const {chosedProduct} = useContext(ProductContext)

    return(
        <C.Container>
            <div className='title'>
                <p>Adicionado com Sucesso</p>
            </div>
            <div className='products'>
                <div className='product-data'>
                    <p className='product-title'>{chosedProduct.productName}</p>
                    <p className='ingredient'>Ingredientes:</p>
                    <ul>
                        <li><p>1 carne 250g</p></li>
                        <li><p>2 queijo cheddar</p></li>
                        <li><p>1 bacon</p></li>
                        <li><p>1 molho especial</p></li>
                    </ul>
                </div>
            </div>
            
            {/* <div className='added-ingredients'>

            Seria possível adicionar também os ingredientes adicionados pelo cliente através do context, porém optei por seguir o layout predefinido
                
                <ul>
                    <li>
                        {chosedProduct.cheseCheddar > 0 ? (
                                <p>{chosedProduct.cheseCheddar} Queijo cheddar</p>
                            ): null}
                        </li>
                        <li>
                            {chosedProduct.crispy > 0 ? (
                                <p>{chosedProduct.crispy} Cebola crispy</p>
                            ): null}
                        </li>
                        <li>
                            {chosedProduct.sauceCheddar > 0 ? (
                                <p>{chosedProduct.sauceCheddar} Molho cheddar</p>
                            ): null}
                        </li>
                        <li>
                            {chosedProduct.sauceSteak > 0 ? (
                                <p>{chosedProduct.sauceSteak} Molho de picanha</p>
                            ): null}
                    </li>
                </ul>
            </div> */}
        </C.Container>
    )
}