import { ReactNode } from "react"
export default function Navbar({children} : {children: ReactNode}) {
  return (
    <header className="container mr-0 flex relative items-center h-[50px] z-10 pb-[15px] sm:h-[105px]  sm:mx-auto sm:pr-[100px] sm:border-b-[1px] sm:border-GrayishBlue pt-5 sm:pt-0" >
      { children }
    </header>
  )
}


