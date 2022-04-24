import React from "react";

const Bookmarks = (props) => {
    let classes = "bi bi-bookmark-star";
    //   console.log(classes);
    if (props.bookmark) classes += "-fill";
    return (
        <i
            onClick={props.onClick}
            style={{ cursor: "pointer" }}
            className={classes}
            aria-hidden="true"
        />
    );
};

export default Bookmarks;
