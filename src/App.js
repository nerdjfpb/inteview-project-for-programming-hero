import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import LoginPage from './pages/login/Login.page'
import SignUp from './pages/signup/signup.page'
import SearchPage from './pages/search/search.page'
import SingleSearch from './pages/singleSearch/singleSearch.page'
import HotelDetails from './pages/hotelDetails/HotelDetails.page'

import './App.css'
import Welcome from './pages/welcome/Welcome.page'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/single-search">
          <SingleSearch />
        </Route>
        <Route path="/hotel-details">
          <HotelDetails />
        </Route>
        <Route path="/hotel-details">
          <HotelDetails />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </>
  )
}

export default App
