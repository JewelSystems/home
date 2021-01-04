import React from 'react';
import '../styles/Navbar.css'
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
                    {console.log('teste')}
                    <ul>
                    <li><a href="/"><strong>Home</strong></a></li>
                    <li><a href="/who"><strong>Quem Somos</strong></a></li>
                    <li><a href="/solutions"><strong>Soluções</strong></a></li>
                    <li><a href="/contact"><strong>Contato</strong></a></li>
                    </ul>
                </div>
                </nav>
            </header>
        </div>
    );
}