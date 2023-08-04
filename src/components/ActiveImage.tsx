import { useContext } from "react"
import { LightBoxContextType, lightBoxContext } from "./Providers/LightBoxProvider"

type ImagePropsType = {
  src: string
}

export default function ActiveImage({src}: ImagePropsType) {
  const {setLightboxActive} = useContext(lightBoxContext) as LightBoxContextType
  return (
      <img 
      src={src} 
      alt="sneaker Image"
      className="sm:rounded-lg relative  object-contain w-full mb-[7%]  h-[60%] "
      onClick={() => setLightboxActive(true)}
    />
  )
}
