'use client'
import CountryCard from '@/components/CountryCard'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { FetchCountryData } from '@/services/ServiceCountry'

export default function Home() {
  const [data, setdata] = useState(null)

  useEffect(() => {
    FetchCountryData().then((data) => {
      console.log(data[0].name.common)
      setdata(data)
    })
  }, [])

  return (
    <main>
      <Navbar />
      <div className="boitepays">{data && data.map((data: any) => <CountryCard country={data} />)}</div>
    </main>
  )
}
