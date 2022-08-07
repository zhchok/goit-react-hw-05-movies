import { getMovies } from "api";
import { Box } from "components/box/box";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query");
	const location = useLocation();

	useEffect(() => {
		getMovies(query).then(movie => setMovies(movie));
	}, [query]);

	const handleSubmit = event => {
		event.preventDefault();
		const valueInput = event.currentTarget;
		const value = event.target.elements.query.value.toLowerCase();

		setSearchParams({ query: value });
		valueInput.reset();
	};

	const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(query?.toLowerCase()));

	return (
		<Box as="main">
			<SearchBox onSubmit={handleSubmit}></SearchBox>
			<ul>
				{visibleMovies &&
					visibleMovies.map(({ id, title }) => (
						<li key={id}>
							<Link to={`${id}`} state={{ from: location }}>
								{title}
							</Link>
						</li>
					))}
			</ul>
		</Box>
	);
};

Movies.propTypes = {
	movie: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		}),
	),
};

export default Movies;
