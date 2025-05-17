import {useQuery} from "@tanstack/react-query";
import MovieService from "@/app/services/MovieService";

const getMovie = (id) => {
  return useQuery({
    queryKey: ['getMovie', id],
    queryFn: MovieService.getMovie
  });
}

export default getMovie;