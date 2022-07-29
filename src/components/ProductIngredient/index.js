import React, { useContext, useState } from 'react'
import * as C from './style'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { ProductContext } from '../../contexts/productData'


export default function ProductIngredient(){

    const { product, loading, ingredients, setModal, setChosedProduct} = useContext(ProductContext)
    const [cheseCheddar, setCheseCheddar] = useState(0)
    const [crispy, setCrispy] = useState(0)
    const [sauceCheddar, setSauceCheddar] = useState(0)
    const [sauceSteak, setSauceSteak] = useState(0)
    const [cutlery, setCutlery] = useState(0)

    function handleProduct(){
        // Simulando a criação de um novo objeto ja com seus referentes ingredientes escolhidos pelo cliente
        const chosedproduct = {
            productId: product.id,
            productName: product.nm_product,
            cheseCheddar: cheseCheddar,
            crispy: crispy,
            sauceCheddar: sauceCheddar,
            sauceSteak: sauceSteak,
            cutlery: cutlery
        }
        
        localStorage.setItem('chosedproduct', JSON.stringify(chosedproduct))
        setChosedProduct(chosedproduct)
        setModal(prev => !prev)
        window.scrollTo(0, 0)
        
        // Tempo automático caso o usuário não feche o modal
        setTimeout(() => {
             setModal(prev => !prev)
        }, 3000)
    }

    function plusQtdCheddar(){
        if(cheseCheddar >= 8){
            return
        }
        setCheseCheddar(cheseCheddar + 1)
    }

    function minusQtdChedar(){
        if(cheseCheddar === 0){
            return
        }
        setCheseCheddar(cheseCheddar - 1)
    }

    function plusQtdCripsy(){
        if(crispy >= 8){
            return
        }
        setCrispy(crispy + 1)
    }

    function minusQtdCripsy(){
        if(crispy === 0){
            return
        }
        setCrispy(crispy - 1)
    }

    function plusQtdsauceCheddar(){
        if(sauceCheddar >= 8){
            return
        }
        setSauceCheddar(sauceCheddar + 1)
    }

    function minusQtdsauceCheddar(){
        if(sauceCheddar === 0){
            return
        }
        setSauceCheddar(sauceCheddar - 1)
    }

    function plusQtdSauceSteak(){
        if(sauceSteak >= 8){
            return
        }
        setSauceSteak(sauceSteak + 1)
    }

    function minusQtdSauceSteak(){
        if(sauceSteak === 0){
            return
        }
        setSauceSteak(sauceSteak - 1)
    }

    function plusCutlery(){
        if(cutlery >= 8){
            return
        }
        setCutlery(cutlery + 1)
    }

    function minusCutlery(){
        if(cutlery === 0){
            return
        }
        setCutlery(cutlery - 1)
    }



    return(
        <C.ProductIngredient>
            { loading ? (
                <h1>Carregando dados</h1>
            ) : (
                <>
                    <div className='ingredient-label'>
                        <p>Adicionar ingredientes</p>
                        <p>Até {product.ingredients[0].max_itens} ingredientes</p>
                    </div>
                    <C.AddIngredient>
                        <div className='ingredient-data'>
                            <div className='ingredient-name'>{ingredients[0].nm_item}</div>
                            <div className='ingredient-price'>
                                + R$: {cheseCheddar > 0 ? (ingredients[0].vl_item.toFixed(2) * cheseCheddar).toFixed(2) : ingredients[0].vl_item.toFixed(2)}
                            </div>
                        </div>
                        <div className='ingredient-qtd'>
                            <div className='ingredient-buttons'>
                                <button onClick={minusQtdChedar}>
                                    {cheseCheddar === 0 ? (
                                        <BiMinus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiMinus size={22} color/>)
                                    }
                                </button>
                                <input readOnly value={cheseCheddar}/>
                                <button onClick={plusQtdCheddar}>
                                    {cheseCheddar === 8 ? (
                                        <BiPlus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiPlus size={22} color/>)
                                    }
                                </button>
                            </div>
                        </div>
                    </C.AddIngredient>
                    <C.AddIngredient>
                        <div className='ingredient-data'>
                            <div className='ingredient-name'>{ingredients[1].nm_item}</div>
                            <div className='ingredient-price'>
                                + R$: {crispy > 0 ? (ingredients[1].vl_item.toFixed(2) * crispy).toFixed(2) : ingredients[1].vl_item.toFixed(2)}
                            </div>
                        </div>
                        <div className='ingredient-qtd'>
                            <div className='ingredient-buttons'>
                                <button onClick={minusQtdCripsy}>
                                    {crispy === 0 ? (
                                        <BiMinus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiMinus size={22} color/>)
                                    }
                                </button>
                                <input readOnly value={crispy}/>
                                <button onClick={plusQtdCripsy}>
                                    {crispy === 8 ? (
                                        <BiPlus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiPlus size={22} color/>)
                                    }
                                </button>
                            </div>
                        </div>
                    </C.AddIngredient>
                    <C.AddIngredient>
                        <div className='ingredient-data'>
                            <div className='ingredient-name'>{ingredients[2].nm_item}</div>
                            <div className='ingredient-price'>
                                + R$: {sauceCheddar > 0 ? (ingredients[2].vl_item.toFixed(2) * sauceCheddar).toFixed(2) : ingredients[2].vl_item.toFixed(2)}
                            </div>
                        </div>
                        <div className='ingredient-qtd'>
                            <div className='ingredient-buttons'>
                                <button onClick={minusQtdsauceCheddar}>
                                    {sauceCheddar === 0 ? (
                                        <BiMinus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiMinus size={22} color/>)
                                    }
                                </button>
                                <input readOnly value={sauceCheddar}/>
                                <button onClick={plusQtdsauceCheddar}>
                                    {sauceCheddar === 8 ? (
                                        <BiPlus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiPlus size={22} color/>)
                                    }
                                </button>
                            </div>
                        </div>
                    </C.AddIngredient>
                    <C.AddIngredient>
                        <div className='ingredient-data'>
                            <div className='ingredient-name'>{ingredients[3].nm_item}</div>
                            <div className='ingredient-price'>
                                + R$: {sauceSteak > 0 ? (ingredients[3].vl_item.toFixed(2) * sauceSteak).toFixed(2) : ingredients[3].vl_item.toFixed(2)}
                            </div>
                        </div>
                        <div className='ingredient-qtd'>
                            <div className='ingredient-buttons'>
                                <button onClick={minusQtdSauceSteak}>
                                    {sauceSteak === 0 ? (
                                        <BiMinus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiMinus size={22} color/>)
                                    }
                                </button>
                                <input readOnly value={sauceSteak}/>
                                <button onClick={plusQtdSauceSteak}>
                                    {sauceSteak === 8 ? (
                                        <BiPlus size={22} color={"#AEB6C1"}/>
                                        ): 
                                        (<BiPlus size={22} color/>)
                                    }
                                </button>
                            </div>
                        </div>
                    </C.AddIngredient>
                    <C.Cutlery>
                        <div className='add-cutlery'>
                            <p>Precisa de Talher?</p>
                        </div>
                        <div className='select'>
                            <div className='select-option'>
                                <label htmlFor="yes">Sim</label>
                                <input name='need-cutlery' id="yes" type={'radio'} value="Sim"/>
                            </div>
                            <div className='select-option'>
                                <label htmlFor="no">Não</label>
                                <input name='need-cutlery' id="no" type={'radio'}value="Não"/>
                            </div>
                        </div>
                    </C.Cutlery>
                    <C.SendIngredient>
                        <div className='qtd-cutlery'>
                            <button onClick={minusCutlery}>
                                {cutlery === 0 ? (
                                    <BiMinus size={22} color={"#AEB6C1"}/>
                                        ): 
                                    (<BiMinus size={22} color/>)
                                }
                            </button>
                                <input value={cutlery} readOnly/>
                            <button onClick={plusCutlery}>
                                {cutlery === 8 ? (
                                    <BiPlus size={22} color={"#AEB6C1"}/>
                                        ): 
                                    (<BiPlus size={22} color/>)
                                }
                            </button>
                        </div>
                        <div className='add-ingredient'>
                            <button onClick={handleProduct}>Adicionar</button>
                        </div>
                    </C.SendIngredient>
                </>
            )}
        </C.ProductIngredient>
    )
}