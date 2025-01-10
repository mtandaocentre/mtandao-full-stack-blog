import { IKImage } from "imagekitio-react"

const Image = () => {
  return (
    <IKImage 
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
        //path="/mtandao-logo.png" 
        src="https://ik.imagekit.io/mtandaocentre/mtandao-logo.png"
        className="w-12 h-12" 
        alt="Mtandao Logo" 
    />
  )
}

export default Image