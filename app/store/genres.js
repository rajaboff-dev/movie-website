import {create} from "zustand/react";
import MovieService from "@/app/services/MovieService";

const useGenreStore = create((set, get) => ({
  genres: new Map(),
  isLoaded: false,
  fetchAllGenres: async () => {
    if(get().isLoaded) return
    try {
      const data = await MovieService.getGenres()
      const map = new Map(data?.genres?.map(genre => [genre.id, genre.name]))
      set({ genres: map, isLoaded: true })
    } catch (error) {
      console.error(error)
    }
  }
}))

export default useGenreStore