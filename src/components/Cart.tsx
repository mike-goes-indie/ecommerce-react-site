import { useContext } from "react"
import { CartProviderType, cartContext } from "./Providers/CartProvider"
import CartItem from "./CartItem"

export default function Cart() {
  const {cartEmpty, setCartEmpty, setItemsCount,boughtItems,  setBoughtItems, itemsCount, setMySneakers, mySneakers} = useContext(cartContext) as CartProviderType
  return (
    <div className="w-[90%] left-1/2 -translate-x-1/2 h-[350px]  sm:h-[250px] top-[90px] sm:max-w-[350px] bg-white rounded-lg shadow-xl sm:inline-block absolute z-[100] sm:left-[80%]">
      <h3 className="p-5 font-semibold text-lg">Cart</h3>
      <hr />
      <div className="w-full min-h-[60%] absolute h-max flex place-content-center items-center flex-col ">
        {
          cartEmpty && !boughtItems
            ? (
              <p className="">Your Cart is empty</p>
            )
            :boughtItems && cartEmpty
            ?(
              <p>just bought {mySneakers} sneakers</p>
            )
            : (
              <>
                <CartItem />
                <button className="w-[90%] sm:w-full sm:max-w-[300px] text-white bg-Orange rounded-lg h-[60px] sm:h-[50px]  "
                onClick={() => {
                  setCartEmpty(true)
                  setBoughtItems(true)
                  setMySneakers(itemsCount)
                  setItemsCount(0)
                }}
                >Checkout</button>
              </>
            )
        }
      </div>
    </div>
  )
}
