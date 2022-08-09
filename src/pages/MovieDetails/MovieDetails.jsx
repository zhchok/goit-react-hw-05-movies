import { getMovieDetails, IMG_URL } from "api";
import { Box } from "components/Box/box";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { AdditionalLink, BackBtn } from "./MovieDetails.styled.js";
import PropTypes from "prop-types";

const MovieDetails = () => {
	const { movieId } = useParams();
	const [details, setDetails] = useState([]);
	const location = useLocation();

	const { original_title, genres, overview, poster_path, release_date, vote_average } = details;

	useEffect(() => {
		getMovieDetails(movieId).then(data => {
			setDetails(data);
		});
		console.log(location.state?.from);
	}, [location.state?.from, movieId]);

	return (
		<Box>
			<BackBtn to={location.state?.from ?? "/"}> Go back</BackBtn>
			<div>
				<img src={IMG_URL + poster_path} alt="poster" />
				<h2>
					{original_title}({release_date?.slice(0, 4)})
				</h2>
				<p>User Score: {Math.round(vote_average * 10)}%</p>
				<h3>Overview</h3>
				<p>{overview}</p>
				<h3>Genres</h3>
				<p>{genres?.map(genre => genre.name).join(" ")}</p>
			</div>
			<div>
				<h2>Additional Information</h2>
				<AdditionalLink to="cast" state={{ from: location.state?.from ?? "/" }}>
					Cast
				</AdditionalLink>
				<AdditionalLink to="reviews" state={{ from: location.state?.from ?? "/" }}>
					Reviews
				</AdditionalLink>
			</div>
			<Outlet />
		</Box>
	);
};

MovieDetails.propTypes = {
	movieDetails: PropTypes.arrayOf(
		PropTypes.shape({
			original_title: PropTypes.string.isRequired,
			genres: PropTypes.string.isRequired,
			overview: PropTypes.string.isRequired,
			poster_path: PropTypes.string,
			release_date: PropTypes.number.isRequired,
			vote_average: PropTypes.number.isRequired,
		}),
	),
};

export default MovieDetails;
