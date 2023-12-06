'use client'
import { useEffect, useState } from 'react'
import Navbar2 from '@/components/Navbar2'
import { FetchDetailsCountryData } from '@/services/ServiceDetails'
import { Country } from '../Types&Utilities/TypeCountry'

export default function Home() {
  const [data, setData] = useState<Country[]>([])
  const languages = Object.keys(data[0]?.name.nativeName || {})
  const curren = Object.keys(data[0]?.currencies || {})
  const jsp = Object.keys(data[0]?.demonyms || {})

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search)
    const ccn3: any = urlParam.get('ccn3')
    FetchDetailsCountryData(ccn3).then((data) => {
      setData(data)
      console.log(data)
    })
  }, [])
  const bordure = data[0]?.borders?.join(', ')
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
      <div>
        <div className="basicnames">
          <h2>Noms</h2>
          <div>Nom commun: {data[0]?.name.common}</div>
          <div>Nom official: {data[0]?.name.official}</div>
          <h3>Noms Natifs:</h3>
        </div>
        {languages.map((language, i) => (
          <div key={i} className="basicnames">
            <div>{data[0]?.name.nativeName[language].common}</div>
            <div>{data[0]?.name.nativeName[language].official}</div>
          </div>
        ))}
      </div>
      <div className="tld">
        <h3>tld:</h3>
        {data[0]?.tld}
      </div>
      <div className="geographicall">
        <h2>Données Géographiques</h2>
        <h3>Lattitude et longitude: </h3>
        {data[0]?.latlng[0]}, {data[0]?.latlng[1]}
        <h3>Superficie</h3>
        {data[0]?.area} km²
        <h3>pays en bordure</h3>
        <div>{bordure}</div>
        <h3>regions et sous régions</h3>
        {data[0]?.region} ,{data[0]?.subregion}
      </div>
      <div className="poli">
        <h2>Données politiques et administratives</h2>
        <h3>Capitale</h3>
        <>{data[0]?.capital}</>
        <h3>Indépendant ?</h3>
        <>{data[0]?.independent ? 'OUI' : 'NON'}</>
        <h3>membre de l'UN ?</h3>
        <>{data[0]?.unMember ? 'OUI' : 'NON'}</>
      </div>
      <div className="eco">
        <h2>Données économiques et démographiques</h2>
        <h3>nombre d'habitants</h3>
        <>{data[0]?.population} habitants</>
        <h3>devises</h3>
        <>
          {curren.map((curren, i) => (
            <div key={i} className="currencies">
              <div>{data[0]?.currencies[curren].name}</div>
              <div>{data[0]?.currencies[curren].symbol}</div>
            </div>
          ))}
        </>
        <div>
          {data[0]?.gini ? (
            Object.keys(data[0]?.gini).map((key: any) => (
              <div key={key}>
                {data[0]?.gini[key] !== undefined ? (
                  <p>
                    Coefficient GINI ({key}) : {data[0]?.gini[key]}
                  </p>
                ) : (
                  <p>Coefficient GINI ({key}) : aucun</p>
                )}
              </div>
            ))
          ) : (
            <p>Coefficient GINI : aucun</p>
          )}
        </div>
      </div>
      <div className="eco">
        <h2>Données Culturelles</h2>
        <p>
          {data[0]?.languages ? (
            Object.keys(data[0]?.languages).map((key: any) => (
              <div key={key}>
                {data[0]?.languages[key] !== undefined ? (
                  <p>
                    ({key}) : {data[0]?.languages[key]}
                  </p>
                ) : (
                  <p>({key}) : aucun</p>
                )}
              </div>
            ))
          ) : (
            <p>language : aucun</p>
          )}
        </p>
        <h3>les gentilés du pays</h3>
        <p>
          {jsp.map((jsp, i) => (
            <div key={i} className="basicnames">
              <div>{data[0]?.demonyms[jsp].m}</div>
              <div>{data[0]?.demonyms[jsp].f}</div>
            </div>
          ))}
        </p>
      </div>
    </main>
  )
}
