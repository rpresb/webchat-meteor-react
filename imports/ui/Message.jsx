import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);

        this.state = { position: props.message.user === props.user ? 'right' : 'left' };
    }

    position(className) {
        return className + ' ' + this.state.position;
    }

    render() {
        return (
            <div className={this.position('answer') }>
                <div className="avatar">
                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt={this.props.message.user} />
                    <div className="status"></div>
                </div>
                <div className="name">{this.props.message.user}</div>
                <div className="text">
                    {this.props.message.text}
                </div>
                <div className="time">5 min ago</div>
            </div>
        );
    }
}