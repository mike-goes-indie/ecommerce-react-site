import { useLockBodyScroll } from "@uidotdev/usehooks"

export default function MenuOverlay() {
  useLockBodyScroll()
  return (
    <div className="w-screen h-screen absolute z-20 bg-transparent top-0 bg-black backdrop-opacity-75 backdrop-brightness-0 sm:backdrop-opacity-0 sm:z-0 sm:transparent"  >
    </div>
  )
}
