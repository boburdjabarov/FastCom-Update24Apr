import React from "react";

const Qualities = (props) => {
    const { color, name, _id } = props;

    return <span className={"badge rounded-pill m-1 bg-" + color}>{name}</span>;
};

export default Qualities;
