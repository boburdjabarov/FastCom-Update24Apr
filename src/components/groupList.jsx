import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    // console.log(items.map(item));
    const isArray = Array.isArray(items);
    console.log(isArray);

    if (Array.isArray(items)) {
        return (
            <ul name="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "") // !!!!!!!!!!!!!!!!!!! //
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <ul name="list-group">
                {items.map((item) => (
                    <li
                        key={items._id}
                        className={
                            "list-group-item" +
                            (item === selectedItem ? " active" : "") // !!!!!!!!!!!!!!!!!!! //
                        }
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
