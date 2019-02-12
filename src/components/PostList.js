import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostList extends Component { 
    render() {
        return (
            <div>
                {this.props.comments.map(comment => <Post comment={comment} key={comment.id} />)}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { comments: state.dummy };
};

export default connect(mapStateToProps)(PostList);