import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

export default function Nov17Header() {
  return (
    <div>
      <header>
        <a href='/'>Logo</a>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/inner'>inner</NavLink></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
