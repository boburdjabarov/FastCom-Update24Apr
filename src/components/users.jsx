import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import User from "./user";
import Pagination from "./pagination";

const Users = (props) => {
    const { users, onDelete, onToggleBookMark } = props;
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log(pageIndex);
        setCurrentPage(pageIndex);
    };

    // const paginate = (items, pageNumber, pageSize) => {
    //   const startIndex = (pageNumber - 1) * pageSize;
    //   return [...items].splice(startIndex, pageSize);
    // };

    const userCrop = paginate(users, currentPage, pageSize);

    // console.log(userCrop);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Встретился , раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                onDelete={onDelete}
                                onToggleBookMark={onToggleBookMark}
                                user={user}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            {/* 1,2,3 */}
            {/* users divided by pageSize */}
        </>
    );
};

export default Users;
