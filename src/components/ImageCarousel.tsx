import Image1 from "../assets/images/image-product-1-thumbnail.jpg"
import Image2 from "../assets/images/image-product-2-thumbnail.jpg"
import Image3 from "../assets/images/image-product-3-thumbnail.jpg"
import Image4 from "../assets/images/image-product-4-thumbnail.jpg"
import Thumbnail from "./Thumbnail"


export default function ImageCarousel() {
  return (
    <div className="sm:flex justify-between  w-full hidden">
      <Thumbnail src={Image1} alt={"image of sneaker"}/>
      <Thumbnail src={Image2} alt={"image of sneaker"}  />
      <Thumbnail src={Image3} alt={"image of sneaker"}  />
      <Thumbnail src={Image4} alt={"image of sneaker"}  />
    </div>
  )
}
