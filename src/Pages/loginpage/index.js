import React, { Component } from 'react'
import { Redirect } from "react-router-dom"; 
import './style.scss'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPasswordShown:false,
      username:'',
      password:''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username,password } = this.state;
    console.log(username,password)
    if(username === "Atul" && parseInt(password) === 123) {
      console.log("enter");
    //  return <Redirect to="/details" />
    this.props.history.push('/details');
    }
  }

  togglePasswordVisibility = e => {
    const {isPasswordShown} = this.state;
    this.setState({
      isPasswordShown:!isPasswordShown
    })
  }

  render() {
    return (
      <section className="login">
        <div className="wrapper">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="username">
              <label>Username: </label>
              <input type="text" name="username" value={this.state.username}  placeholder="Username" onChange={(e) => this.handleChange(e)} />
            </div>
            <div className="password">
              <label>Password: </label>
              <input type={this.state.isPasswordShown?"text":"Password"} name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.handleChange(e)} autoComplete="off"/>
              <i className="fa fa-eye password-icon" onClick={this.togglePasswordVisibility}></i>
            </div>
            <input type="submit" value="submit"/>
          </form>
        </div>
      </section>
    )
  }
}

