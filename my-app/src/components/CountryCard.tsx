'use client'
import Link from 'next/link'
import Input from 'postcss'
import { useEffect, useState } from 'react'

type countrycardProps = {
  country: any
}

const CountryCard = ({ country }: countrycardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={{
          pathname: '/pagedetails',
          query: {
            ccn3: `${country.ccn3}`
          }
        }}
      >
        <div className="card">
          <h1 className="name">{country.name.common}</h1>
          <img className="flag" src={country.flags.svg} />
          {isHovered && <p>Details</p>}
        </div>
      </Link>
    </div>
  )
}
export default CountryCard
