import React from 'react'
import Hero from '../components/Hero'
import HeroText from '../components/HeroText';
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <Hero>
            <HeroText title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </HeroText>
        </Hero>
    )
}

export default Error
