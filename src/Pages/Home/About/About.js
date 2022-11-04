import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='w-1/2 relative'>
         <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
         <img src={parts} alt="" className="absolute w-3/5 right-5 top-1/2 border-8  rounded-lg shadow-2xl" />
         </div>
          <div className='w-1/2'>
            <p className="text-2xl  text-orange-600 font-bold">About Us</p>
            <h1 className="text-5xl my-5 font-bold">
                We are qualified <br />
                & of experience <br />
                in this field
            </h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse suscipit soluta consequuntur odio voluptatibus nobis ullam quasi corporis tempore.</p>
            
            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse suscipit soluta consequuntur odio </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;