import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
export const IMG_URL = "https://image.tmdb.org/t/p/w200/";

export const getTrendMovies = async () => {
	const response = await axios.get("trending/all/day?api_key=97f9d78f20e5fcb9506a240d7e33de31");
	return response.data.results;
};

export const getMovieDetails = async movieId => {
	const response = await axios.get(`movie/${movieId}?api_key=97f9d78f20e5fcb9506a240d7e33de31&language=en-US`);
	return response.data;
};

export const getMovieCredits = async movieId => {
	const response = await axios.get(`movie/${movieId}/credits?api_key=97f9d78f20e5fcb9506a240d7e33de31&language=en-US`);
	return response.data.cast;
};

export const getMovieReviews = async movieId => {
	const response = await axios.get(
		`movie/${movieId}/reviews?api_key=97f9d78f20e5fcb9506a240d7e33de31&language=en-US&page=1`,
	);

	return response.data;
};

export const getMovies = async query => {
	const response = await axios.get(
		`/search/movie?api_key=97f9d78f20e5fcb9506a240d7e33de31&query=${query}&language=en-US&page=1&include_adult=false`,
	);

	return response.data.results;
};
