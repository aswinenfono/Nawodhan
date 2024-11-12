import React from 'react'

export const ParagraphComp = ({ children, text, className }) => {
    return (
        <p className={className}>
            {text} {children}
        </p >
    )
}
