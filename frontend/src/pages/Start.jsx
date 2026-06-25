import React from 'react'
import {Link} from 'react-router-dom'
import mainlogo from '../img/mainlogo.png'
//import parking from '../img/parking.png'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://onnyx.in/wp-content/uploads/2026/06/Parking-Entry-Traffic-Control-Light.png)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='mix-blend-darken w-16 ml-8' src={mainlogo} alt='' />
            <div className= 'bg-white pb-7 py-4 px-4'>
                <h2 className='text-[30px] font-bold'>Get Started With Uber</h2>
                {/* <button className='w-full bg-black text-white py-3  rounded mt-5'>Continue</button> */}
                <Link className='flex items-center justify-center w-full bg-black text-white py-3  rounded-lg mt-5' to='/login'>
                    Continue
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Start
