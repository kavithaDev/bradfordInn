import React from 'react'
import { SuitesData } from '../DataContex'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero_styled'
import HeroText from '../components/HeroText'

class SingleRoom extends React.Component {

    static contextType = SuitesData;
    
    render(){ 
        const {findRoom} = this.context;
        let selectedRoom = findRoom(this.props.match.params.param);

        if(!selectedRoom){
            return (
                <>
                    <div className="error">
                        <h3>currently no rooms available in this category </h3>
                        <Link to="/suites" className="btn-primary" > Back </Link>
                    </div>
                </>
            )
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = selectedRoom
        const [ bannerImage, ...galleryImages ] = images

        return (
            <>
            <Hero banner={bannerImage}>
                <HeroText title={name}>
                    <Link to="/suites" className="btn-primary">Back to Suites</Link>
                </HeroText>
            </Hero>
            <section className="single-room">
                <div className="single-room-images">
                    {galleryImages.map((url,index) => <img key={index} src={url} alt={name} />)}
                </div>
                <div className="single-room-info">
                        <article className="desc">{description}</article>
                        <article className="info">
                            <h6>
                                Price : {price} <br />
                                Size : {size} <br/>
                                Capacity : {capacity} {capacity>1 ? "People" : "Person" } <br/>
                                {pets? "Pets allowed" : "No Pets"} <br/>
                                {breakfast && "Free Breakfast"}
                            </h6>
                        </article>
                </div>            
            </section>
            <section className="room-extras">
                <h6>Extra features</h6>
                <ul className="extras">
                    {
                        extras.map((val,index) => {
                            return <li key={index}> {val} </li>
                        })
                    }
                </ul>
            </section>
            </>
        )}
}

export default SingleRoom
