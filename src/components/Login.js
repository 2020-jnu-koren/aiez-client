import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id:"",
      password:""
    };
  }
  handleIdChange = (e) =>{
    this.setState({id: e.target.value});
    // this.state.id=e.target.value;
  }
  handlePwChamge = (e) =>{
    this.setState({password: e.target.value});
    // this.state.password=e.target.value;
  }
  signin = (e) =>{
    console.log(this.state);
    axios({
      method: "post",
      url: "http://116.89.189.12/users/login",
      headers:{
        "Accept": "application/json",
        "Authorization": "Token 13bc8256196bcf1d297e80b136855ba7d0ec46a6",
        "Content-Type": "application/json",
        "credentials":"include"
      },
      data: {
        "email" : this.state.id,
        "password" : this.state.password
      }
    }).then(res => console.log(res.data)); 
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <div>
        <header className="header">
          <div className="header__center">
            <div className="header__title">LogIn</div>
          </div>
        </header>
        <main>
          <div className="login_main">
            <div className="login_que">
              <div className="login_que__id">ID</div>
              <div className="login_que__pass">Password</div>
            </div>
            <div className="login_input">
              <input className="login_input__id" onChange={this.handleIdChange} name="id" type="email"></input>
              <input className="login_input__pass" onChange={this.handlePwChamge} name="password" type="password"></input>
            </div>
          </div>
          <button className="login_confirm__btn" onClick={this.signin} type="button">
            Confirm
          </button>
        </main>
      </div>
    );
  }
}


export default Login;
