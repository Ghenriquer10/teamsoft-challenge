import React from 'react'
import * as C from './style'
import logo1 from '../../assets/images/Deliverize-Logo-1.png';
import logo2 from '../../assets/images/Deliverize-Logo-2.png';
import {BiUserCircle} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <C.Container>
            <C.Logo>
                <Link to={'/'}>
                    <img className='image1' src={logo1} alt='logo desenho da empresa'/>
                    <img className='image2' src={logo2} alt='logo com o nome da empresa'/>
                </Link>
            </C.Logo>
            <C.StreetField>
                <select>
                    <option>
                        Entrega
                        R. Antoniio Braune, 222
                    </option>
                </select>
            </C.StreetField>
            <C.SearhField>
                <input className='search-item' type={'text'} placeholder="Busque por estabelecimento ou produtos"/>
            </C.SearhField>
            <C.Buttons>
                <button className='login'>
                    <BiUserCircle/><p>Entrar</p>
                </button>
                <button className='shoppcart'>
                    <BsCart3/><p>Carrinho</p>
                </button>
            </C.Buttons>
        </C.Container>
    )
}