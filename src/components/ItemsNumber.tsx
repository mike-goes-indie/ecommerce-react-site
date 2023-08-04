import { useContext, useEffect } from 'react'
import { CartProviderType, cartContext } from './Providers/CartProvider'

export const ItemsNumber = () => {
    const {cartEmpty, itemsCount, itemsInCart, setItemsInCart} = useContext(cartContext) as CartProviderType
    useEffect(() => {
        itemsCount > itemsInCart && !cartEmpty ? setItemsInCart(itemsCount) : null
    },[itemsCount])
  return (
    <div className='bg-Orange text-white  rounded-lg h-[13px] w-5 text-[10px] text-center absolute top-0 right-[-5px]'>{itemsInCart}</div>
  )
}
