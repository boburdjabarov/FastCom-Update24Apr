import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import User from "./user";
import Pagination from "./pagination";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";
import _ from "lodash";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;
    const [professions, setPropfession] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setPropfession(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        // console.log(item);
    };

    const handlePageChange = (pageIndex) => {
        // console.log(pageIndex);
        setCurrentPage(pageIndex);
    };

    // const isArray = Array.isArray(items);
    // console.log(isArray);

    // const paginate = (items, pageNumber, pageSize) => {
    //   const startIndex = (pageNumber - 1) * pageSize;
    //   return [...items].splice(startIndex, pageSize);
    // };

    const filteredUsers = selectedProf
        ? allUsers.filter((user) =>
              _.isEqual(
                  JSON.stringify(user.profession),
                  JSON.stringify(selectedProf)
              )
          )
        : allUsers;

    // console.log(filteredUsers);
    // const aa = [24, 5, 99];
    // const aaa = JSON.strinfigy(aa);
    // console.log(aaa);

    // ? allUsers.filter((user) => user.profession === selectedProf) || allUsers.filter((user) => user.profession !== selectedProf)
    // : allUsers;

    // const isArray = Array.isArray(filteredUsers);
    // console.log(isArray);

    const count = filteredUsers.length;

    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };
    // console.log(userCrop);

    // console.log(handleProfessionSelect());

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        {" "}
                        Очистить
                    </button>
                </div>
            )}

            <div className="d-flex flex-column">
                <SearchStatus length={count} />
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
                                <User {...rest} {...user} key={user._id} />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    // users: PropTypes.array,
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Users;
