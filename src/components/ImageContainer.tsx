import ImageCarousel from "./ImageCarousel"
import ActiveImage from "./ActiveImage"
import Image from "../assets/images/image-product-1.jpg"

export default function ImageContainer() {
  return (
    <article>
        <div className="flex  flex-col  sm:max-w-[800px] sm:min-w-[250px] relative">
          <ActiveImage
            src={Image}
          />
          <ImageCarousel/>
        </div>
    </article>
  )
}
