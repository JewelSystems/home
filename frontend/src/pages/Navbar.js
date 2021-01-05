import React from 'react';
import '../styles/Navbar.css'

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { Link } from 'react-router-dom'
//import '../js/navbar_script'
//import logo from '../images/temp_logo.svg';

export default function Navbar(){
    const { t } = useTranslation();

    function handleClick(lang) {
        console.log('foi');
        i18next.changeLanguage(lang);
    }
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
                    <li><Link to="/who"><strong>{t('Who.1')}</strong></Link></li>
                    <li><Link to="/solutions"><strong>{t('Solutions.1')}</strong></Link></li>
                    <li><Link to="/contact"><strong>{t('Contact.1')}</strong></Link></li>
                    <li> <button onClick={()=>handleClick('en')} >
                        English
                    </button></li>
                    <li> <button onClick={()=>handleClick('pt')} >
                        Português
                    </button></li>
                    </ul>
                </div>
                </nav>
            </header>
        </div>
    );
}