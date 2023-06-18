import { ReactNode, createContext } from "react";
import { useState } from "react";

export interface CartProviderType{
    cartActive: boolean
    setCartActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const cartContext = createContext<CartProviderType | null>(null)

import React from 'react'

export default function CartProvider({children}: {children: ReactNode}) {
    const [cartActive, setCartActive] = useState(false)
  return (
    <cartContext.Provider value={{cartActive, setCartActive}}>
        {children}
    </cartContext.Provider>
  )
}

