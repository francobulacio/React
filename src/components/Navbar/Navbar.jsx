import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>El irlandés</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/1`}>Whisky</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to= {`/categoria/2`}>Vinos y Espumantes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/3`}>Gin y Vodka</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/4`}>Otras bebidas</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <NavLink to={'/cart'}>

                <CartWidget/>
            </NavLink>
        </nav>
    )
}

export default Navbar
