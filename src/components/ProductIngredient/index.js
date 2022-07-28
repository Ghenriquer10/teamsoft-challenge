import React from 'react'
import * as C from './style'
import AddIngredient from '../../components/AddIngredient'
import {BiMinus, BiPlus} from 'react-icons/bi'


export default function ProductIngredient(){
    return(
        <C.ProductIngredient>
                <section className='ingredient-label'>
                    <p>Adicionar ingredientes</p>
                    <p>Até 8 ingredientes</p>
                </section>
                <AddIngredient
                    name={'Queijo cheddar'}
                    price={'4,99'}
                    />
                <AddIngredient
                    name={'Cebola crispy'}
                    price={'1,50'}
                />
                <AddIngredient
                    name={'Molho cheddar'}
                    price={'3,50'}
                />
                <AddIngredient
                    name={'Molho de picanha'}
                    price={'3,50'}
                />
                <section className='add-cutlery'>
                    <p>Precisa de Talher?</p>
                </section>
                <C.SendIngredient>
                    <div className='qtd-cutlery'>
                        <button>
                                <BiMinus size={22}/>
                            </button>
                            <input defaultValue={0} readOnly/>
                            <button>
                                <BiPlus size={22}/>
                        </button>
                    </div>
                    <div className='add-ingredient'>
                        <button>Adicionar</button>
                    </div>
                </C.SendIngredient>
        </C.ProductIngredient>
    )
}