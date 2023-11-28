import { useEffect } from 'react'
import Input from 'postcss/lib/input'

const Navbar = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        World View
      </a>
      <input className="search" type="text" placeholder="Search" />
    </div>
  )
}
export default Navbar
