import React from 'react'
import Banner from '../components/banner/Banner'
import MainMenu from '../components/menu/MainMenu'
import CardProduct from '../components/card/CardProduct'

const Home = () => {
  return (
    <div className='container mx-auto '>
      <Banner/>
    <div className='grid grid-cols-6 mt-3 gap-3'>
      <div className='col-span-2'>
          <MainMenu/>
      </div>
      <div className='col-span-4 '>
        <div className="grid grid-cols-3 p-3 gap-2 border border-gray-300 rounded-md">
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home