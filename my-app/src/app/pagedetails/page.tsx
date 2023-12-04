'use client'
import { useEffect, useState } from 'react'
import Navbar2 from '@/components/Navbar2'
import { FetchDetailsCountryData } from '@/services/ServiceDetails'
import { Country } from '../Types&Utilities/TypeCountry'

export default function Home() {
  const [data, setData] = useState<Country[]>([])
  const languages = Object.keys(data[0]?.name.nativeName || {})

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search)
    const name: any = urlParam.get('name')
    FetchDetailsCountryData(name).then((data) => {
      setData(data)
    })
  }, [])

  return (
    <main>
      <Navbar2 />
      <div className="namef">
        <div className="Flagdetails">
          <img src={data[0]?.flags.svg} alt={data[0]?.name.common} />
        </div>
        <div className="Nomdetails">
          <h1>{data[0]?.name.common}</h1>
        </div>
      </div>
      <div className="basicnames">
        {languages.map((language, i) => (
          <p key={i}>
            {data[0]?.name.common}
            {data[0]?.name.nativeName[language].official}
          </p>
        ))}
      </div>
    </main>
  )
}
