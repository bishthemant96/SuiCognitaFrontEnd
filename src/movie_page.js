import React, { Component } from 'react';

//Images
import Logo2 from './img/Logo2.jpg';

//StyleSheets
import 'bootstrap/dist/css/bootstrap.min.css';

class MoviePage extends Component {

  constructor() {
    super();
    this.state = {};

    this.logout = this.logout.bind(this);

  }

  componentDidMount() {
    var id = window.sessionStorage.getItem("user_id");
    if(id){
    }
    else{
      window.location.assign("/Login");
    }
  }

  logout(){
    window.sessionStorage.removeItem("user_id");
    window.location.reload();
  }


  render() {
    return (
      <div>
        <div className="logo"> <a href="#Index"> <img src={Logo2} /> </a> </div>
        <nav className="Navbar">
          <ul>
            <li> <button id="logoutbtn" href="#home"> Home </button> </li>
            <li style={{float: 'right'}}> <button id="logoutbtn" onClick={this.logout}> Logout </button></li>
          </ul>
        </nav>
        Movie page to come up here.
      </div>

    );
  }
}

export default MoviePage;
