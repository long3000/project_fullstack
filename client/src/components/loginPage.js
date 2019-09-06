import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', state: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        const { target: { name, value }} = e;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const loginInfo = {
                username: this.state.username,
                password: this.state.password
            }
      
        try {
            this.props.history.push()
            alert(`Logged in as ${this.state.username}`);
        } catch (e) {
          alert(e.message);
        };

    }


    render() {
        return (
            <div className="login-form">
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                {/* {error && <Message
                    error={error}
                    content="That username/password is incorrect. Try again!"
                    />} */}
                {/* <form action="auth" method="POST"> */}
                    <input type="text" name="username" 
                            placeholder="Username" 
                            value = {this.state.username} 
                            onChange = {this.handleInputChange} required />
                    <input type="password" name="password" 
                            placeholder="Password" 
                            value = {this.state.password} 
                            onChange = {this.handleInputChange} required />
                    <input type="submit"  />
                </form>
            </div>
        )
    }
}

export default loginPage;