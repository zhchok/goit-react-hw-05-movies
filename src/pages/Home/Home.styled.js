import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
	display: block;
	padding: ${p => p.theme.space[2]}px;
	color: ${p => p.theme.colors.text};
	:hover {
		color: ${p => p.theme.colors.primary};
	}
`;
