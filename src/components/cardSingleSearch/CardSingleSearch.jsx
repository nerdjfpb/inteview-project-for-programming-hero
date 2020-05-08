import React from 'react'
import { AiFillStar } from 'react-icons/ai'

import './cardsinglepagesearch.css'

const CardSingleSearch = ({ data }) => (
  <div className="single-search">
    <div className="left-side">
      <img src={data.image} alt={data.title} className="single-search__img" />
    </div>
    <div className="right-side">
      <div className="single-search__heading">{data.title}</div>
      <div className="single-search__extra-benifities">
        {data.guest} guests {data.bedroom} bedrooms {data.bed} beds {data.bath}
        baths
      </div>
      <div className="single-search__wifi">{data.wifi}</div>
      <div className="single-search__cancel">{data.cancel}</div>
      <div className="single-search__footer">
        <div className="single-search__rating">
          <AiFillStar /> {data.rating} ({data.ratedBy})
        </div>
        <div className="single-search__price">${data.price}/ night</div>
      </div>
    </div>
  </div>
)

export default CardSingleSearch
