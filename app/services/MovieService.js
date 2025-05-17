import API from "@/app/utils/api";

const MovieService = {
  async getPopularMovies() {
    const { data } = await API.get('/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc')
    return data
  },
  async getGenres() {
    const { data } = await API.get('/genre/tv/list')
    return data
  },
  async getRecentlyMovies() {
    const { data } = await API.get('/movie/now_playing?language=en-US&page=1')
    return data
  },
  async getRecentlySeries() {
    const { data } = await API.get('/tv/latest')
    return data
  },
  async getMovie({ queryKey: [, id] }) {
    console.log(id)
    const { data } = await API.get(`/movie/${id}`)
    return data
  },
  async getVideos({ queryKey: [, id] }) {
    const { data } = await API.get(`/movie/${id}/videos`)
    return data
  }
}


export default MovieService;