import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
    }

    return (
        <div>
            {/* Display fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel


// import React from 'react'

// const LocationSearchPanel = (props) => {
    
//     //sample array for loction
//     const locations =[
//         "09P Thinglao ka baas Madliya, Pipar City, Jodhpur, Rajasthan 342601",
//         "22A Khadavo ka baas Madliya, Pipar City, Jodhpur, Rajasthan 342601",
//         "11B kumaro ka baas Madliya, Pipar City, Jodhpur, Rajasthan 342601"

//     ]

//   return (
//         <div>
//             {/* Display fetched suggestions */}
//             {
//                locations.map(function(elem,idx){
//                     return<div key={idx} onClick={()=>{
//                         props.setVehiclePanel(true)
//                         props.setPanelOpen(false)
//                     }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                         <h4 className='font-medium'>{elem}</h4>
//                 </div>
//                }) 
//             }
//         </div>
//   )
// }

// export default LocationSearchPanel
