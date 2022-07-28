import React, { useContext, useState } from 'react'
import * as C from './style'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { ProductContext } from '../../contexts/productData'


export default function ProductIngredient(){

    const { product, loading, ingredients} = useContext(ProductContext)
    const [cheseCheddar, setCheseCheddar] = useState(0)
    const [crispy, setCrispy] = useState(0)
    const [sauceCheddar, setSauceCheddar] = useState(0)
    const [sauceSteak, setSauceSteak] = useState(0)
    const [cutlery, setCutlery] = useState(0)

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
        if(crispy === 0){
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
                                    <BiMinus size={22}/>
                                </button>
                                <input readOnly value={cheseCheddar}/>
                                <button onClick={plusQtdCheddar}>
                                    <BiPlus size={22}/>
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
                                    <BiMinus size={22}/>
                                </button>
                                <input readOnly value={crispy}/>
                                <button onClick={plusQtdCripsy}>
                                    <BiPlus size={22}/>
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
                                    <BiMinus size={22}/>
                                </button>
                                <input readOnly value={sauceCheddar}/>
                                <button onClick={plusQtdsauceCheddar}>
                                    <BiPlus size={22}/>
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
                                    <BiMinus size={22}/>
                                </button>
                                <input readOnly value={sauceSteak}/>
                                <button onClick={plusQtdSauceSteak}>
                                    <BiPlus size={22}/>
                                </button>
                            </div>
                        </div>
                    </C.AddIngredient>

                    <div className='add-cutlery'>
                        <p>Precisa de Talher?</p>
                    </div>
                    <C.SendIngredient>
                        <div className='qtd-cutlery'>
                            <button onClick={minusCutlery}>
                                    <BiMinus size={22}/>
                            </button>
                                <input value={cutlery} readOnly/>
                            <button onClick={plusCutlery}>
                                    <BiPlus size={22}/>
                            </button>
                        </div>
                        <div className='add-ingredient'>
                            <button>Adicionar</button>
                        </div>
                    </C.SendIngredient>
                </>
            )}
        </C.ProductIngredient>
    )
}