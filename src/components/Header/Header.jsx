import React from 'react'
import './Header.css'
import logo from '../../assests/group-64.svg'

const Header = () => {
  return (
    <div className="navbar bg-[#AFE7F6] p-5">
      <div className="navbar-start flex space-x-2">
        <img className="logo rounded-full w-12 h-12" src={logo} alt="logo" />
        <a className="site-title" href='/'>Sotreus</a>
      </div>
      <div className="navbar-end">
        <button className="sign-in-button">Get started</button>
      </div>
    </div>
  )
}

export default Header
