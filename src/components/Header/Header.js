import React from 'react'
import './Header.css'
import logo from '../../assests/group-64.svg'

const Header = () => {
  return (
    <div className="flex justify-between p-3"style={{background:"#244D61"}}>
      <div className="navbar-start flex space-x-2">
        <img className="logo rounded-full w-10 h-10" src={logo} alt="logo" />
        <a className="site-title flex items-center justify-center" href='/'>Sotreus</a>
      </div>
      <div className='flex items-center gap-10 '>
        <div className='text-white'>About</div>
        <div className='text-white'>Feature</div>
        <div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Sign Up</button>
      </div>
      </div>
    </div>
  )
}

export default Header
