import React, { useContext} from 'react'
import * as C from './style'
import hamburguer from '../../assets/images/hamburguer.png'
import { ProductContext } from '../../contexts/productData'


export default function ProductAbout(){

    const { product, loading} = useContext(ProductContext)
    
    return(
        <C.ProductAbout>
            {loading ? (
                <h1>Carregando</h1>
                ) : (
                    // Usei uma imagem estática do hamburguer pois a mesma estava inacessivel na API
                    <>
                <div className='product-photo'>
                    <img src={hamburguer} alt='Imagem do hamburguer de picanha com bacon'/>
                </div>
                <div className='product-name'>
                    <p>{product.nm_product}</p>
                </div>
                <div className='product-details'>
                    <p>{product.description}</p>
                </div>
                <div className='product-price'>
                    <p>R${product.vl_discount.toFixed(2)}</p>
                    <p>R${product.vl_price.toFixed(2)}</p>
                </div>
            </>
            
            )}

        </C.ProductAbout>
    )
}