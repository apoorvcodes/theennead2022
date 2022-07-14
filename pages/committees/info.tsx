import React from 'react'
import Info from '../../components/Info'
import Nav from '../../components/navbar'
import Footer from '../../components/Footer'
const info = () => {
  return (
    <div className='bg-mainbg min-h-screen'>
        <Nav/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default info