import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const Product = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('Product.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div className='my-8 text-center'>
          <p className='text-xl font-bold text-orange-600'>Popular Products</p>
          <p className='text-4xl font-bold py-4'>Browse Our Products</p>
          <p className='w-1/2 mx-auto text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>


          <div className='grid md:grid-cols-3 gap-10 my-8'>
            {
                products.map(product=> <ProductCart key={product.id} product={product}></ProductCart>)
            }
          </div>
        </div>
    );
};

export default Product;