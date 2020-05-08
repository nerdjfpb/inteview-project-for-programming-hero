import Experience1 from './imagesForExperiences/1.png'
import Experience2 from './imagesForExperiences/2.png'
import Experience3 from './imagesForExperiences/3.png'
import Experience4 from './imagesForExperiences/4.png'

import Home1 from './imagesForHomes/1.png'
import Home2 from './imagesForHomes/2.png'
import Home3 from './imagesForHomes/3.png'

export const valuesForLocationSelect = [
  {
    id: 1,
    value: 'US',
    name: 'UNITED STATES',
  },
  {
    id: 2,
    value: 'BD',
    name: 'BANGLADESH',
  },
  {
    id: 3,
    value: 'IND',
    name: 'INDIA',
  },
]

export const experiencesData = [
  {
    id: 1,
    title: "Discover the city's party scene",
    category: 'Nightlife · New York',
    imgUrl: Experience1,
    price: 35,
    rating: 5,
    ratedby: 64,
  },
  {
    id: 2,
    title: 'Tour with an Enthusiastic Local!',
    category: 'Entertainment · Vancouver',
    imgUrl: Experience2,
    price: 3,
    rating: 5,
    ratedby: 1,
  },
  {
    id: 3,
    title: 'Must Have L.A. Pictures!',
    category: 'photo class · Los Angeles',
    imgUrl: Experience3,
    price: 39,
    rating: 5,
    ratedby: 179,
  },
  {
    id: 4,
    title: 'Retro Photoshoot in NYC',
    category: 'photography · New York',
    imgUrl: Experience4,
    price: 49,
    rating: 5,
    ratedby: 72,
  },
]

export const homesData = [
  {
    id: 1,
    title: 'Unique Cob Cottage',
    category: 'Nightlife · New York',
    imgUrl: Home1,
    price: 128,
    rating: 5,
    ratedby: 284,
    superhost: 'superhost',
  },
  {
    id: 2,
    title: 'The Joshua Tree House',
    category: 'Nightlife · New York',
    imgUrl: Home2,
    price: 250,
    rating: 5,
    ratedby: 269,
    superhost: 'superhost',
  },
  {
    id: 3,
    title: "A Pirate's Life For Me - Houseboat!",
    category: 'Nightlife · New York',
    imgUrl: Home3,
    price: 209,
    rating: 5,
    ratedby: 140,
  },
]
