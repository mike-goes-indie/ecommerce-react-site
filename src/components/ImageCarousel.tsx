import { ImageContextType, imageContext } from "./Providers/ImageProvider"
import Thumbnail from "./Thumbnail"
import { useContext } from "react"


export default function ImageCarousel({arr}:{arr:string[]}) {

  const {imageActive, setImageActive} = useContext(imageContext) as ImageContextType

  return (
    <div className="sm:flex justify-between  w-full hidden">
      {
        arr.map((el , index)=> {
        return  (
              <Thumbnail key={index} src={el} alt={"image of sneaker"} width={'w-[21%]'}  border={ imageActive === index ? 'border-2 border-Orange' : 'border-none' } onClick={ () => setImageActive(index)} />
          )
        })
      }
    </div>
  )
}
