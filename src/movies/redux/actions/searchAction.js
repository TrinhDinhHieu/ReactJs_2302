export const SEARCH_BY_KEYWORK = "SEARCH_BY_KEYWORK";
export const searchMovies = (keywork) => ({
  type: SEARCH_BY_KEYWORK,
  keywork
});

export const START_SEARCH_MOVIE = "START_SEARCH_MOVIE ";
export const statrMovie = (loading) => ({
  type: START_SEARCH_MOVIE,
  loading
});

export const SEARCH_MOVIE_SUCCES = "SEARCH_MOVIE_SUCCES";
export const searchMovieSucces = (movies) => ({
  type: SEARCH_MOVIE_SUCCES,
  movies
});
export const SEARCH_MOVIE_FAIL = "SEARCH_MOVIE_FAIL";
export const searchMovieFail = (errors) => ({
  type: SEARCH_MOVIE_FAIL,
  errors
});
