interface Name {
  common: string
  official: string
  nativeName: {
    fra: {
      official: string
      common: string
    }
  }
}

interface NativeNames {
  fra: {
    official: string
    common: string
  }
}

interface Currencies {
  XOF: {
    name: string
    symbol: string
  }
}

interface Idd {
  root: string
  suffixes: string[]
}

interface Demonyms {
  eng: {
    f: string
    m: string
  }
  fra: {
    f: string
    m: string
  }
}

interface Translations {
  ara: {
    official: string
    common: string
  }
  bre: {
    official: string
    common: string
  }
  // ... (other language translations)
}

interface Maps {
  googleMaps: string
  openStreetMaps: string
}

interface Flags {
  png: string
  svg: string
  alt: string
}

interface CoatOfArms {
  png: string
  svg: string
}

interface CapitalInfo {
  latlng: number[]
}

interface CountryType {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: { [key: string]: string }
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: { [key: string]: number }
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
}

export default CountryType
