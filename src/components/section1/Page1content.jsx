import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6 flex flex-col md:flex-row gap-5 md:gap-5 items-center min-h-[90vh] md:h-[90vh] px-6 md:px-18'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
