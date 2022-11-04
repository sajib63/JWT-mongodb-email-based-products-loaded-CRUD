import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrdersTableBody from './OrdersTableBody';


const Orders = () => {
    const { user ,logoutUser} = useContext(AuthContext)
    const [orders, setOrders] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            // for jwt 
            headers:{
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete=id=>{
        const agree=window.confirm(`are you sure to delete ${id}`,);

        if(agree){
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE'
            })
            .then(res=> {
                // jwt
                if(res.status===401 || res.status===403){
                    logoutUser();
                }
                return res.json()
            })
            .then(data=>{
                if(data.deletedCount>0){
                    const remaining=orders.filter(odr=> odr._id !== id);
                    setOrders(remaining)
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

    const handleStatusUpdate=id=>{
       
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'Approved'})
        

        })
        .then(res=> res.json())
        .then(data=> {
          
            if(data.modifiedCount>0){
                const remaining=orders.filter(ord=> ord._id !==id);
                const approving=orders.find(ord=> ord._id === id);
                approving.status='Approved';
                const newOrders=[...remaining, approving];
                setOrders(newOrders);
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl'>You Have  {orders.length} Orders</h1>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    orders.map(order=> <OrdersTableBody handleDelete={handleDelete} order={order} handleStatusUpdate={handleStatusUpdate} ></OrdersTableBody>)
                   }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Orders;