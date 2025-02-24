import { Action, State } from '@/types/v1'
import { create } from 'zustand'

const useAnimeTitle = create<State & Action>((set) => ({
  AnimeTitle: '',
  updateAnimeTitle: (AnimeTitle) => set(() => ({ AnimeTitle: AnimeTitle }))
}))

export default useAnimeTitle