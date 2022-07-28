import React from 'react'
import * as C from './style'

import {BiPlus, BiMinus} from 'react-icons/bi'

export default function AddIngredient({...rest}){
    return(
        <C.Container>
            <div className='ingredient-data'>
                <div className='ingredient-name'>{rest.name}</div>
                <div className='ingredient-price'>{rest.price}</div>
            </div>
            <div className='ingredient-qtd'>
                <div className='ingredient-buttons'>
                    <button>
                        <BiMinus size={22}/>
                    </button>
                    <input defaultValue={0} readOnly/>
                    <button>
                        <BiPlus size={22}/>
                    </button>
                </div>
            </div>
        </C.Container>
    )
}