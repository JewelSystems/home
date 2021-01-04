import React from 'react';

import Navbar from './Navbar'
import Footer from './Footer'

import bg from '../images/contact_bg.jpg'

export default function Contacts(){
    return(
        <div>
            <Navbar/>
            <img src={ bg } alt='background' className="bg-image"></img>
            
            <Footer/>
        </div>
    );
}