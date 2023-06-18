type ImagePropsType = {
    src: string
    alt: string
  }

export default function Thumbnail({src, alt}: ImagePropsType) {
  return (
        <img 
            src={src}
            alt={alt}
            className={`sm:rounded-md md:rounded-lg  object-contain
            w-[21%]
           `}
        />
  )
}
