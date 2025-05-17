import {useQuery} from "@tanstack/react-query";
import MovieService from "@/app/services/MovieService";

const useGetVideos = (id) => {
  return useQuery({
    queryKey: ['getVideos', id],
    queryFn: MovieService.getVideos
  });
}

export default useGetVideos;