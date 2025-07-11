import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
    <div>
        <NavLink end={true} to='/admin' className={(isActive)=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "-bg-prmary/10 border-r-4 border-prmary"}`}>

            <img src={assets.home_icon} className=' min-w-4 w-5'/>
            <p className=' hidden md:inline-block'>Dashborad</p>
        </NavLink>
    </div>
  )
}

export default Sidebar