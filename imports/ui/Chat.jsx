import React, { Component } from 'react';
import ChatMessage from './ChatMessage.jsx';

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = { user: props.user };
    }

    render() {
        var chat = this.props.friend ?
            (<ChatMessage user={this.state.user} friend={this.props.friend} />) :
            (<div>Choose a friend in the list to chat</div>);

        return (
            <div className="col-inside-lg decor-default">
                <div className="chat-body">
                    {chat}
                </div>
            </div>
        );
    }
}
