import { Formik } from "formik";
import { SearchButton, SearchInput, SearchForm } from "./SearchBox.styled";
import PropTypes from "prop-types";

export const SearchBox = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	};
	return (
		<>
			<Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
				<SearchForm>
					<SearchInput type="search" name="query" autoComplete="off" autoFocus placeholder="Search movies" />
					<SearchButton type="submit"></SearchButton>
				</SearchForm>
			</Formik>
		</>
	);
};

SearchBox.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
