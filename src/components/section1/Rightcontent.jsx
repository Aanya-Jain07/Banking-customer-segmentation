import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div  id='right' className='h-full flex flex-nowrap gap-10 overflow-x-auto w-[70%] p-6' >
      {props.users.map(function(elem,idx){ 
          return <Rightcard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent