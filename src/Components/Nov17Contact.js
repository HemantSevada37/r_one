import React from 'react'
import Nov17Header from './Nov17Header'
import { NavLink, Outlet } from 'react-router-dom'

export default function Nov17Contact() {
  return (
    <div>
      {/* <li><NavLink to='/'>Home</NavLink></li> */}
        <Nov17Header/>
      showing contect componenet
      <li><NavLink to='child'>Nested Child</NavLink></li> 
      <Outlet/>
    </div>
  )
}
