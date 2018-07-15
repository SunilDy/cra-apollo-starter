import React, { Component } from 'react';
import './App.css';

// Components
  import Users from './components/Users';
  import AddUser from './components/AddUser';

class App extends Component {

  state = {
    user_name: '',
    password: ''
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <AddUser
          user_name={this.state.user_name}
          password={this.state.password}
          handleChange={this.handleChange}
        />
        <Users />
      </div>
    );
  }
}

export default App;
