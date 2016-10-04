import React, { Component } from 'react';

import Login from './Login.jsx';
import Chat from './Chat.jsx';
import UserList from './UserList.jsx';

export default class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = { login: null };
    }

    doLogin(login) {
        this.setState({ login: login });
    }

    renderLogin() {
        return (
            <div className="row row-broken">
                <div className="col-sm-12 col-xs-12 chat">
                    <Login onLogin={this.doLogin.bind(this) } />
                </div>
            </div>
        );
    }

    renderChat(login) {
        return (
            <div className="row row-broken">
                <div className="col-sm-3 col-xs-12">
                    <div className="col-inside-lg decor-default chat">
                        <UserList user={login} />
                    </div>
                </div>
                <div className="col-sm-9 col-xs-12 chat">
                    <Chat user={login} />
                </div>
            </div>
        );
    }

    render() {
        if (this.state.login) {
            return this.renderChat(this.state.login);
        } else {
            return this.renderLogin();
        }
    }
}


