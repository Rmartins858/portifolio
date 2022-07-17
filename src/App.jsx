import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/abaut/About'
import Experice from './components/experience/Experience'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Depositions from './components/depositions/Depositions'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experice />
    <Services />
    <Portifolio />
    <Depositions />
    <Contacts />
    <Footer />
    </>
  )
}

export default App;