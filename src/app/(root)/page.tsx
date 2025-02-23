/* eslint-disable @next/next/no-img-element */
'use client'

import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import useAnimeTitle from '@/hooks/useAnimeTitle'
import useDebounce from '@/hooks/useDebounce'
import { getSearchResults } from '@/modules/v1'
import { SearchResultsType } from '@/types/v1'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [data, setData] = useState<SearchResultsType | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 1500)
  const { AnimeTitle } = useAnimeTitle()

  useEffect(() => {
    if (AnimeTitle) {
      setSearchTerm(AnimeTitle)
    }
  }, [AnimeTitle])

  useEffect(() => {
    async function getData() {
      setLoading(true)
      setData(await getSearchResults(debouncedSearchTerm))
      setLoading(false)
    }
    getData()
  }, [debouncedSearchTerm])
  return (
    <>
      <div className="mx-auto max-w-sm max-sm:px-2 sm:my-2">
        <Input
          className="truncate"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          name="search"
          placeholder="Search anime..."
        />
      </div>
      {loading ? (
        <div className="mx-auto mb-2 grid max-w-5xl grid-cols-2 gap-2 max-sm:p-2 sm:grid-cols-3 sm:px-2 md:grid-cols-4 lg:grid-cols-5">
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <div className="flex flex-col space-y-2" key={index}>
                <Skeleton className="aspect-[2/3] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="w-full" />
                </div>
              </div>
            ))}
        </div>
      ) : data?.data && data?.data.length > 0 ? (
        <div className="mx-auto mb-2 grid max-w-5xl grid-cols-2 gap-2 max-sm:p-2 sm:grid-cols-3 sm:px-2 md:grid-cols-4 lg:grid-cols-5">
          {data?.data.slice(0, 20).map((item, index) => (
            <div className="flex flex-col space-y-2" key={index}>
              <Link href={item.url} target="_blank">
                <img
                  src={item.images.jpg.large_image_url}
                  alt={item.title}
                  className="aspect-[2/3] w-full rounded-xl"
                />
              </Link>
              <div className="space-y-2">
                <div className="w-full truncate text-sm">
                  <Link href={item.url} target="_blank">
                    {item.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-1 text-center">No results found</div>
      )}
    </>
  )
}
