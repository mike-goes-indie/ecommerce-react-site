import {  ReactNode, createContext, useState } from 'react'


export interface LightBoxContextType{
    lightboxActive: boolean
    setLightboxActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const lightBoxContext = createContext<LightBoxContextType | null >(null)


export default function LightBoxProvider({children}:{children: ReactNode}) {
    const [lightboxActive, setLightboxActive ]
  = useState<boolean>(false)
  return (
    <lightBoxContext.Provider value={{lightboxActive, setLightboxActive}}>
        {children}
    </lightBoxContext.Provider>
  )
}
