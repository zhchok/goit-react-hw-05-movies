import { useEffect } from "react";
import { getTrendMovies } from "api";
import { useState } from "react";
import { MovieLink } from "./Home.styled.js";
import { Box } from "components/box1/box.js";
import { useLocation } from "react-router-dom";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const location = useLocation();

	useEffect(() => {
		getTrendMovies().then(setMovies);
	}, []);
	return (
		<Box as="main">
			<h2>Trending today</h2>
			<ul>
				{movies.map(({ title, id }) => (
					<li key={id}>
						<MovieLink to={`movies/${id}`} state={{ from: location }}>
							{title}
						</MovieLink>
					</li>
				))}
			</ul>
		</Box>
	);
};

export default Home;
