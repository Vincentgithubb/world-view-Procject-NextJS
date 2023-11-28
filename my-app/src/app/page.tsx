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
      data.sort((a: any, b: any) => {
        if (a.name.common < b.name.common) {
          return -1
        } else if (a.name.common > b.name.common) {
          return 1
        }
        return 0
      })
      setdata(data) //bonjout
    })
  }, [])

  return (
    <main>
      <Navbar />
      <div className="boitepays">{data && data.map((data: any) => <CountryCard country={data} />)}</div>
    </main>
  )
}
