import { api } from './ServiceHelper'

export const FetchDetailsCountryData = async (name: string) => {
  return await api.get('/v3.1/name/' + `${name}`).then((response) => response.data)
}
