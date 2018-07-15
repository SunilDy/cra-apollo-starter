import React, { Component,Fragment } from 'react';
import './App.css';
import { Query } from 'react-apollo'

// Queries
import {user} from './queries/query'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Query
          query={user}
          variables={{
            name:"sunil",
            password:"sunilpass"
          }}
        >
          { ({loading,error,data}) => {
            if(loading) return <div>Loading</div>
            if (error) return `Error!: ${error}`;

            return (
              <Fragment>
                <p>name: {data.user.name}</p>
                <p>password: {data.user.password}</p>
              </Fragment>
            )

          }}
        </Query>
      </div>
    );
  }
}

export default App;
