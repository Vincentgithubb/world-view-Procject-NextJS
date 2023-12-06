'use client'
import CountryCard from '@/components/CountryCard'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { FetchCountryData } from '@/services/ServiceCountry'
import { Country } from './Types&Utilities/TypeCountry'

export default function Home() {
  const [data, setdata] = useState<Country[]>()
  const [searchcountry, setSearchCountry] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('')

  useEffect(() => {
    FetchCountryData().then((data) => {
      data.sort((a: any, b: any) => {
        if (a.name.common < b.name.common) {
          return -1
        } else if (a.name.common > b.name.common) {
          return 1
        }
        return 0
      })
      setdata(data)
    })
  }, [])

  const handleSearch = (event: any) => {
    setSearchCountry(event.target.value)
  }

  const handleContinentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedContinent(event.target.value)
  }

  const filteredData =
    data &&
    data.filter(
      (country: any) =>
        country.name.common.toLowerCase().includes(searchcountry.toLowerCase()) &&
        (selectedContinent === '' || country.continents.includes(selectedContinent))
    )

  return (
    <main>
      <Navbar handleSearch={handleSearch} handleContinentChange={handleContinentChange} />{' '}
      <div className="boitepays">
        {filteredData &&
          filteredData.map((country: any) => <CountryCard key={country.name.common} country={country} />)}
      </div>
    </main>
  )
}
