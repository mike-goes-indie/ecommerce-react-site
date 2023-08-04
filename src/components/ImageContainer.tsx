import ImageCarousel from "./ImageCarousel"
import {useContext} from "react"
import ActiveImage from "./ActiveImage"
import previous from "../assets/images/icon-previous.svg"
import next from "../assets/images/icon-next.svg"
import ImageNav from "./ImageNav"

import {imageContext , ImageContextType} from "./Providers/ImageProvider"
import Image1 from "../assets/images/image-product-1.jpg"
import Image2 from "../assets/images/image-product-2.jpg"
import Image3 from "../assets/images/image-product-3.jpg"
import Image4 from "../assets/images/image-product-4.jpg"
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg"
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg"
import Thumbnail4 from "../assets/images/image-product-3-thumbnail.jpg"
import { cartContext, CartProviderType } from "./Providers/CartProvider"

interface ImageContainerPropsType {
  width: string
  styles?: string
  prevStyles: string
  nextStyles: string
}

export default function ImageContainer({width, styles, prevStyles, nextStyles}: ImageContainerPropsType) {
  const thumbnails = [Thumbnail1,Thumbnail2, Thumbnail3, Thumbnail4]
  const products = [Image1, Image2, Image3, Image4]

  const {isMenuActive} = useContext(cartContext) as CartProviderType
  const {imageActive, setImageActive} = useContext(imageContext) as ImageContextType

  return (
    <article>
        <div className={`${styles} flex  flex-col  relative`}>
          {!isMenuActive && imageActive > 0 && <ImageNav src={previous} alt={"previous" } width={width} styles={prevStyles} onClick={() => setImageActive(prev => prev > 0 ? prev -= 1 :  prev = 0 )}/>}
          <ActiveImage
            src={products[imageActive]}
          />
        { !isMenuActive && imageActive < 3 && <ImageNav src={next} alt={"next"} width={width} styles={nextStyles} onClick={() => setImageActive(prev => prev === 3 ? prev  : prev += 1) } />}
          <ImageCarousel arr={thumbnails}/>
        </div>
    </article>
  )
}
