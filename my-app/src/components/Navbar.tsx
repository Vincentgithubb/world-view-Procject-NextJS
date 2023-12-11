// Navbar.tsx

import React from 'react'

type NavProps = {
  handleSearch: any
  handleContinentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Navbar = ({ handleSearch, handleContinentChange }: NavProps) => {
  return (
    <>
      <div className="topnav">
        <div className="frise"></div>
        <a className="active" href="/">
          World View
        </a>
        <input className="search" type="text" placeholder="Search" onChange={handleSearch} />
        <select onChange={handleContinentChange}>
          <option value="">Tous les Continents</option>
          <option value="Africa">Afrique</option>
          <option value="Asia">Asie</option>
          <option value="Europe">Europe</option>
          <option value="North America">Amérique du nord</option>
          <option value="South America">Amérique du sud</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </>
  )
}

export default Navbar
