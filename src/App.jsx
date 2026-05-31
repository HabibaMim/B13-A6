import { useState } from "react"
import Cards from "./components/Cards"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Getstarted from "./components/Getstarted"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricecard from "./components/Pricecard"
import Rating from "./components/Rating"
import Ready from "./components/Ready"
import Tabtitle from "./components/Tabtitle"


const getCards= async () => {
  const res= await fetch ("/products.json")
  return res.json()
}

const cardsPromise = getCards()

function App() {
   const [activeTab, setActiveTab] = useState("Products")
   const [carts, setCarts]=useState([])

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Rating></Rating>
    <Tabtitle></Tabtitle>
     <div className='mt-[16px] flex justify-center'>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-box bg-transparent ">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-[100px]" aria-label="Products" defaultChecked
  onClick={()=> setActiveTab("Products")} />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-[100px]" aria-label="Cart"
  onClick={()=> setActiveTab("Cart")} />
  
</div>
    </div>

    {activeTab=== "Products" ? <Cards cardsPromise={cardsPromise} carts={carts} setCarts={setCarts}></Cards> :null}
    {activeTab==="Cart" ? <Cart carts={carts} setCarts={setCarts}></Cart> :null}
    <Getstarted></Getstarted>
    <Pricecard></Pricecard>
    <Ready></Ready>
    <Footer></Footer>
    </>
  )
}

export default App
