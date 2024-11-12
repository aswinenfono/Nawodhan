import React from 'react'
const ButtonComp = ({ onClick, form, name, value, text, className, type, children }) => {
    return (

        < button form={form} type={type} className={className} onClick={(e) => { onClick && onClick(e) }} name={name} value={value} > {text}
            {children}
        </button >
    )

}

export default ButtonComp