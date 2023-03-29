import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">El irlandés</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Whisky</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vinos y Espumantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gin y Vodka</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Otras bebidas</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar
