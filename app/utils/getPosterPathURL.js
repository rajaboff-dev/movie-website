
const getPosterPathURL = (path, size='original') => {
  return `https://image.tmdb.org/t/p/${size}/${path}`
}

export default getPosterPathURL