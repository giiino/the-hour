import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import './App.css'
import Footer from './common/footer'
import Header from './common/header'
import Login from './common/login'
import Register from './common/register'
import SideBar from './common/sidebar'
import About from './pages/about'
import Advertise from './pages/advertise'
import AllNews from './pages/allnews'
import ArticlePage from './pages/articlePage'
import Contact from './pages/contact'
import ErrorPage from './pages/error'
import Home from './pages/home'
import SearchPage from './pages/searchPage'
import store from './store'

function App() {
  let location = useLocation()
  return (
    <Provider store={store}>
      <Login />
      <Register />
      <SideBar />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/news' component={AllNews} />
          <Route path='/contact' component={Contact} />
          <Route path='/advertise' component={Advertise} />
          <Route path='/article/:id' component={ArticlePage} />
          <Route path='/search' component={SearchPage} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Provider>
  )
}
export default App
