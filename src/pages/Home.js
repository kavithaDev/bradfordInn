import React from 'react'
import Hero from '../components/Hero'
import HeroText from '../components/HeroText'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedSuites from '../components/FeaturedSuites'

const Home = ()=>{
    return (
        <>
            <Hero>
                <HeroText title="Spacious suites" subtitle="Our newly renovated suites starting from $299">
                    <Link to="/suites" className="btn-primary">Our Suites</Link>
                </HeroText>
            </Hero>
            <Services />
            <FeaturedSuites />
        </>
    )
}

export default Home;