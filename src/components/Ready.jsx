import React from 'react'

const Ready = () => {
  return (
    <div className='bg-linear-to-r w-full gap-[20px] from-[#4f39f6] to-[#9514fa] text-white flex flex-col justify-between items-center pt-[120px] pb-[120px] px-[20px]'>
        <div className='flex flex-col justify-center items-center'>
      <p className='text-[40px] font-[800]'>Ready to Transform Your Workflow?</p>
      <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p></div>
      <div className='flex items-center justify-center gap-[20px]'>
        <button className="btn bg-white shadow-none md:w-full rounded-full"> <span className='bg-linear-to-r  from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Explore Products</span> </button>
<button className="btn bg-clip-text text-transparent md:w-full text-white rounded-full" >View Pricing</button>
      </div>
      <p>14-day free trial &bull; No credit card required &bull; Cancel anytime</p>
    </div>
  )
}

export default Ready
