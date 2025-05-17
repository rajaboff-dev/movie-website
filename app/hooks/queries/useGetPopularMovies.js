import {useQuery} from "@tanstack/react-query";
import MovieService from "@/app/services/MovieService";

const useGetPopularMovies = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: MovieService.getPopularMovies,
  })
}

export default useGetPopularMovies