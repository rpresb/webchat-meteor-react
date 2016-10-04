import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);

        this.state = { position: props.message.user.name === props.user ? 'right' : 'left' };
    }

    position(className) {
        return className + ' ' + this.state.position;
    }

    render() {
        return (
            <div className={this.position('answer') }>
                <div className="avatar">
                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                    <div className={'status ' + this.props.message.user.status}></div>
                </div>
                <div className="name">{this.props.message.user.name}</div>
                <div className="text">
                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                </div>
                <div className="time">5 min ago</div>
            </div>
        );
    }
}