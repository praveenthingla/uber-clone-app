import React, {useRef, useState} from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import mainlogo from '../img/mainlogo.png'

function Home() {
  const [pickup, setPickup] = useState('')
  const [ destination, setDestination ] = useState('')
  const [ panelOpen, setPanelOpen ] = useState(false)
  const panelRef = useRef(null)  
  const panelCloseRef = useRef(null)

  const submitHandler = ()=>{
    e.preventDefault()

  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
        // opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
        // opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='mix-blend-darken w-16 absolute left-5 top-5' src={mainlogo} alt='' />
      <div className='h-screen w-screen'>
        {/* img for temporary use */}
        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='absolute flex flex-col justify-end w-full h-screen top-0'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
             setPanelOpen(false)
           }} className='absolute opacity-0 right-6 top-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}>
              <div className="line absolute h-16 w-1 top-[45%] -transalate-y-1/2 left-10 bg-gray-700 rounded-full"></div>
              <input 
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              placeholder="Add a pickup location" 
              />
              <input
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }} 
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              placeholder="Enter your destination" />
            </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
              <LocationSearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
