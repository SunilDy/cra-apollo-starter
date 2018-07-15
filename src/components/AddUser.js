import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { addUserMutation,allUsers } from '../queries/query';


class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render () {
        return (
            <Mutation mutation={addUserMutation}>
                {(addUserMutation, {data}) => (
                    <div>
                        <form onSubmit={e => {
                            e.preventDefault();
                            addUserMutation({
                                variables: {
                                    name: this.state.name,
                                    password: this.state.password
                                },
                                refetchQueries: [{query:allUsers}]
                            })
                        }}>
                            <input
                                type="text"
                                value={this.state.name}
                                name="name"
                                onChange={this.handleChange.bind(this)}
                                placeholder="Enter user name"
                            />

                            <input
                                type="password"
                                value={this.state.password}
                                name="password"
                                onChange={this.handleChange.bind(this)}
                                placeholder="Enter password"
                            />
                            <button type="submit">ADD</button>
                        </form>
                    </div>
                )}
            </Mutation>
        )
    }
}

export default AddUser;