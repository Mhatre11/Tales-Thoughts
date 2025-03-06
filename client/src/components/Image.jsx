import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({ src, className, width, height, alt }) => {
    return (
        <IKImage
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            path={src}
            alt={alt}
            className={className}
            loading='lazy'
            lqip={{ active: true, quality: 20 }}
            width={width}
            height={height}
        />
    )
}

export default Image