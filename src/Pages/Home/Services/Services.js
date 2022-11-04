import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
          <div  className='text-center mb-8'>
          <p className='text-3xl font-bold text-orange-700'>Service</p>
            <p className="text-5xl font-semibold">Our Service Area</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, officiis illum quam veritatis rerum veniam.</p>
          </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;