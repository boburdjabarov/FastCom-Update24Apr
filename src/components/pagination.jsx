import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const Pagination = (props) => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemsCount / pageSize); //Math ceil is needed since we need integers
    if (pageCount === 1) return null; // shows the quantity of pages, so if only one page, the page icon will dissapear
    const pages = _.range(1, pageCount + 1);
    //   console.log(pages);

    //   console.log(pageCount);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
