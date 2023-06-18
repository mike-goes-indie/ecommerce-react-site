import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import { useState } from "react"

function AddToCart(){
  return
}

export default function ProductDescriptionContainer() {
  const [amount, setAmount] = useState(0)
  return (
    <div className="h-min lg:mt-8  text-left mx-[3%] lg:ml-[110px] mb-[20px]">
      <h4 className="mb-[7px] md:mb-[10px] text-[12px] font-bold tracking-widest text-Orange ">SNEAKER COMPANY</h4>
      <h2 className="text-2xl font-bold  leading-tight mb-3 md:text-3xl lg:text-5xl lg:mb-4">Fall Limited Edition <br /> Sneakers</h2>
      <p className="mb-7 text-DarkGrayishBlue lg:w-[90%]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
      </p>
      <div className="flex justify-between mb-5 md:flex-col">
        <div className="relative flex gap-[40%]  items-center">
          <h3 className="font-bold text-[20px]">$125.00</h3>
          <p className="text-Orange bg-PaleOrange py-1 px-2 rounded-md ">50%</p>
        </div>
        <p className="text-DarkGrayishBlue  line-through">$250.00</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="justify-between flex px-5 w-full sm:max-w-[300px] bg-LightGrayishBlue rounded-md items-center">
          <img src={minus} alt="minus sign" />
          <p>{amount}</p>
          <img src={plus} alt="plus sign" />
        </div>
        <button
          onClick={AddToCart}
          className="w-full sm:max-w-[300px] text-white bg-Orange rounded-lg h-[40px] "
        >
          Add to Cart 
        </button>
      </div>
    </div>
  )
}
