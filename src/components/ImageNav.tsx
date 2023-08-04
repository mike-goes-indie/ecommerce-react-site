interface PreviousButtonPropsType {
    src: string
    alt: string
    width: string
    onClick:  () => void
    styles: string
}
export default function ImageNav({src, alt, width, onClick, styles}: PreviousButtonPropsType){
    return(
        <img src={src} alt={alt} width={width} className={`rounded-full ${styles} aspect-square  bg-white z-[50] sm:invisible absolute p-2`}  onClick={onClick} />
    )
}
// "7%"