import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Users } from '../api/Users.jsx';

export default class Login extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const login = ReactDOM.findDOMNode(this.refs.login).value.trim();

        var user = Users.find({ login: login }).fetch()[0];

        var userToSave = {
            login: login,
            loginAt: new Date(),
            status: 'online'
        };

        if (!user) {
            Users.insert(userToSave);
        } else {
            Users.update(user._id, userToSave);

        }

        this.props.onLogin(login);
    }

    render() {
        return (
            <div className="chat-body">
                <form className="login" onSubmit={this.handleSubmit.bind(this) } >
                    <div className="answer-add">
                        <input ref="login" type="text" placeholder="Type your name here..." />
                        <button className="btn"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        );
    }
}
