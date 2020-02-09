import React from 'react'

const Hero = ({children,classes}) =>{
    return (
        <header className={classes}>{children}</header>
    )
}

export default Hero

Hero.defaultProps = {
    classes:"defaultHero"
}