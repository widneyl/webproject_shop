//Pagina de registro de produto, aqui sera feito o cadastro do produto no banco de dados.
//Requisição POST com axios
//Formulario de cadastro do produto

import React, { useState } from 'react'
import axios from 'axios';

export default function Register() {

    const [productName, setname] = useState(""); //State para manipular o nome do produto
    const [productcategory, setProductCategory] = useState(""); //State para manipular a categoria do produto
    const [productValue, setProductValue] = useState(false); //State para manipular o valor de um produto (se é um produto valido ou não)
    // const [showProducts, setShowProducts] = useState([])

    function status() {
        return console.log(`STATUS DO PRODUTO: ${productValue}`);
    }

    //Function to verification and send for api
    async function verification(e) {
        e.preventDefault();
        console.log("Entrou na function de verificação")

        if (productName.length === 0 && productcategory.length === 0) { //Verifica se o nome do produto e a categoria esta vazia
            console.log("NÂO APROVADO: Produto precisa de um nome\nNÂO APROVADO: Produto precisa de uma categoria");
            status();
        }
        else {
            //Se a categoria e o nome estiverem preenchidos:
            console.log(`APROVADO: Produto possui um nome\nAPROVADO: A categoria do produto é: ${productcategory}`);

            //Adiciona os dados obtidos do body a um JSON 'dados'
            const dados = {
                name: productName
            };
            //Request POST enviando os dados para a api

            await axios.post("http://localhost:8080/api/register", dados)
                .then((response) => {
                    console.log(response.data)
                    setProductValue(true); //Aprovando o produto como produto valido e cadastrado no banco de dados
                    status();
                }).catch((err) => {
                    console.log("ATENÇÂO: Ocorreu um erro na requisição POST");
                    status();
                })
        }
    }

    function compriment() {

        if (productValue) {
            return <div><h4>Parabéns! Você acaba de cadastrar um novo produto.</h4></div>
        }
    }
    return (

        <div className='container'>
            <div className='row mt-5'>
                <form onSubmit={verification}>
                    <div className="mb-3">

                        <input type="text" placeholder='Product name' className="form-control" id="InputEmail1" aria-describedby="emailHelp" value={productName} onChange={(e) => setname(e.target.value)} />
                        <select className="form-select mt-3" aria-label="Default select example" value={productcategory} onChange={(e) => setProductCategory(e.target.value)}>
                            <option value="">What is your product category?</option>
                            <option value="1">Technology</option>
                            <option value="2">Clothes</option>
                            <option value="3">Accessories</option>
                        </select>


                        <button type="submit" className="btn btn-success mt-3" >Submit</button>
                    </div>
                </form>
            </div>
            {compriment()}
        </div>

    )
}
