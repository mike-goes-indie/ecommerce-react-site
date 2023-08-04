import ImageContainer from './ImageContainer'
import ProductDescriptionContainer from './ProductDescriptionContainer'

export default function ProductContainer() {
  return (
    <div className='flex flex-col sm:flex-row w-full  border-black md:pl-[5%] mt-[30px]  sm:mt-[75px]'>
        <ImageContainer width={"7%"} prevStyles={"top-[35%] left-0"} nextStyles={"top-[35%] right-0"} styles={"sm:max-w-[700px] sm:min-w-[250px] mb-[30px]"} />
        <ProductDescriptionContainer/>
    </div>
  )
}
