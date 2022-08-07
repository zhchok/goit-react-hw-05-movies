import { useEffect } from "react";
import { getTrendMovies } from "api";
import { useState } from "react";
import { MovieLink } from "./Home.styled.js";
import { Box } from "components/box/box.js";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getTrendMovies().then(setMovies);
	}, []);
	return (
		<Box as="main">
			<h2>Trending today</h2>
			<ul>
				{movies.map(({ title, id }) => (
					<li key={id}>
						<MovieLink to={`movies/${id}`}>{title}</MovieLink>
					</li>
				))}
			</ul>
		</Box>
	);
};

export default Home;
