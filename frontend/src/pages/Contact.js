import React from 'react';
import '../styles/Contact.css'

import { useTranslation } from 'react-i18next';


import Navbar from './Navbar'
import Footer from './Footer'

import bg from '../images/contact_bg.jpg'

export default function Contacts(){
    const { t } = useTranslation();

    return(
        <div>
            <Navbar/>
            <div className='div1'>
                <p>
                    <strong> {t('Contact-text.1')} </strong>
                </p>
            </div>
            <div className='div2'>
                <p>
                    <strong> {t('Contact-text.2')} </strong>
                </p>
            </div>
            <Footer/>
        </div>
    );
}