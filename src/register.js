import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterStyling.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {};
    this.register = this.register.bind(this);
  }

  setGender(event) {
    this.setState({"gender" : event.target.value});
  }

  register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = this.state.gender;
    var zip_code = document.getElementById("zip_code").value;
    var occupation_id = document.getElementById("occupation_id").value;

    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("zip_code", zip_code);
    formData.append("occupation_id", occupation_id);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Register/',
        data: formData
      })
      .then(function(response) {
        console.log(response.data);
        window.sessionStorage.setItem("user_id", response.data['user_id']);
        window.sessionStorage.setItem("occupation_id", response.data['occupation_id']);
        window.sessionStorage.setItem("occupation_name", response.data['occupation_name']);
        window.location.assign("/Preferences");
      })
      .catch(function(error) {
        console.log(error);
        alert("Error registering: Invalid values!");
      });


  }

  render() {
    return (
      <div>
        <title>SIGN UP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <div className="RegistrationContainer">
          <h1> Register </h1>
          <h6> Please fill in the form to create an account. </h6>
          <hr />

          <label htmlFor="Name"> <b>User Name</b> </label>
          <input type="text" id="username" name="Name" maxLength={25} size={25} placeholder="Choose your username here." required />

          <br />

          <label htmlFor="Password"> <b>Password</b> </label>
          <input type="Password" id="password" name="Pswd" maxLength={15} size={15} placeholder="Enter your password here." required />

          <br />

          <label htmlFor="Age"> <b>Age</b></label>
          <input type="text" id="age" name="Age" maxLength={2} size={2} placeholder="Enter your age here." required />


          <br/>
          <strong> Gender: </strong>
          <div onChange={this.setGender.bind(this)}>
            <input type="radio" value="M" name="gender"/> Male &nbsp; &nbsp;
            <input type="radio" value="F" name="gender"/> Female
          </div>

          <br/>

          <label htmlFor="Zipcode" id="textZ"> <b>Zipcode </b> </label>
          <input type="text" id="zip_code" name="Zipcode" maxLength={6} size={6} placeholder="Enter your zipcode here." required />

          <label htmlFor="Occupation"> <b>Occupation</b> </label>
          <div className="dropdown">
            <div className="dropdown-content">
              <select id="occupation_id" name="Occupation">
                <option value="19">Student</option>
                <option value="4">Educator</option>
                <option value="3">Doctor</option>
                <option value="2">Artist</option>
                <option value="5">Engineer</option>
                <option value="17">Salesman</option>
                <option value="14">Other</option>

              </select> <br /> <br />
            </div>
          </div>

          <button type="submit" className="registrationbtn" onClick={(e)=>(this.register())}> Register </button>

          <div className="SigninContainer">
            <p> Already have an account ? <a href="/">Sign in!</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
