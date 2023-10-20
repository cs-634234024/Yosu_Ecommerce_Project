import React from 'react'
import { Link } from 'react-router-dom'

const NavbarPublic = () => {
  return (
    <div className='container mx-auto'>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl font-bold">Yosu Brand</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
      <li>
        <details>
          <summary className='uppercase font-bold '>
            Get start
          </summary>
          <ul className="p-2 bg-base-100">
            <li><Link to={'/signin'} className='font-bold'>Sign In</Link></li>
            <li><Link to={'/signup'} className='font-bold'>Sign Up</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </div>
    
  )
}

export default NavbarPublic