import { ReactNode } from "react";

export default function LightBox({children}:{children: ReactNode}) {
  return (
    <div className="w-screen h-screen absolute z-20 bg-transparent top-0 bg-black backdrop-opacity-75 backdrop-brightness-0">
      {children}
    </div>
  )
}
