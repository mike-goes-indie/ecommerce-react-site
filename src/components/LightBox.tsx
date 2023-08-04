import { ReactNode} from "react"
import { useLockBodyScroll } from "@uidotdev/usehooks"

const LightBox = ({children}: {children: ReactNode}) => {
  useLockBodyScroll()
  return (
    <div className="w-[100%] min-h-[100%] fixed z-[100] bg-transparent left-0 top-0 bg-black backdrop-opacity-75 backdrop-brightness-0 invisible sm:visible">
      {children}
    </div>
  )
}

export default LightBox

