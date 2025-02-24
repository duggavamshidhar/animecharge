export type getSearchResultsType = {
  pagination: object
  data:
    | [
        {
          mal_id: number
          url: string
          images: {
            jpg: {
              image_url: string
              small_image_url: string
              large_image_url: string
            }
          }
          title: string
          title_english: string
          type: string
          episodes: number
          status: string
          airing: boolean
          synopsis: string
          season: string
          year: number
        }
      ]
    | []
}

export type SearchResultsType = getSearchResultsType

export type getRandomAnimeType = {
  data: {
    mal_id: number
    url: string
    images: {
      jpg: {
        image_url: string
        small_image_url: string
        large_image_url: string
      }
    }
    title: string
    title_english: string
    type: string
    episodes: number
    status: string
    airing: boolean
    synopsis: string
    season: string
    year: number
  }
}

export type State = {
  AnimeTitle: string
}
export type Action = {
  updateAnimeTitle: (firstName: State['AnimeTitle']) => void
}
