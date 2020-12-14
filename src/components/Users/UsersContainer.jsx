import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../Common/Preloader/preloader';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFollowingInProgress, getIsFetching, getUsersSuperSelector
} from "../../redux/users-selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
      this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}

export default compose(
    //WithAuthRedirect,
    connect(mapStateToProps,{follow,unFollow,setCurrentPage,toggleFollowingInProgress,getUsers: requestUsers}
))(UsersContainer)