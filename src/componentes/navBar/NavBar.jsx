import "./navBar.scss"
import CartWidget from "./CartWidget/CartWidget"
import UsuarioNavBar from "./UsuarioNavBar/UsuarioNavBar"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

import {Link, NavLink} from "react-router-dom"
import { useState } from "react";



const NavBar = () => {
    const navigate = useNavigate()
    const [busqueda, setBusqueda] = useState("")
    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            navigate(`/busqueda/${busqueda}`)
            setBusqueda("")

        }
    }
    return (
    <header>
        <nav className="headerNav1">
            <Link to={"/"}>
                <img src="/assets/imagenes/Screenshot_10.png" className="headerLogo" alt="Summo Store Logo" />
            </Link>
            <div className="headerDivInput">
                <img src="/assets/imagenes/searchIcon.png" alt="icono búsqueda" />
                <input value={busqueda} onChange={e => setBusqueda(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Buscar" className="headerInput"/>
            </div>
            <UsuarioNavBar/>
            <CartWidget/>
        </nav>
        <nav className="headerNav2">
            <Navbar>
                <Nav>
                <div className="headerNav2Item"> </div>

                    <div className="headerNav2Item">
                    <NavDropdown title="Categorías" className="headerDropdown">
                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to={"/categorias/articulos-de-limpieza"}>
                            Articulos de Limpieza
                    </NavLink>
                        </NavDropdown.Item>

                        
                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/categorias/aderezos-y-condimentos">
                            Aderezos y condimentos
                            </NavLink>
                        </NavDropdown.Item>
                        
                        
                        
                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/categorias/higiene-personal">
                            Higiene personal
                            </NavLink>
                        </NavDropdown.Item>
                        

                        
                    </NavDropdown>
                    </div>

                    <div className="headerNav2Item">
                        Ofertas
                    </div>

                    <div className="headerNav2Item">
                    <NavDropdown title="Todas las Marcas" className="headerDropdown">
                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Knorr">
                            Knorr
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Axe">
                            Axe
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Cif">
                            Cif
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Dove">
                            Dove
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Hellmanns">
                            Hellmann's
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Lux">
                            Lux
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Rexona">
                            Rexona
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Sedal">
                            Sedal
                        </NavLink>
                        </NavDropdown.Item>

                        <NavDropdown.Item className="headerDropdownItem">
                        <NavLink to="/marcas/Skip">
                            Skip
                        </NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    </div>

                    <div className="headerNav2Item"></div>
                </Nav>
            </Navbar>

        </nav>
    </header>
    )
}

export default NavBar
