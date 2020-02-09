import React from 'react'
import loadingImg from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>loading...</h4>
            <img src={loadingImg} alt="Content Loading" />
        </div>
    )
}
