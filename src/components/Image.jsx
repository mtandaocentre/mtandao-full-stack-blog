import { IKImage } from "imagekitio-react"

// Make image component a prop
const Image = (src, className, w, h, alt) => {
  return (
    <IKImage 
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
        path={src} 
        src="https://ik.imagekit.io/mtandaocentre/mtandao-logo.png"
        className={className} 
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        alt={alt} 
        width={w}
        height={h}
    />
  )
}

export default Image