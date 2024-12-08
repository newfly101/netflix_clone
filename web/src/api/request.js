const requests = {
    fetchNowPlaying: `movie/now_playing`,
    fetchMovieDetail: (id) => `movie/${id}`,
    fetchNetflixOriginals: `/discover/tv?with_networks=213`,
    fetchTrending: `/trending/all/week`,
    fetchTopRated: `/movie/top_rated`,
    fetchActionMovies: `/discover/movie?with_genres=28`,
    fetchComedyMovies: `/discover/movie?with_genres=35`,
    fetchHorrorMovies: `/discover/movie?with_genres=27`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749`,
    fetchDocumentaries: `/discover/movie?with_genres=99`,
    fetchSearchMovies: (searchTerm) => `/search/multi?include_adult=false&query=${searchTerm}`,
}

export default requests;