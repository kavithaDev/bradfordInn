import React from 'react'
import Hero from '../components/Hero';
import HeroText from '../components/HeroText'
import {Link} from 'react-router-dom'
import SuitesWrapper from '../components/SuitesWrapper'

export default class Rooms extends React.Component {

    render(){

        return (
            <>
                <Hero classes="roomsHero" >
                    <HeroText title="Our Suites"> 
                        <Link to="/" className="btn-primary">Return Home</Link>
                    </HeroText>
                </Hero>
                <SuitesWrapper />
                
            </>
        )
    }
}


