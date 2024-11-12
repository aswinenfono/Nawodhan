import React from 'react'

const InputComp = ({ type, name, placeholder, disabled, required, value, onChange, className, onClick, checked, readOnly }) => {
    return (
        <>
            <input required={required} readOnly disabled={disabled} checked={checked} onClick={onClick && onClick} onChange={onChange && onChange} type={type} value={value} name={name} placeholder={placeholder} className={className} />
        </>
    )
}

export default InputComp