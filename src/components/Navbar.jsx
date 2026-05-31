import React from 'react'
import cartImg from "../assets/shopping-cart.png"
import logo from "../assets/DigiTools.png"

const Navbar = ({carts}) => {
  return (
    <div className=' flex lg:justify-center justify-between items-center border-b border-b-gray-100'>
        <div className="lg:w-[75%] navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
   
  
    <img className='hidden md:block' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  
  <div className="gap-[16px] navbar-end">
    <div className="indicator">
  <span className="indicator-item badge badge-primary">{carts.length}</span>
  <img className='p-[12px]' src={cartImg} alt="" />
</div>
<button>Login</button>
    <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Get Started</a>
  </div>
</div>
    </div>
  )
}

export default Navbar
