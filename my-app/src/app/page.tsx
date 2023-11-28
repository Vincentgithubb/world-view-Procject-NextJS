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
      console.log(data)
      setdata(data)
    })
  }, [])

  return (
    <main>
      <Navbar />
      <div>
        <div>
          <div className="w-[200px] h-[200px] shadow-md bg-fuchsia-700">
            <CountryCard flag={'bonjour'} nom={'test'} />
          </div>
        </div>
      </div>
    </main>
  )
}
