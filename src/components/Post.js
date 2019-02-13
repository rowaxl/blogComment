import React, { Component } from 'react';

class Post extends Component { 
    render() {
        return (
            <div>
                {this.props.post.userId}: {this.props.post.body}
            </div>
        );
    };
};

export default Post;