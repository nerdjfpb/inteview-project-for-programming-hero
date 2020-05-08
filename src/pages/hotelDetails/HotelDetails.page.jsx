import React from 'react'
import { AiFillHome, AiFillCheckSquare, AiFillStar } from 'react-icons/ai'
import { FaSprayCan } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

import HotelFeature from '../../components/hotelFeature/HotelFeature'
import Button from '../../components/button/Button'

import Image1 from './1.png'
import Image2 from './2.png'

import './hoteldetails.css'

const HotelDetails = () => (
  <div className="hotel-details">
    <div className="hotel-details__images">
      <img src={Image1} alt="image1" />
      <img src={Image2} alt="image2" />
    </div>
    <div className="container">
      <div className="hotel-details__parts">
        <div className="left-part">
          <h1 className="heading1">
            Light bright airy stylish apt & safe peaceful stay
          </h1>
          <div className="paragraphs">
            <p className="paragraph1">Dhaka, Bangladesh</p>
            <p className="paragraph1">4 guests, 2 bedroom, 2 beds, 2 baths</p>
          </div>
          <div className="hotel-features">
            <HotelFeature
              icon={<AiFillHome />}
              title="Entire home"
              subtitle="You’ll have the condominium to yourself."
            />
            <HotelFeature
              icon={<AiFillCheckSquare />}
              title="Self check-in"
              subtitle="You can check in with the doorman."
            />
            <HotelFeature
              icon={<FaSprayCan />}
              title="Sparkling clean"
              subtitle="10 recent guests said this place was sparkling clean."
            />
            <HotelFeature
              icon={<BsFillPersonFill />}
              title="Rowdra is a Superhost"
              subtitle="Superhosts are experienced, highly rated hosts who 
              are committed to providing great stays for guests."
            />
          </div>
          <div className="hotel-details__paragraph">
            It’s newly constructed 7 storied building maintaining building code
            by a locally famous architect. Enough lights and natural air are
            playing here. The place (apartment) is calm and noise free. You’ll
            love my place for its lovely and bright looks comfortable stay.
            Bangladesh is a beauty with its six seasons and green. The people
            are hospitable and worm.It’s newly constructed 7 storied building
            maintaining building code by a locally famous architect. Enough
            lights and natural air are playing here. The place (apartment) is
            calm and noise free. You’ll love my place for its lovely and bright
            looks comfortable stay. Bangladesh is a beauty with its six seasons
            and green. The people are hospitable and worm.
          </div>
          <a href="#g" className="details-link">
            Read more about the space
          </a>

          <div className="reviews">
            <p className="review">Reviews</p>
            <p className="review__details">4.9 (20 reviews)</p>
          </div>
        </div>
        <div className="right-part">
          <div className="price-card">
            <div className="heading">$34/ night</div>
            <p className="review__details">
              <AiFillStar />
              4.9 (20 reviews)
            </p>
            <p className="date">Dates</p>
            <div className="dates">
              <div className="arrivaldate">4/13/2020</div>
              <div className="middle">></div>
              <div className="check-in">4/17/2020</div>
            </div>
            <div className="guests">
              <p className="guest">Guests</p>

              <select id="guests__select">
                <option value="1">1 Guest</option>
                <option value="2">2 Guest</option>
                <option value="3">3 Guest</option>
                <option value="4">4 Guest</option>
              </select>
            </div>
            <div className="price-breakdown">
              <div className="single-row">
                <p>$34 X 4 Night</p>
                <p>$136</p>
              </div>
              <div className="single-row">
                <p>Cleaning fee</p>
                <p>$10</p>
              </div>
              <div className="single-row">
                <p>Service fee</p>
                <p>$21</p>
              </div>
              <div className="single-row">
                <p>Total</p>
                <p>$167</p>
              </div>
            </div>
            <Button value="Reserve" />
            <p className="disclaimer">You won’t be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HotelDetails
