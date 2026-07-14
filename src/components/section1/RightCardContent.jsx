import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semiboldbold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-white leading-relaxed mb-14 text-shadow-2xs'>{props.intro}</p>
                
                <div className='flex justify-between'> 
                    <button className='bg-blue-600 font-semibold text-white px-7 py-3 rounded-full'>{props.tag}</button>
                     <button className='bg-blue-600 font-semibold text-white px-7 py-3 rounded-full'><MoveRight size={18} color="#fff" strokeWidth={1.75} /></button>

                </div>
            </div>
            
        </div>
  )
}

export default RightCardContent