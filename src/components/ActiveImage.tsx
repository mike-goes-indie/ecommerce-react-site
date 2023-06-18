type ImagePropsType = {
  src: string
}

export default function ActiveImage({src}: ImagePropsType) {
  return (
      <img 
      src={src} 
      alt="sneaker Image"
      className="sm:rounded-lg relative  object-contain w-full mb-[7%]  h-[60%] "
    />

  )
}
