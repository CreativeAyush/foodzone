import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body  from '../components/Body'
import Carausal from '../components/Carausal'


export default function Home() {
  return (
    <>
        <Navbar/>
        <Carausal/>
        <div className='m-3'>
        <Body/>
        <Body/>
        </div>
        <Footer/>
        
    </>
  )
}
