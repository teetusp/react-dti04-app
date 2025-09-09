import React from 'react'
import NavBar from '../components/NavBar'
import HeaderCal from '../components/HeaderCal'
import square from './../assets/square.png'
import Footer from '../components/Footer'

export default function SquareCal() {
  return (
    <>
      <NavBar />
      <HeaderCal titleName="Square Calculator" imgName={square} headerColor={{textAlign:"center", color: " #004666ff"}} />
      <Footer emoji="😉😶" />
    </>
  )
}
