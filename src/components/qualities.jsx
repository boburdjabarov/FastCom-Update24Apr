import React from "react";
import PropTypes from "prop-types";

const Qualities = (props) => {
    const { color, name, _id } = props;

    return (
        <span className={"badge rounded-pill m-1 bg-" + color} key={_id}>
            {name}
        </span>
    );
};

Qualities.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};
export default Qualities;
