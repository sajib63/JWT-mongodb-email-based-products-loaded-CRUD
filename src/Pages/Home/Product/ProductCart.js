import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductCart = ({product}) => {
    const {image, id, name, price}=product
    return (
        <div className="card  shadow-xl p-4">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
         <div className='flex justify-center'>
         <FaStar className='text-orange-600'></FaStar>
            <FaStar className='text-orange-600'></FaStar>
            <FaStar className='text-orange-600'></FaStar>
            <FaStar className='text-orange-600'></FaStar>
            <FaStar className='text-orange-600'></FaStar>
         </div>
          <p>{name}</p>
          <p  className='text-orange-600'>price: ${price}</p>
          
        </div>
      </div>
    );
};

export default ProductCart;