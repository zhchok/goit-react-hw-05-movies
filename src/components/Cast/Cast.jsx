import { getMovieCredits, IMG_URL } from "api";
import { Box } from "components/Box/box";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Cast = () => {
	const { movieId } = useParams();
	const [credits, setCredits] = useState([]);

	useEffect(() => {
		getMovieCredits(movieId).then(data => {
			setCredits(data);
		});
	}, [movieId]);

	return (
		<Box>
			<ul>
				{credits.map(actor => (
					<li key={actor.cast_id}>
						{actor.profile_path ? (
							<img width="120" src={IMG_URL + actor.profile_path} alt="Actor" />
						) : (
							<img width="120" src="https://cdn-icons-png.flaticon.com/512/25/25333.png" alt="Actor" />
						)}

						<p> {actor.name}</p>
						<span>Character: {actor.character}</span>
					</li>
				))}
			</ul>
		</Box>
	);
};

Cast.propTypes = {
	credits: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			profile_path: PropTypes.string.isRequired,
			original_name: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			character: PropTypes.string.isRequired,
		}),
	),
};

export default Cast;
