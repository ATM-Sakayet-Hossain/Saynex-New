import React from 'react'
import Chatlist from '../components/Chatlist'

const Home = () => {
  return (
    <div className='pl-27 h-screen w-full bg-gray-100'>
      <h1>Welcome to the Chat App</h1>
      <Chatlist />
    </div>
  )
}

export default Home