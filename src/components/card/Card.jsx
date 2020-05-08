import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import './card.css'

const Card = (props) => {
  const { data } = props
  return (
    <div className="card" style={{ width: `${props.width}%` }}>
      <img src={data.imgUrl} alt={data.title} className="card__image" />
      <h3 className="card-category">{data.category}</h3>
      <h1 className="card-title">{data.title}</h1>
      <p className="card-price">${data.price} per person</p>
      <p className="card-rating">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        {data.ratedby} {data.superhost && data.superhost}
      </p>
    </div>
  )
}

export default Card
