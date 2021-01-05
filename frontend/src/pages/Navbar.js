import React from 'react';
import '../styles/Navbar.css'

import { Link } from 'react-router-dom'
//import '../js/navbar_script'
//import logo from '../images/temp_logo.svg';

export default function Navbar(){
    return(
        <div className='nav-bar-container'>
            <header>
                <nav id='nav'>

                {/*
                <div className="menu-icon">
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                */}

                <div className="logo">
                    LOGO
                </div>
                <div className="menu">
                    <ul>
                    <li><Link to="/"><strong>Home</strong></Link></li>
                    <li><Link to="/who"><strong>Quem Somos</strong></Link></li>
                    <li><Link to="/solutions"><strong>Soluções</strong></Link></li>
                    <li><Link to="/contact"><strong>Contato</strong></Link></li>
                    </ul>
                </div>
                </nav>
            </header>
        </div>
    );
}