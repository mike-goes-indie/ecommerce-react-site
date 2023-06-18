
import cart from "../assets/images/icon-cart.svg"
import ProfilePic from "./ProfilePic"
import hamburgerMenu from "../assets/images/icon-menu.svg"
import { useState, useContext } from "react"
import { lightBoxContext } from "./Providers/LightBoxProvider"
import LightBox from "./LightBox"
import Nav from "./Nav"
import { CartProviderType, cartContext } from "./Providers/CartProvider"

interface LightBoxContextType{
  lightboxActive: boolean
  setLightboxActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar() {
  const { setLightboxActive } 
  = useContext(lightBoxContext) as LightBoxContextType

  const { setCartActive } = useContext(cartContext) as CartProviderType

  const [isMenuActive, setIsMenuActive] = useState(false)

  const left = isMenuActive? 'left-0': 'left-[-250px]'

  const {lightboxActive} = useContext(lightBoxContext) as LightBoxContextType
  
  return (
    <header className="container mr-0 flex relative items-center h-[50px] z-10 pb-[15px] sm:h-[105px]  sm:mx-auto sm:pr-[100px] sm:border-b-[1px] sm:border-GrayishBlue pt-5 sm:pt-0" >
      <img 
        src={hamburgerMenu} alt="menu button" 
        className="ml-4 sm:hidden relative "
        onClick={() => {
          setIsMenuActive(true)
          setLightboxActive(true)
        }}
      />
      <h1 className="sm:mr-[20px]  relative left-0 ml-3 text-3xl">sneakers</h1>
      
        {
          lightboxActive
          ? (
            <LightBox>
              <Nav
                setIsMenuActive={setIsMenuActive}
                setLightboxActive={setLightboxActive}
                left={left}
              />
            </LightBox>
          )
          :(
            <Nav
                setIsMenuActive={setIsMenuActive}
                setLightboxActive={setLightboxActive}
                left={left}
              />
          )
        }

      <img 
        src={cart} 
        alt="cart icon"  
        className="absolute right-[60px] md:right-[80px] hover:cursor-pointer"
        onClick={() => setCartActive((prev) => !prev)}
      />
      <ProfilePic />
    </header>
  )
}
