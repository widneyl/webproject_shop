import React from 'react'
import { Link } from 'react-router-dom'

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
                    <img src='https://cdn.pixabay.com/photo/2018/08/25/09/27/shop-3629607_960_720.png' width={'400px'} alt='img shop'></img>
                </div>
            </div>
        </div>
    </div>
    )
}
