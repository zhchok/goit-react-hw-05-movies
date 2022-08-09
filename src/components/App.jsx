import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Base1/GlobalStyle";
import { Box } from "./Box/box";
import { lazy, Suspense } from "react";
import { Navigation } from "./Navigation/Navigation";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));

export const App = () => {
	return (
		<Box m="0 auto" width="1200px">
			<Navigation />
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:movieId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="*" element={<Home />} />
				</Routes>
			</Suspense>
			<GlobalStyle />
		</Box>
	);
};
