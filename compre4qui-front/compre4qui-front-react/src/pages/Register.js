import React, { useState } from 'react'
import axios from 'axios';

export default function Register() {

    const [name, setname] = useState("");
    // const [password, setPassword] = useState("");

    function registerApi() {
        fetch("http://localhost:8080/api/select")
        .then(response => response.json())
        .then(list =>{
            console.log("ERRO")
        })
    }

    // function eventRegister(e) {
    //     e.preventDefault()
    //     if (name !== "") {
    //         registerApi();
    //     }
    //     else {
    //         console.log("Digite seu nome");
    //     }
    // }
        return (
            <div className='container'>
                <div className='row mt-5'>

                    <form onSubmit={registerApi}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setname(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
