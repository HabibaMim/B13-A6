import React from 'react'
import check from "../assets/Check.png"

const Singlecard = ({card, carts, setCarts}) => {

    const handleCards = () => {
        setCarts([...carts, card])
    }
  return (
    <div>
       <div className='flex flex-col justify-evenly p-[24px]  h-[420px] border-gray-200 border shadow-md rounded-l-lg'>
            <div className='flex justify-end items-start'>
            <div className={card.tag==="best seller" ? "badge badge-soft badge-warning" : card.tag==="popular" ? "badge badge-soft badge-primary" : "badge badge-soft badge-success"}>{card.tag}</div></div>
            <div className=''>
                <img className='w-[60px] h-[60px]' src={card.icon} alt="" />
                <p className='text-[24px] font-[700]'>{card.name}</p>
                <p className='text-gray-500'>{card.description}</p>
                <p className='text-gray-500'><span className='text-[24px] text-black font-[700]'>${card.price}</span>/{card.period}</p>
               
                
        
        <div className='text-gray-500'>{card.features.map(feature => (<div className='flex gap-[5px]'><img src={check} alt="" /><p>{feature}</p></div>))}</div>
      
       <button onClick={handleCards} className="btn mt-[15px] w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Singlecard
