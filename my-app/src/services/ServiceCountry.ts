import { api } from './ServiceHelper'

export const FetchCountryData = async () => {
  return await api.get('/v3.1/all').then((response) => response.data)
}
