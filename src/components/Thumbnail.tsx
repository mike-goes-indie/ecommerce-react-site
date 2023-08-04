type ImagePropsType = {
    src: string
    alt: string
    width?: string
    border?: string
    onClick?: () => void
  }

export default function Thumbnail({src, alt, width, border, onClick}: ImagePropsType) {
  return (
        <img
            src={src}
            alt={alt}
            width={width}
            className={` sm:rounded-md md:rounded-lg  object-contain
            ${width} ${border} `}
            onClick = {onClick}
          //  w-[21%]
        />
  )
}
