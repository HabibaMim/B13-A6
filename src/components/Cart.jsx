import React from 'react'
import { toast } from 'react-toastify'

const Cart = ({carts, setCarts}) => {
    const totalPrice= carts.reduce((sum,item)=>sum+item.price,0)

    const handlePayment = () =>{
        setCarts([])
        toast.success("Payment Successful!")
        }

         const handleDelete = (item) => {
            const filteredArray =carts.filter((c) => c.id !== item.id);
            setCarts(filteredArray);
            toast.error("Item deleted!");
    }
  return (
    <div className=' mt-[40px] mb-[120px] flex justify-center items-center'>
        <div className='w-[75%] border border-gray-200 rounded-lg p-[40px]'>
            
            <div className='text-[24px] font-bold pb-[16px]'>Your Cart</div>

            {
                carts.length === 0 ? <p>Cart is empty.</p> : <>
                   <div className='space-y-5 '>
                    
      {carts.map(item =><div className='flex justify-between items-center p-[20px] bg-[#F9FAFC] rounded-l-lg'> <div key={item.id}>
        <div className='flex gap-[20px]'><div><img className='w-[60px] h-[60px]' src={item.icon} alt="" /></div>
        <div><p className='font-bold'>{item.name}</p>
        <p className='text-gray-600'>${item.price}</p></div>
      </div></div>
      <button onClick={()=> handleDelete(item)} className='text-red-600 font-bold'>Remove</button></div>)}
      <div className='flex justify-between items-center'>
        <p className='text-gray-600'>Total:</p>
        <p className='text-[24px] font-bold'>${totalPrice}</p></div>
      </div>
      <button onClick={handlePayment} className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] w-full text-white rounded-full'>Proceed to Checkout</button>
                </>
            }
         
    </div>
    </div>
  )
}

export default Cart
