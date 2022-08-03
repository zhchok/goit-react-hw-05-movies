import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";

export const App = () => {
	return (
		<Box>
			<Routes>
				<Route path="/" element={<div>Home</div>} />
				<Route path="/movies" element={<div>Movies</div>}>
					<Route path="/movies/:movieid" element={<div>MovieDetails</div>}>
						<Route path="movies/:movieId/cast" element={<div>CastDetails</div>} />
						<Route path="movies/:movieId/reviews" element={<div>Reviews</div>} />
					</Route>
				</Route>
			</Routes>
			<GlobalStyle />
		</Box>
	);
};
