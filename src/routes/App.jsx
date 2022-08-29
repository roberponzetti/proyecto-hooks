import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from '../containers/Checkout'
import Home from '../containers/Home'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'
import AppProvider from '../context/AppContext'


const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout/>} />
            <Route exact path="/checkout/information" element={<Information/>} />
            <Route exact path="/checkout/payment" element={<Payment/>} />
            <Route exact path="/checkout/success" element={<Success/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App