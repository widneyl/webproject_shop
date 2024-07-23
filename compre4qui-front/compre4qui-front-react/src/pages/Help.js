import React from 'react'
import engrenagem from '../imgs/engrenagem.png'
export default function Help() {
  return (
    <div className='container'>
      
      <div className='row mt-5 d-block'>
        <div className='col d-flex justify-content-center p-5'>
          <img src={engrenagem} alt='engrenagem' width={"300px"}></img>
        </div>
        <div className='col d-flex justify-content-center mt-2'>
          <h1>Oops... this page is under construction</h1>
        </div>
      </div>

    </div>
  )
}
