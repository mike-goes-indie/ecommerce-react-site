import { ReactNode, createContext } from "react";
import { useState } from "react";

export interface CartProviderType{
    cartActive: boolean
    setCartActive: React.Dispatch<React.SetStateAction<boolean>>
    setCartEmpty: React.Dispatch<React.SetStateAction<boolean>>
    cartEmpty: boolean
    itemsCount: number
    setItemsCount: React.Dispatch<React.SetStateAction<number>>
    boughtItems: boolean
    setBoughtItems: React.Dispatch<React.SetStateAction<boolean>>
    setMySneakers: React.Dispatch<React.SetStateAction<number>>
    mySneakers: number
    isMenuActive: boolean
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>
    itemsInCart: number
    setItemsInCart: React.Dispatch<React.SetStateAction<number>> 
}

export const cartContext = createContext<CartProviderType | null>(null)

export default function CartProvider({children}: {children: ReactNode}) {
    const [cartActive, setCartActive] = useState(false)
    const [cartEmpty, setCartEmpty] = useState<boolean>(true)
    const [itemsCount, setItemsCount] = useState<number>(0)
    const[boughtItems, setBoughtItems] = useState<boolean>(false)
    const [mySneakers, setMySneakers] = useState<number>(0)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [itemsInCart, setItemsInCart] = useState<number>(0)
 
  return (
    <cartContext.Provider value={{cartActive, setCartActive,setCartEmpty,cartEmpty,itemsCount, setItemsCount, boughtItems, setBoughtItems,setMySneakers, mySneakers, isMenuActive, setIsMenuActive, itemsInCart, setItemsInCart}}>
        {children}
    </cartContext.Provider>
  )
}

