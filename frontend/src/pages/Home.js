import React from 'react';
import '../styles/Home.css'

import Navbar from './Navbar'
import Footer from './Footer'

import bg from '../images/home_image2.jpg'

export default function Home(){
    return(
        <div className="home-container">
            <div className='div1'>
                <Navbar/>
                {/*<img src={ bg } alt='background' className="bg-image"></img>*/}
                <p className="home-body">
                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem lorem, sodales a vehicula vel, ultricies a est. Nulla id leo ut metus molestie iaculis eu id nisl. Duis est turpis, bibendum sit amet rutrum nec, faucibus commodo felis. Sed tempus sodales vehicula. Donec tristique metus imperdiet mauris accumsan, vel bibendum felis accumsan. Aenean vestibulum lorem vel semper efficitur. Fusce at velit placerat dolor accumsan tempus quis nec leo. </strong>
                </p>
                <Footer/>
            </div>
        </div>
    );
}