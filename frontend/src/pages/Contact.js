import React from 'react';
import '../styles/Contact.css'

import Navbar from './Navbar'
import Footer from './Footer'

import bg from '../images/contact_bg.jpg'

export default function Contacts(){
    return(
        <div>
            <Navbar/>
            <div className='div1'>
            <img src={ bg } alt='background' className="bg-image"></img>
            </div>
            <Footer/>
        </div>
    );
}