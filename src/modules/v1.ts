import { getRandomAnimeType, getSearchResultsType } from '@/types/v1'

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)
  return response.json()
}

export async function getSearchResults(query: string) {
  return await fetchData<getSearchResultsType>(`https://api.jikan.moe/v4/anime?sfw=true&q=${query}`)
}

export async function getRandomAnime(): Promise<getRandomAnimeType> {
  return await fetchData<getRandomAnimeType>(`https://api.jikan.moe/v4/random/anime?sfw=true`)
}
