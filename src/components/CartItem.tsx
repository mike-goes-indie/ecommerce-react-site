import { useContext } from "react"
import DeleteIcon from "../assets/images/icon-delete.svg"
import Image1 from "../assets/images/image-product-1-thumbnail.jpg"
import Thumbnail from "./Thumbnail"
import { CartProviderType, cartContext } from "./Providers/CartProvider"

export default function CartItem() {
  const {itemsCount, setItemsCount, setCartEmpty, setBoughtItems} = useContext(cartContext) as CartProviderType
  return (
    <div className="flex gap-5 ml-1 mr-1 mt-4 sm:mt-0 mb-4 sm:mb-0 w-[90%] h-[100px]  items-center">
      <Thumbnail src={Image1} alt="image of sneaker"  width={'w-[60px]'}/>
      <div >
        <p className="text-xl sm:text-[15px] text-DarkGrayishBlue ">Fall Limited Edition Sneakers</p>
        <div className="flex gap-2">
          <p className="text-xl sm:text-[17px] text-DarkGrayishBlue">$125.00 x {itemsCount}</p>
          <p className="text-xl sm:text-[17px] "> $ {125 * itemsCount}</p>
        </div>
      </div>
      <img src={DeleteIcon} alt="delete button" className="self-middle absolute right-[10%] sm:right-5"  onClick={() => {
        setCartEmpty(true)
        setItemsCount(0)
        setBoughtItems(false)
        }}/>
      </div>
  )
}
