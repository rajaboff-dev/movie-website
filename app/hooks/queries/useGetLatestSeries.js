import {useQuery} from "@tanstack/react-query";
import MovieService from "@/app/services/MovieService";


const useGetLatestSeries = () => {
  return useQuery({
    queryKey: ['latestSeries'],
    queryFn: MovieService.getRecentlySeries
  })
}

export default useGetLatestSeries;