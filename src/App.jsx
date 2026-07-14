
import React from 'react'
import Section1 from './components/section1/Section1'



const App = () => {
  const users=[
    {
    
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Prime customers, that have access to bank credit and are satisfied with the current product.',
      tag:'Satisfied'
    },
    {
     
      img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Prime customers, that have access to bank credit are not credited with current service.',
      tag:'Underserved'
    },
    {
    
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'Customers with near prime and sub prime segments with no accesss to bank service.',
      tag:'Underbanked'
    }
  ]
  return (
    <>
    <div ><Section1 users={users}/></div>
    </>
    
  )
}

export default App
