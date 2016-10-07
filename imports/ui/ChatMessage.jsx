import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Message from './Message.jsx';

import { Chats } from '../api/Chats.jsx';

export class ChatMessage extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        const messageText = ReactDOM.findDOMNode(this.refs.message).value.trim();

        if (messageText.trim() != '') {
            var message = {
                user: this.props.user,
                text: messageText,
                date: new Date()
            };

            var id = Chats.find({ user: this.props.user, friend: this.props.friend.login }).fetch()[0]._id;
            Chats.update(id, { $push: { messages: message } });

            var id = Chats.find({ user: this.props.friend.login, friend: this.props.user }).fetch()[0]._id;
            Chats.update(id, { $push: { messages: message } });

            ReactDOM.findDOMNode(this.refs.message).value = '';
        }
    }

    render() {
        var user = this.props.user;
        var friend = this.props.friend;
        
        var messages = this.props.chat.messages.map(function (message, i) {
            return (<Message key={i} user={user} message={message} />);
        });

        return (
            <div>
                <h6>Chat with {friend.login}</h6>

                <div className="messages">
                    {messages}
                </div>

                <form onSubmit={this.handleSubmit.bind(this) } >
                    <div className="answer-add">
                        <input ref="message" type="text" placeholder="Write a message" />
                        <button className="btn"><i className="fa fa-send" aria-hidden="true"></i></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default createContainer((props) => {
    var chats = Chats.find({ user: props.user, friend: props.friend.login }).fetch();

    if (chats.length == 0) {
        var chat = {
            user: props.user,
            friend: props.friend.login,
            messages: []
        };
        Chats.insert(chat);

        chats.push(chat);

        var friendChat = {
            user: props.friend.login,
            friend: props.user,
            messages: []
        };

        Chats.insert(friendChat);
    }

    return {
        chat: chats[0],
    };
}, ChatMessage);