import React from 'react'
import { Link } from 'react-router-dom'

import FormInput from '../../components/formInput/FormInput'
import Button from '../../components/button/Button'
import FormSelect from '../../components/formSelect/formSelect'
import { valuesForCountrySelect } from '../../dummydata/signInData'

import './signup.css'

const SignUp = () => {
  const [country, setCountry] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber && country) {
      console.log(phoneNumber)
      console.log(country)
    }
  }

  return (
    <div className="container">
      <div className="sign-up">
        <h1 className="heading1">Sign Up</h1>
        <div className="login-form">
          <form method="post" onSubmit={formSubmit}>
            <FormSelect
              valuesForSelect={valuesForCountrySelect}
              defaultValue="DEFAULT"
              setValue={(e) => setCountry(e)}
              selectName="Country/Region"
            />
            <FormInput
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              setValue={(e) => setPhoneNumber(e)}
            />
            <p className="paragraph1">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
            <Button value="Contiune" />
          </form>
          <p className="paragraph1 center">
            Don’t have an account?{' '}
            <Link className="sign-up" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
