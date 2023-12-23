import React from 'react'
import {NavLink} from 'react-router-dom'
 import './App.css'
 import './Style.css'

export const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <NavLink to='/' className='navone'>Home</NavLink>
            <NavLink to='/student' className='navone'>Student</NavLink>
            <NavLink to='/contact' className='navone'>Contact</NavLink>

        </nav>
    </div>
  )
}
