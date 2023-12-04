import Link from 'next/link'
import Input from 'postcss'
import { useEffect } from 'react'

type countrycardProps = {
  country: any
}

const CountryCard = ({ country }: countrycardProps) => {
  return (
    <Link
      href={{
        pathname: '/pagedetails',
        query: {
          name: `${country.name.common}`
        }
      }}
    >
      <div className="card">
        <h1 className="name">{country.name.common}</h1>
        <img className="flag" src={country.flags.svg} />
      </div>
    </Link>
  )
}
export default CountryCard
