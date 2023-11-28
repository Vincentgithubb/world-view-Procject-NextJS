import Input from 'postcss'
import { useEffect } from 'react'

type countrycardProps = {
  country: any
}

const CountryCard = ({ country }: countrycardProps) => {
  return (
    <div className="card">
      <h1 className="name">{country.name.common}</h1>
      <img className="flag" src={country.flags.svg} />
    </div>
  )
}
export default CountryCard
