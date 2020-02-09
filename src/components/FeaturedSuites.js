import React, { Component } from 'react'
import Title from './Title'
import { SuitesData } from '../DataContex'
import Loading from './Loading'
import Suite from './Suite'

export default class FeaturedSuites extends Component {
    
    static contextType = SuitesData;
     
    render() {
        const value = this.context;

        return (
            <section className="featured-rooms">
                <Title>Featured Suites</Title>
                <div className="featured-rooms-center">
                    {
                        value.loading? <Loading /> : value.featuredRooms.map(suite=>{
                            return <Suite key={suite.id} room={suite} />
                        })
                    }
                    
                </div>
            </section>
        )
    }
}
