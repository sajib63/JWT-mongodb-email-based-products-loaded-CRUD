import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
 
  const logOutCurrentUser=()=>{
    logoutUser()
    .then(result=>{
      alert('logout successfully')
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>

    <li className='font-semibold'><Link to='/orders'>Orders</Link></li>

    {
      user?.uid ? <>

        <li className='font-semibold'><button className='btn btn-ghost'>{user?.email}</button></li>

        <li onClick={logOutCurrentUser} className='font-semibold'><button className='btn btn-ghost'>SinOut</button></li>

      </>
        :
        <>
          <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
          <li className='font-semibold'><Link to='/login'>Login</Link></li>

        </>
    }





  </>
  return (
    <div className="navbar h-20 pt-12 mb-12 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

          </label>

          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>






      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Header;