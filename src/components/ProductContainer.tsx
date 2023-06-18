import ImageContainer from './ImageContainer'
import ProductDescriptionContainer from './ProductDescriptionContainer'

export default function ProductContainer() {
  return (
    <div className='flex flex-col sm:flex-row w-full  border-black md:pl-[5%] mt-[30px]  sm:mt-[75px]'>
        <ImageContainer/>
        <ProductDescriptionContainer/>
    </div>
  )
}
