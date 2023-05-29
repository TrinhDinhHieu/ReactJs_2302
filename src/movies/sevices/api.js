import axios from "axios";

const getDataPopularMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=vi&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

  const response = await axios.get(url);
  return (await response.status) === 200 ? await response.data : {};
};
const getDataMoviebyId = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
  const response = await axios.get(url);
  return (await response.status) === 200 ? await response.data : {};
};
export const api = {
  getDataPopularMovies,
  getDataMoviebyId
};
