import { ReactNode, createContext, useState } from "react";

export interface ImageContextType {
    imageActive: number
    setImageActive: React.Dispatch<React.SetStateAction<number>>
}

export const imageContext = createContext<ImageContextType | null>(null)

export default function ImageProvider ({children}: {children: ReactNode})  {
    const [imageActive, setImageActive] = useState<number>(0)
    return(
        <imageContext.Provider value={{imageActive, setImageActive}}>
            {children}
        </imageContext.Provider>
    )
}