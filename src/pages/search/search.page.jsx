import React from 'react'
import { useHistory } from 'react-router-dom'

import FormSelect from '../../components/formSelect/formSelect'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'
import FormDateInput from '../../components/formDateInput/formDateInput'
import {
  valuesForLocationSelect,
  experiencesData,
  homesData,
} from '../../dummydata/searchPageData'

import './search.css'

const SearchPage = () => {
  let history = useHistory()
  const [location, setLocation] = React.useState('')
  const [adultNumber, setAdultNumber] = React.useState(2)
  const [childNumber, setChildNumber] = React.useState(2)
  const [babyNumber, setBabyNumber] = React.useState(2)

  const formSubmit = (e) => {
    e.preventDefault()
    if (location) {
      // console.log(location)
    }
  }

  const onSearch = () => {
    history.push('/single-search')
  }

  return (
    <div className="container">
      <section className="search-section">
        <div className="left-side">
          <h1 className="heading1">Where do you want to go</h1>
          <form action="/single-search" method="post" onSubmit={formSubmit}>
            <FormSelect
              valuesForSelect={valuesForLocationSelect}
              defaultValue="DEFAULT"
              setValue={(e) => setLocation(e)}
              selectName="Location"
            />
            <div className="dates">
              <div className="dates-flex-items">
                <FormDateInput />
              </div>
              <div className="dates-flex-items">
                <FormDateInput />
              </div>
            </div>
            <div className="guest-card">
              <div className="guest-card__header">
                <div className="guest-card__header-left">
                  <p className="submenu">Guests</p>
                  <div className="guest-card__heading">
                    {adultNumber} Adults, {childNumber} Child, {babyNumber}{' '}
                    Babies
                  </div>
                </div>
                <div className="guest-card__header-right">^</div>
              </div>
              <div className="guest-card__details">
                <div className="guest-card-details__person">
                  <div className="person-heading">Adults</div>
                  <div className="number">
                    <div
                      className="number-add"
                      onClick={() => setAdultNumber(adultNumber + 1)}
                    >
                      +
                    </div>
                    <div className="exact-number">{adultNumber}</div>
                    <div
                      className="number-minus"
                      onClick={() =>
                        adultNumber > 0
                          ? setAdultNumber(adultNumber - 1)
                          : undefined
                      }
                    >
                      -
                    </div>
                  </div>
                </div>
                <div className="guest-card-details__person">
                  <div className="person-heading">Child</div>
                  <div className="number">
                    <div
                      className="number-add"
                      onClick={() => setChildNumber(childNumber + 1)}
                    >
                      +
                    </div>
                    <div className="exact-number">{childNumber}</div>
                    <div
                      className="number-minus"
                      onClick={() =>
                        childNumber > 0
                          ? setChildNumber(childNumber - 1)
                          : undefined
                      }
                    >
                      -
                    </div>
                  </div>
                </div>
                <div className="guest-card-details__person">
                  <div className="person-heading">Adults</div>
                  <div className="number">
                    <div
                      className="number-add"
                      onClick={() => setBabyNumber(babyNumber + 1)}
                    >
                      +
                    </div>
                    <div className="exact-number">{babyNumber}</div>
                    <div
                      className="number-minus"
                      onClick={() =>
                        babyNumber > 0
                          ? setBabyNumber(babyNumber - 1)
                          : undefined
                      }
                    >
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button value="Search" onClickHandler={onSearch} />
          </form>
        </div>
        <div className="right-side">
          <div className="experience-section">
            <div className="experience-section__header">
              <h1 className="headingBeforeCards">Experiences</h1>
              <p className="see-all">See all ></p>
            </div>
            <div className="experience-cards">
              {experiencesData.map((experience) => (
                <Card key={experience.id} data={experience} width="25" />
              ))}
            </div>
          </div>
          <div className="home-section">
            <div className="experience-section__header">
              <h1 className="headingBeforeCards">Homes</h1>
              <p className="see-all">See all ></p>
            </div>
            <div className="home-cards">
              {homesData.map((home) => (
                <Card key={home.id} data={home} width="33.33" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchPage
