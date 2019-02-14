import React, { Component } from 'react';

class Post extends Component { 
    render() {
        return (
            <div className="item">
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{this.props.post.title}</h2>
                        <p>{this.props.post.body}</p>
                    </div>
                    {this.props.header}
                </div>
            </div>
        );
    };
};

export default Post;