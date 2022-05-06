import React, { useEffect, useState } from "react";
import Users from "./components/users";

import api from "./api";

function App() {
    // const [users, setUsers] = useState(api.users.fetchAll());

    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                } else return user;
            })
        );
    };

    if (!users) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <Users
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
                users={users}
            />
        </div>
    );
}

export default App;
