import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white pt-4">
                <div className="container">
                    
                    {/* Logo */}
                    <Link to="/" className="navbar-brand text-success">
                        <h3><strong>Compre4qui.com</strong></h3>
                    </Link>
                    
                    
                    {/* Sanduiche */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* sanduiche on */}
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="nav">
                            <li class="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/help"} className="nav-link">Ajuda</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/register" className="nav-link">Cadastre-se</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
