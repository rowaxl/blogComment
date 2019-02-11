import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostList extends Component { 
    render() {
        return (
            <div>
                <Post text={this.props.text} />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { text: state.dummy };
};

export default connect(mapStateToProps)(PostList);