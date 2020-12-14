import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {users.map(u => <User key={u.id}
                                      user={u}
                                      followingInProgress={props.followingInProgress}
                                      follow={props.follow}
                                      unFollow={props.unFollow}
                    />
                )}
            </div>

        </div>
    );
}


export default Users;