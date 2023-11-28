import Input from 'postcss'
import { useEffect } from 'react'

type countrycardProps = {
  nom: string
  flag: string
}

const CountryCard = ({ flag, nom }: countrycardProps) => {
  return (
    <div>
      <h1>{nom}</h1>
      {flag && <p>{flag}</p>}
    </div>
  )
}
export default CountryCard
