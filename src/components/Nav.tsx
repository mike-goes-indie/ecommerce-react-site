import closeMenu from "../assets/images/icon-close.svg"

type  NavPropsType = {
    setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>
    setLightboxActive: React.Dispatch<React.SetStateAction<boolean>>
    left: string
}

export default function Nav({ setIsMenuActive, setLightboxActive, left}: NavPropsType) {
  return (
    <div>
      <nav 
        className={` absolute sm:gap-[5%] lg:gap-[15%] pt-8 pl-6 flex flex-col  top-0 z-50 sm:relative w-[250px] sm:flex-row bg-white ${left} flex-grow sm:left-5 md:left-10 sm:p-0
        h-screen sm:h-min sm:bg-transparent text-DarkGrayishBlue gap-5`} 
      >
        <img 
          src={closeMenu} 
          alt="close menu"
          className="sm:hidden text-DarkGrayishBlue mb-[30px]" 
          width={15}
          height={15}
          onClick={() => {
            setIsMenuActive(false)
            setLightboxActive(false)
          }}
        />
         <a href="" className="flex-shrink after:content-[''] after:bg-Orange after:w-0 after:hover:w-full after:h-[3px] after:inline-block  after:left-0 after:top-[69px] after:absolute relative">Collections</a>
         <a href="" className="flex-shrink after:content-[''] after:bg-Orange after:w-0 after:hover:w-full after:h-[3px] after:inline-block  after:left-0 after:top-[69px] after:absolute relative">Men</a>
         <a href="" className="flex-shrink after:content-[''] after:bg-Orange after:w-0 after:hover:w-full after:h-[3px] after:inline-block  after:left-0 after:top-[69px] after:absolute relative">Women</a>
         <a href="" className="flex-shrink after:content-[''] after:bg-Orange after:w-0 after:hover:w-full after:h-[3px] after:inline-block  after:left-0 after:top-[69px] after:absolute relative">About</a>
         <a href="" className="flex-shrink after:content-[''] after:bg-Orange after:w-0 after:hover:w-full after:h-[3px] after:inline-block  after:left-0 after:top-[69px] after:absolute relative">Contacts</a>
      </nav>  
    </div>
  )
}
