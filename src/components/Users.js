import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { allUsers } from '../queries/query'

const Users = () => {
    return (
        <Fragment>
            <Query
                query={allUsers}
            >
                { ({loading,error,data}) => {
                    if(loading) return <div>Loading</div>
                    if (error) return `Error!: ${error}`;

                    return (
                    <ul>
                        {
                            data.users.map(u => {
                                return (
                                    <li key={u.name}>{u.name}</li>
                                )
                            })
                        }
                    </ul>
                    )

                }}
            </Query>
        </Fragment>
    )
}

export default Users;