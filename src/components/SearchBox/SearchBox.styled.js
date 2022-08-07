import styled from "styled-components";
import { Field } from "formik";

export const SearchButton = styled.button`
	display: inline-block;
	background-color: transparent;
	width: 48px;
	height: 48px;
	border: 0;
	background-image: url("https://www.svgrepo.com/show/22184/search.svg");
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	:hover {
		opacity: 1;
	}
`;

export const SearchInput = styled(Field)`
	display: inline-block;
	width: 50%;
	font: inherit;
	font-size: 20px;
	border: none;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;
	border: 1px solid black;
	::placeholder {
		font: inherit;
		font-size: 18px;
	}
`;

export const SearchForm = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
`;
