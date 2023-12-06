import { api } from './ServiceHelper'

export const FetchDetailsCountryData = async (ccn3: number) => {
  return await api.get('/v3.1/alpha/' + `${ccn3}`).then((response) => response.data)
}
