import React from 'react'
import './section.scss'

export const Section = ({id,title,desc, children, className}) => {
    return (
        <div className={`section ${className && className}`} id={id}>
            <div className='container'>
                <h1 className='title text-center'>{title}</h1>
                <h3 className='text-center'>{desc}</h3>
                <div className='row d-flex justify-content-center align-items-center mt-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}
