import { useEffect } from 'react'
import Input from 'postcss/lib/input'
import Link from 'next/link'

type navProps = {
  handleSearch: any
  handleContinentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Navbar = ({ handleSearch, handleContinentChange }: navProps) => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        World View
      </a>
      <input className="search" type="text" placeholder="Search" onChange={handleSearch} />
      <select onChange={handleContinentChange}>
        <option value="">tout les Continents</option>
        <option value="Africa">Afrique</option>
        <option value="Asia">Asie</option>
        <option value="Europe">Europe</option>
        <option value="North America">Amérique du nord</option>
        <option value="South America">Amérique du sud</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  )
}

export default Navbar
