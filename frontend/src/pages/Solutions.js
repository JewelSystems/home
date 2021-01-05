import React from 'react';

import { useTranslation } from 'react-i18next';

import Navbar from './Navbar'
import Footer from './Footer'

export default function Solutions(){
    const { t } = useTranslation();

    return(
        <div>
            <Navbar/>
            <div className='div1'>
                <p>
                    <strong> {t('Solutions-text.1')} </strong>
                </p>
            </div>
            <div className='div2'>
                <p>
                    <strong> {t('Solutions-text.2')} </strong>
                </p>
            </div>
            <Footer/>
        </div>
    );
}