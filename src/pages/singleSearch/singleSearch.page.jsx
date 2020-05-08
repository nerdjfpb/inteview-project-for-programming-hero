import React from 'react'

import TagButton from '../../components/tagButton/TagButton'
import { singleSearchPageCards } from '../../dummydata/singleSearchPageData'

import CardSingleSearch from '../../components/cardSingleSearch/CardSingleSearch'

import Map from './map.png'

import './singlesearch.css'

const tagValues = [
  'Cancellation flexibility',
  'Type of place',
  'Price',
  'Instant Book',
  'More Filters',
]

const SingleSearch = () => (
  <div className="container">
    <div className="single-search-section">
      <div className="left-side">
        <p className="sub-heading">252 stays Apr 13-17 3 guests</p>
        <h1 className="heading-singleSearch">Stay in Dhaka Division</h1>
        <div className="tags">
          {tagValues.map((tag) => (
            <TagButton value={tag} />
          ))}
        </div>
        <div className="single-search-section__cards">
          {singleSearchPageCards.map((item) => (
            <div className="single-search-section__single-card">
              <CardSingleSearch data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <div className="map">
          <img src={Map} alt="google map" className="google-map-dummy" />
        </div>
      </div>
    </div>
  </div>
)

export default SingleSearch
