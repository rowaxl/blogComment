import React, { Component } from 'react';

class Post extends Component { 
    render() {
        return (
            <div>
                text: {this.props.comment.text}
            </div>
        );
    };
};

export default Post;