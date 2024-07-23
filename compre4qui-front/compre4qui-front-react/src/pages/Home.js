import React from 'react'
import { Link } from 'react-router-dom'
import shopImage from '../imgs/shopImage.png'

export default function Home() {
    return (
        <div className='pt-5'>
        <div className='container mt-5'>
            <div className='row my-5'>
                <div className='col'>
                    <h1>Venda seus produtos on-line com apenas um click</h1>
                     <h4 className='mt-3'>Cadastre-se <Link to={"/register"} className='text-decoration-none text-success'>aqui</Link> para iniciar</h4>
                </div>
                <div className='col'>
                    <img src={shopImage} width={'400px'} alt='img shop'></img>
                </div>
            </div>
        </div>
    </div>
    )
}
