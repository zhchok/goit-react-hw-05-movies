import { Box } from "components/box/box";

import { NavItem } from "./Navigation.styled";

export const Navigation = () => {
	return (
		<Box as="header" p={4} borderBottom="1px solid black">
			<Box as="nav" display="flex">
				<NavItem to="">Home</NavItem>
				<NavItem to="/movies">Movies</NavItem>
			</Box>
		</Box>
	);
};
