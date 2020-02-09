import React from 'react'
import {Link} from 'react-router-dom'

export default function Suite({room}) {
    const {price, name, images, slug} = room
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="suite"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/suites/${slug}`} className="btn-primary room-link" >Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
