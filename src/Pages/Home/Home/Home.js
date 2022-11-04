import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <Services></Services>
           <Product></Product>
        </div>
    );
};

export default Home;