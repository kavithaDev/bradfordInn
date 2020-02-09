import React from 'react'

const HeroText = ({title,subtitle,children}) => {
    return (
        <div className="banner"> 
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default HeroText
