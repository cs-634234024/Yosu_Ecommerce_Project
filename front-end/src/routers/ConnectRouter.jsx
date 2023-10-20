import React, { useEffect, useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import { useAuthContext } from '../contexts'
import NavbarPrivate from '../components/navbar/NavbarPrivate'
import NavbarPublic from '../components/navbar/NavbarPublic'
import Footer from '../components/footer/Footer'

const ConnectRouter = () => {
  const {token , authenticationLogin , authLogin} = useAuthContext()

  useEffect(()=>{
    authenticationLogin()
  },[token])

  return (
    <Routes>
      <Route path='/' element={
        <>
        {authLogin === true ? <NavbarPrivate/> : <NavbarPublic/>}
        <Home/>
        <Footer/>
        </>
      }/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    
  )
}

export {ConnectRouter} 