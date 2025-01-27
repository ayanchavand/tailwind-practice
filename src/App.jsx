import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    {/*Centering a div using flex*/}
    <div className='flex justify-center items-center h-screen'>
    <div className='text-center space-y-4'>
    <h1 className='bg-amber-200 text-8xl '>TITLE</h1>
    <h2 className='bg-amber-200 text-2xl'>SUBheading</h2>
    <button className='bg-amber-700 h-8 rounded outline-1 outline-amber-300 hover:bg-amber-400 w-16'>hii</button>
    </div>
    </div>
      
    </>
  )
}

export default App
