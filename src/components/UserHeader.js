import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUsers(this.props.userId);
    }

    render() {
        // const user = this.props.users.find(user => user.id === this.props.userId);

        if (!this.props.user) {
            return null;
        }

        return (
            <div className="header">{this.props.user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(
    mapStateToProps,
    { fetchUsers }
)(UserHeader);