import React from 'react'
import Suite from './Suite'

const SuitesList = ({rooms}) => {
    if (rooms.length === 0) {
        return (
          <div className="empty-search">
            <h3> Currently no rooms available for this selection </h3>
          </div>
        )
      }
      return (
        <section className="roomslist">
          <div className="roomslist-center">
            {rooms.map(room => {
              return <Suite key={room.id} room={room} />;
            })}
          </div>
        </section>
    )
}

export default SuitesList

