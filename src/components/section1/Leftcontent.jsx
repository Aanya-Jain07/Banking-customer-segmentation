import React from 'react'
import Arrow from './Arrow'
import Herotext from './Herotext'

const Leftcontent = () => {
  return (
    <div className='h-full w-[30%] flex flex-col justify-between  '>
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default Leftcontent