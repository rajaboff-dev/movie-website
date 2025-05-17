import {useQuery} from "@tanstack/react-query";
import MovieService from "@/app/services/MovieService";

const useGetRecentlyMovies = () => {
  return useQuery({
    queryKey: ['recentlyMovies'],
    queryFn: MovieService.getRecentlyMovies
  })
}

export default useGetRecentlyMovies