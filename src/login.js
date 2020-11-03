import React, { Component } from 'react';
import axios from 'axios';

//StyleSheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginStyling.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {};

    this.authentication = this.authentication.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var id = window.sessionStorage.getItem("user_id");
    if (id) {
      window.location.assign("/Dashboard");
    } else {
      console.log('No id');
    }
  }

  authentication() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Authenticate/',
        data: formData
      })
      .then(function(response) {
        console.log(response.data);
        window.sessionStorage.setItem("user_id", response.data['id']);
        window.sessionStorage.setItem("occupation_id", response.data['occupation_id']);
        window.sessionStorage.setItem("occupation_name", response.data['occupation_name']);
        window.sessionStorage.setItem("username", response.data['username']);
        window.location.assign("/Dashboard");
      })
      .catch(function(error) {
        console.log(error);
        alert("invalid username/password!");
      });
  }

  render() {
    return (
      <div>
        <title>SIGNIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <div className="LoginContainer">
          <h1> Login </h1>
          <h6> Please fill in your account details: </h6>

          <hr />
          <br />

          <label htmlFor="Username"> <b> User Name </b> </label>
          <input type="text" id="username" name="Username" maxLength={25} size={25} placeholder="Enter your username here." required />

          <br />

          <label htmlFor="Password"> <b>Password</b> </label>
          <input type="Password" id="password" name="Pswd" maxLength={15} size={15} placeholder="Enter your password here." required />

          <button className="Loginbtn" onClick={(e)=>(this.authentication())}> Login </button>

          <div>
            <h6> Dont have an account ? <a href="/register"> Register </a></h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
