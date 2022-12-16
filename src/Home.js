import React from 'react'
import Navbar from './component/Navbar'

const Home = () => {
  return (
    <div className="bg-hero bg-center bg-cover h-screen">
      <Navbar />
      <div className="m-8 text-center text-5xl text-white ">
      <h1 className="justify-center">DLB Photography</h1>
      <p className="text-2xl">I like taking pictures</p>
      </div>
    </div>
  )
}

export default Home