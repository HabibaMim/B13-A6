import React from 'react'
import img1 from "../assets/create.png"
import img2 from "../assets/choose.png"
import img3 from "../assets/create.png"

const Getstarted = () => {
  return (
    <div className='bg-[#F1F1F1]'>
      <div className=' border-t-[120px] border-[#F1F1F1] flex flex-col justify-center items-center'>
        <p className='text-[48px] font-[800]'>Get Started in 3 Steps</p>
        <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
        </div>
      <div className='flex gap-[30px] justify-center border-t-[40px] border-[#F1F1F1] border-b-[120px]'>
        
        <div className="card bg-base-100 w-[380px] h-[380px] rounded-lg shadow-sm">
            <div className='flex justify-end rounded-lg border-t-[20px] text-white border-r-[20px]'><p className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-[50%] flex justify-center items-center w-[30px] h-[30px]'>01</p></div>
            <div>
  <figure className="px-10 pt-10">
    <img
      src={img1}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
    </div>
  </div>
       </div>
         <div className="card bg-base-100 w-[380px] h-[380px] rounded-lg shadow-sm">
            <div className='flex justify-end rounded-lg border-t-[20px] text-white border-r-[20px]'><p className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-[50%] flex justify-center items-center w-[30px] h-[30px]'>02</p></div>
            <div>
  <figure className="px-10 pt-10">
    <img
      src={img2}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p className='text-gray-400'>Browse our catalog and select the tools that fit your needs.</p>
    </div>
  </div>
       </div>
         <div className="card bg-base-100 w-[380px] h-[380px] rounded-lg shadow-sm">
            <div className='flex justify-end rounded-lg border-t-[20px] text-white border-r-[20px]'><p className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-[50%] flex justify-center items-center w-[30px] h-[30px]'>03</p></div>
            <div>
  <figure className="px-10 pt-10">
    <img
      src={img3}
      alt=""
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p className='text-gray-400'>Download and start using your premium tools immediately.</p>
    </div>
  </div>
       </div>
      </div>
    </div>
  )
}

export default Getstarted
