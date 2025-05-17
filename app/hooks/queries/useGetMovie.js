import {useQuery} from "@tanstack/react-query";
import MovieService from "@/app/services/MovieService";

const useGetMovie = (id) => {
  return useQuery({
    queryKey: ['getMovie', id],
    queryFn: MovieService.getMovie
  });
}

export default useGetMovie;