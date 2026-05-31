import React from 'react'
import heroImg from "../assets/banner.png"
import dot from "../assets/dot.png"
import play from "../assets/Play.png"

const Hero = () => {
  return (
    <div className='flex justify-center '>
        <div className='w-[75%] flex justify-between gap-[60px] border-t-[85px] border-b-[85px] border-white'>
      <div className='flex flex-col justify-center'>
        <div className="badge badge-soft badge-primary">
            <img src={dot} alt="" />
            <p>New: AI-Powered Tools Available</p></div>
            <p className='text-[72px] font-[800]'>Supercharge Your Digital Workflow</p>
            <p className='border-b-[32px] border-white text-gray-400'>Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today.
<br />
Explore Products
</p>
<div className='flex gap-[15px]'>
    <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Explore Products</a>
    <button className="btn btn-outline btn-primary rounded-full">
        <img className='h-[15px]' src={play} alt="" />
        <p>Watch Demo</p></button>
</div>
      </div>
      <div>
        <img className='w-[800px]' src={heroImg} alt="" />
      </div>
      </div>

      
    </div>
  )
}

export default Hero
