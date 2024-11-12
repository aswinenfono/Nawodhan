import React from 'react'

const ImageComp = ({ className, source }) => {
    return (
        <>
            <img src={source} className={className} alt="" />

        </>
    )
}

export default ImageComp