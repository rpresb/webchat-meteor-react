import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Users } from '../api/Users.jsx';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var currentUser = this.props.user;

        var users = this.props.users.map((user, i) => {
            if (currentUser == user.login) {
                return;
            }

            return (<User key={i} user={user} />);
        });

        return (
            <div className="chat-users">
                <h6>Users</h6>
                {users}
            </div>
        );
    }
}

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user">
                <div className="avatar">
                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt={this.props.user.login} />
                    <div className={'status ' + this.props.user.status}></div>
                </div>
                <div className="name">{this.props.user.login}</div>
                <div className="mood">&nbsp;</div>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        users: Users.find({}).fetch(),
    };
}, UserList);