import React from 'react'
import mainlogo from '../img/mainlogo.png'

function Home() {
  return (
    <div className='h-screen relative'>
      <img className='mix-blend-darken w-16 absolute left-5 top-5' src={mainlogo} alt='' />
      <div className='h-screen w-screen'>
        {/* img for temporary use */}
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='absolute w-full bottom-0 bg-white p-5'>
        <h4 className='text-3xl font-semibold'>Find a trip</h4>
        <form>
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Add a pickup location" />
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder="Enter your destination" />
        </form>
      </div>
    </div>
  )
}

export default Home
