import React from "react";
import Qualities from "./qualities";
import Bookmarks from "./bookmarks";

const User = (props) => {
    const { user } = props;

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.profession.name}</td>
            <td>
                {user.qualities.map((qualities) => (
                    <Qualities
                        key={qualities._id}
                        color={qualities.color}
                        name={qualities.name}
                        id={qualities._id}
                    />
                ))}
            </td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmarks
                    bookmark={user.bookmark}
                    onClick={() => props.onToggleBookMark(user._id)}
                />
            </td>
            <td>
                <button
                    onClick={() => props.onDelete(user._id)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

// const User = {
//
// };

export default User;
