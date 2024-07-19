    import React, { useState } from 'react'
    import axios from 'axios';

    export default function Register() {

        const [productName, setname] = useState("");
        // const [password, setPassword] = useState("");

        async function verification(e) {
            e.preventDefault();
            
            if (productName.length === 0) {
                console.log("Enter for name")
            }
            else {

                console.log("Entrou na function")

                const dados = {
                    name: productName
                };

                axios
                    .post("http://localhost:8080/api/register", dados)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((err) => {
                        console.log("Ocorreu um erro na requisição")
                    })
            }
        }

    return (

        <div className='container'>
            <div className='row mt-5'>

                <form onSubmit={verification}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={productName} onChange={(e) => setname(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </div>
    )
}
