import profile from "../assets/images/image-avatar.png"

export default function ProfilePic() {
  return (
    <div className="absolute right-0 hover:cursor-pointer">
        <img 
            src={profile}          
            alt="profile-picture"
            className="aspect-square w-10 sm:w-12 hover:border-[2px] hover:border-Orange rounded-full"
         />
    </div>
  )
}
