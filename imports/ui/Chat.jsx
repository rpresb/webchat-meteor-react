import React, { Component } from 'react';
import Message from './Message.jsx';

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = { user: props.user };
    }

    render() {
        return (
            <div className="col-inside-lg decor-default">
                <div className="chat-body">
                    <h6>Chat</h6>

                    <Message key={0} user={this.state.user} message={{ index: 0, user: { name: "Rodrigo", status: "offline" } }} />
                    <Message key={1} user={this.state.user} message={{ index: 1, user: { name: "Teste", status: "online" } }} />
                    <Message key={2} user={this.state.user} message={{ index: 2, user: { name: "Rodrigo", status: "offline" } }} />
                    <Message key={3} user={this.state.user} message={{ index: 3, user: { name: "Teste", status: "online" } }} />

                    <div className="answer-add">
                        <input placeholder="Write a message" />
                        <span className="answer-btn answer-btn-1"></span>
                        <span className="answer-btn answer-btn-2"></span>
                    </div>
                </div>
            </div>
        );
    }
}