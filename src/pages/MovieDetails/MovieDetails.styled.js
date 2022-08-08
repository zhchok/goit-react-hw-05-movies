import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdditionalLink = styled(NavLink)`
	display: block;
	padding: ${p => p.theme.space[2]}px;
	color: ${p => p.theme.colors.primary};
	:hover {
		color: ${p => p.theme.colors.secondary};
	}
	&.active {
		color: ${p => p.theme.colors.accent};
	}
`;

export const BackBtn = styled(Link)`
	display: block;
	text-align: center;
	width: 120px;
	padding: ${p => p.theme.space[3]}px;
	margin-bottom: ${p => p.theme.space[3]}px;
	margin-top: ${p => p.theme.space[3]}px;
	border: ${p => p.theme.borders.normal};
`;
