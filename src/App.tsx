import { useContext } from "react"
import Navbar from "./components/Navbar"
import ProductContainer from "./components/ProductContainer"
import { CartProviderType, cartContext } from "./components/Providers/CartProvider"
import Cart from "./components/Cart"


function App() {
  const {cartActive} = useContext(cartContext) as CartProviderType
  return (
    <>
        <div className="sm:mx-[5%] md:mx-[10%] h-screen">
          <Navbar/>
          {
            cartActive && <Cart/>
          }
          <ProductContainer/>
        </div>
    </>
  )
}

export default App
