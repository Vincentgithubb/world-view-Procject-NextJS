import { useEffect } from 'react'
import Input from 'postcss/lib/input'

type navProps = {
  handleSearch: any
}

const Navbar = ({ handleSearch }: navProps) => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        World View
      </a>
      <input className="search" type="text" placeholder="Search" onChange={handleSearch} />
    </div>
  )
}
export default Navbar
