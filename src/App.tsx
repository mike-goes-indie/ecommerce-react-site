import { useContext, useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import ProductContainer from "./components/ProductContainer"
import { CartProviderType, cartContext } from "./components/Providers/CartProvider"
import Cart from "./components/Cart"
import MenuOverlay from "./components/MenuOverlay"
import LightBox from "./components/LightBox"
import Nav from "./components/Nav"
import ProfilePic from "./components/ProfilePic"
import cart from "./assets/images/icon-cart.svg"
import hamburgerMenu from "./assets/images/icon-menu.svg"
import { lightBoxContext, LightBoxContextType } from "./components/Providers/LightBoxProvider"
import ImageContainer from "./components/ImageContainer"
import Close from "./assets/images/icon-close.svg"
import { ItemsNumber } from "./components/ItemsNumber"

function App() {
  const {cartActive,  isMenuActive, setIsMenuActive, setCartActive , setBoughtItems} = useContext(cartContext) as CartProviderType
  const left = isMenuActive  ? 'left-0' : 'left-[-250px]'
  const {lightboxActive, setLightboxActive} = useContext(lightBoxContext) as LightBoxContextType
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })
  return (
    <>
        <div className={`sm:mx-[5%] md:mx-[10%] h-[100%] `}>
          <Navbar>
            <img 
                src={hamburgerMenu} alt="menu button" 
                className="ml-4 sm:hidden relative "
                onClick={() => {
                  setIsMenuActive(true)
          }}
            />
            <h1 className="sm:mr-[20px]  relative left-0 ml-3 text-3xl">sneakers</h1>
            <Nav
              setIsMenuActive={setIsMenuActive}
              left={left}
            />
            {
              isMenuActive && windowWidth < 648 && <MenuOverlay/>
            }
            <div className="absolute right-[60px] md:right-[80px]"
                onClick={() => {
                  setCartActive((prev) => !prev)
                  setBoughtItems(false)
                }}
            >
              <img 
                src={cart} 
                alt="cart icon"  
                className=" hover:cursor-pointer w-7"
              />
              <ItemsNumber />
            </div>
          <ProfilePic />
          </Navbar>
          {
            cartActive && <Cart/>
          }
          <ProductContainer/>
          {
          lightboxActive && windowWidth > 648 &&
            (
                <LightBox>
                    <img src={Close} alt="close light box" onClick={() => setLightboxActive(false)} className='absolute top-[7%] left-[60%]'/>
                    <ImageContainer styles={"sm:max-w-[300px] absolute translate-y-[25%]  left-[50%] -translate-x-[50%] "} width={"7%"} prevStyles={"top-[35%] left-0"} nextStyles={"top-[35%] right-0"}/>
                </LightBox>
            )
          }
        </div>
    </>
  )
}

export default App
