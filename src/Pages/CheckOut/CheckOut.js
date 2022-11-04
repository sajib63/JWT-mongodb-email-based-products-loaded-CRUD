import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const findData = useLoaderData();
    const { user } = useContext(AuthContext)
    const { title, price, _id } = findData;

    const handlerSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=`${form.firstName.value}  ${form.lastName.value}`;
        const phone=form.phone.value;
        const email=user?.email || 'unregister';
        const message=form.message.value
   
        const order={
            service: _id,
            serviceName: title,
            price,
            customer: name, email, phone, message
        }

      fetch('http://localhost:5000/orders', {
        method:'post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)

      })
      .then(res=>res.json())
      .then(data=>{
       
        if(data.acknowledged){
            alert('your order send')
            form.reset();
        }
      })
      .catch(error=>{
        console.log(error);
      })
    }
    return (
        <div className='my-4'>
            <form onSubmit={handlerSubmit}>
                <h2 className="text-3xl">You are about to order: {title}</h2>
                <h2 className="text-2xl">price  ${price}.00</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
                    <input name='lastName'  type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your Message"></textarea>

                <input className='btn' type="submit" value="Place your order" />

            </form>
        </div>
    );
};

export default CheckOut;