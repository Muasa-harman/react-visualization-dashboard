import React from 'react'
import "./Dashboard.scss"
import Navbar from '../../components/Nav/Navbar'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
// import Left from '../../components/left/Left'
import Right from '../../components/right/Right'

function Dashboard() {
  return (
    <div className='dashboard'>
         <Navbar/>
         <div className="components">
          <FeaturedInfo/>
          {/* <Left/> */}
          <Right/> 
         <div className="counties">
          
         </div>
         </div>
        
    </div>
  )
}

export default Dashboard