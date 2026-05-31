import React from 'react'

const Cart = ({carts}) => {
    const totalPrice= carts.reduce((sum,item)=>sum+item.price,0)
  return (
    <div className=' mt-[40px] mb-[120px] flex justify-center items-center'>
        <div className='w-[75%] border border-gray-200 rounded-lg p-[40px]'>
            <div className='space-y-5 '>
            <div className='text-[24px] font-bold'>Your Cart</div>
      {carts.map(item => <div className='bg-[#F9FAFC] rounded-l-lg' key={item.id}>
        <div className='flex gap-[20px]'><div><img className='w-[60px] h-[60px]' src={item.icon} alt="" /></div>
        <div><p className='font-bold'>{item.name}</p>
        <p className='text-gray-600'>${item.price}</p></div>
      </div></div>)}
      <div className='flex justify-between items-center'>
        <p className='text-gray-600'>Total:</p>
        <p className='text-[24px] font-bold'>${totalPrice}</p></div>
      </div>
      <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full text-white rounded-full'>Proceed to Checkout</button>
    </div>
    </div>
  )
}

export default Cart
