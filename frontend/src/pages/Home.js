import React from 'react';
import '../styles/Home.css'

import { useTranslation } from 'react-i18next';

import Navbar from './Navbar'
import Footer from './Footer'

import bg from '../images/home_image2.jpg'

export default function Home(){
    const { t } = useTranslation();

    return(
        <div className="home-container">
            <Navbar/>
            <div className='div1'>
                {/*<img src={ bg } alt='background' className="bg-image"></img>*/}
                <p>
                    <strong> {t('Home.1')} </strong>
                </p>
            </div>
            <div className='div2'>
                <p>
                    <strong> {t('Home.2')} </strong>
                </p>
            </div>
            <Footer/>
        </div>
    );
}