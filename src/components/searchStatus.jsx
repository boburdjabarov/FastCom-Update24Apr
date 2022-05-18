import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    if (length > 3) {
        return (
            <span className="badge bg-primary ">
                `{length} people gonna party with you today`
            </span>
        );
    } else if (length !== 0 && length <= 3) {
        return (
            <span className="badge bg-primary ">
                `Ooops you are unlucky, only {length} people gonna party with
                you today`
            </span>
        );
    } else {
        return (
            <span className="badge bg-danger">
                `Nobody wanna party with you`
            </span>
        );
    }
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
