import React, { Component } from 'react'
import Swal from 'sweetalert2'
import './style.scss'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPasswordShown:false,
      username: { value:'',error:'' },
      password: { value:'',error:'' },
    }
  }

  handleChange = e => {                 //handle change for input field and store data in state
  const tempState = {...this.state};
  const { name,value } = e.target;
  tempState[name].value = value;
  this.setState({
    tempState
  })
  
  if(tempState[name].value.length>0) {       // clear the error when focus loose from input field
    tempState[name].error = "";
    this.setState({
      tempState
    }) 
  }

}

  handleSubmit = e => {                //handle the submit 
    e.preventDefault();
    const { username,password } = this.state;
    if(username.value === "Atul" && parseInt(password.value) === 123) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'successfully loged in',
        showConfirmButton: false,
        timer: 1500
      })
    this.props.history.push('/details');
    }

    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter correct username and password!',
      })
    }

    if(this.state.username.value === '' && this.state.password.value === '') {
      console.log("enter");
      const { username,password } = {...this.state};
      //const { name,value } = e.target;
      username.error= "Please enter name";
      password.error = "Please enter password";
      
      this.setState({
        username
      })
      this.setState({
        password
      })
  }
}

  togglePasswordVisibility = e => {            //toggle the between show and hidden
    const { isPasswordShown } = this.state;
    this.setState({
      isPasswordShown:!isPasswordShown
    })
  }

  validate = (e) => {          // validate user input field detail while entering
    const { tempState } = {...this.state};
    const { name,value } = e.target;
    var regex = /^([a-z]+\s?[a-z]+)$/gi;
    if(!regex.test(tempState[name].value) && tempState[name].value.length) {
      tempState[name].error = "Please enter valid name";
      this.setState({
        tempState
      }) 
    }
  }

  render() {
    const { isPasswordShown,username,password } = this.state;
    console.log("showState",username,password);
    return (
      <section className="login">
        <div className="wrapper">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="username">
              <label>Username: </label>
              <input type="text" name="username" value={username.value} onBlur={(e) => this.validate(e)}  placeholder="Username" onChange={(e) => this.handleChange(e)} />
              <p>{username.error}</p>  
            </div>
            <div className="password">
              <label>Password: </label>
              <input type={isPasswordShown?"text":"Password"} name="password" value={password.value} placeholder="Password" onChange={(e) => this.handleChange(e)} autoComplete="off"/>
              <p>{password.error}</p>
              <span onClick={this.togglePasswordVisibility}>
                <i className="fa fa-eye password-icon" ></i>
                </span>
            </div>
            <div className="submit">
              <input type="submit" value="submit"/>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

