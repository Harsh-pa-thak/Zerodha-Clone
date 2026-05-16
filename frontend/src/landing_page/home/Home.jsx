import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAcc from '../OpenAcc';
import Footer from '../Footer';
import Navbar from '../Navbar';    


function Home() {
    return ( <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Award></Award>
    <Stats></Stats>
    <Pricing></Pricing>
    <OpenAcc></OpenAcc>
    <Footer></Footer>
    </> );

}

export default Home;