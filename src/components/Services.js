import React from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {

    const servicesHome = {
        services: [
          {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          },
          {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
          }
        ]
    };

    return (
        <section className="services">
            <Title>services</Title>
            <div className="services-center">
                {
                  servicesHome.services.map((val,index)=>{
                    return <article key={index} className="service">
                      <span>{val.icon}</span>
                      <h6>{val.title}</h6>
                      <p>{val.info}</p>
                    </article>
                  })
                }
            </div>
        </section>
    )
}

export default Services
