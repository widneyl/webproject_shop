import React, { useState} from 'react'
import axios from 'axios';

export default function Register() {

    const [productName, setname] = useState("");
    const [productcategory, setProductCategory] = useState("");
    const [productValue, setProductValue] = useState(false)
    // const [showProducts, setShowProducts] = useState([])



    //Function to verification and send for api
    async function verification(e) {
        e.preventDefault();

        if (productName.length === 0) {
            console.log("Enter for name")
            console.log(`O productValue esta como ${productValue}`)
        }
        else {
            console.log("Entrou na function")
            console.log(`A categoria do produto é: ${productcategory}`)


            const dados = {
                name: productName
            };

            //Request POST
            await axios.post("http://localhost:8080/api/register", dados)
                .then((response) => {
                    console.log(response.data)
                }).catch((err) => {
                    console.log("Ocorreu um erro na requisição")
                })

            setProductValue(true);
        }
    }

    //Retorno

    // function compriment() {
    //     if (productValue) {
    //         return <div>
    //             <div>
    //                 <h5>Você cadastrou um novo produto! Toque <button onClick={show} className='btn btn-success text-decoration-none'>aqui</button> para ver seus produtos</h5>
    //             </div>
    //         </div>
    //     }
    // }

    // async function show() {

    //     const req = await axios.get("http://localhost:8080/api/select")
    //         .then((response) => response.data)
    //         .catch((err) => console.log("Ocorreu um erro na requisição"));

    //     setShowProducts(req);

    //     return <div>
    //         <ul>
    //             {showProducts.map(obj => (<li>{obj.name}</li>))}
    //         </ul>
    //     </div>
    // }


    return (

        <div className='container'>
            <div className='row mt-5'>
                <form onSubmit={verification}>
                    <div className="mb-3">
                        {/* <label className="form-label">Product Name</label> */}
                        <input type="text" placeholder='Product name' className="form-control" id="InputEmail1" aria-describedby="emailHelp" value={productName} onChange={(e) => setname(e.target.value)} />

                        {/* <label className="form-label">What your the category product?</label> */}
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
