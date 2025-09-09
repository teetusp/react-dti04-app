import React from 'react'
import NavBar from '../components/NavBar'
import HeaderCal from '../components/HeaderCal'
import bmr from './../assets/bmr.png'
import Footer from '../components/Footer'

export default function BmrCal() {
  return (
    <>
      <NavBar />      
      <HeaderCal titleName="BMR Calculator" imgName={bmr} headerColor={{textAlign:"center", color: " #ff0000ff"}} />
      <Footer emoji="❤️" />
    </>
  )
}
