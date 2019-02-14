import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import UserHeader from './UserHeader';
import { fetchPosts } from '../actions';

class PostList extends Component { 
    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.props.posts.map(post =>
                    <Post post={post} key={post.id} header={<UserHeader userId={post.userId} key={post.id} />} />
                )}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);