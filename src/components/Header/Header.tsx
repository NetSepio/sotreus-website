import React from 'react'
import './Header.css'
import logo from '../../assests/group-64.svg'

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-start flex space-x-2">
        <img className="logo rounded-full w-10 h-10" src={logo} alt="logo" />
        <a className="site-title" href='/'>Sotreus</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary">Get started</button>
      </div>
    </div>
  )
}

export default Header
