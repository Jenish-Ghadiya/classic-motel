import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../common/header'
import Footer from '../../common/footer'
import BackToTop from '../../components/backtotop'

export default function DefaultLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}
