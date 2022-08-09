import { getMovieReviews } from "api";
import { Box } from "components/box1/box";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Reviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		getMovieReviews(movieId).then(data => {
			setReviews(data);
		});
	}, [movieId]);

	return (
		<Box>
			<ul>
				{reviews.results?.length > 0 ? (
					reviews.results?.map(review => (
						<li key={review.id}>
							<b>Author: {review.author}</b>
							<p>{review.content}</p>
						</li>
					))
				) : (
					<p>Reviews not found</p>
				)}
				{}
			</ul>
		</Box>
	);
};

Reviews.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			author: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
		}),
	),
};

export default Reviews;
