import React from 'react'

import './hotelfeature.css'

const HotelFeature = ({ icon, title, subtitle }) => (
  <div className="hotel-feature">
    <div className="icon">{icon}</div>
    <div className="details">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  </div>
)

export default HotelFeature
