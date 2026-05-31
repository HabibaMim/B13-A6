import React, { use } from 'react'
import check from "../assets/Check.png"
import Singlecard from './Singlecard'


const Cards = ({cardsPromise, carts, setCarts}) => {
    const cards =use (cardsPromise)
    
  return (
    <div className='flex flex-col justify-center items-center'>
        
        
      <div  className='grid grid-cols-3 pt-[40px] pb-[120px] max-w-[75%] gap-[20px]'>
        {cards.map((card) =>(<Singlecard key={card.id} carts={carts} setCarts={setCarts} card={card}></Singlecard>
           ))}
      </div>
    </div>
  )

}

export default Cards
