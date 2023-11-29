'use client'
import CountryCard from '@/components/CountryCard'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { FetchCountryData } from '@/services/ServiceCountry'
import { FetchDetailsCountryData } from '@/services/ServiceDetails'
import CountryType from '../Types&Utilities/TypeCountry'
import Link from 'next/link'

export default function Home() {
  const [data, setdata] = useState<CountryType[]>()
  const [searchcountry, setSearchCountry] = useState('')

  useEffect(() => {
    FetchCountryData().then((data) => {
      data.sort((a: any, b: any) => {})
      setdata(data)
    })
  }, [])

  const handleSearch = (event: any) => {
    setSearchCountry(event.target.value)
  }

  const filteredData =
    data && data.filter((country: any) => country.name.common.toLowerCase().includes(searchcountry.toLowerCase()))

  return (
    <main>
      <Navbar handleSearch={handleSearch} />
    </main>
  )
}
