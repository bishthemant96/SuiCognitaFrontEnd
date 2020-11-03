import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Thriller from './img/Thriller.jpg';
import Comedy from './img/Comedy.jpg';
import Children from './img/Children.jpg';
import Documentary from './img/Documentary.jpg';
import Adventure from './img/Adventure.jpg';
import War from './img/War.jpg';
import Animation from './img/Animation.jpg';
import Romance from './img/Romance.jpg';
import Action from './img/Action.jpg';
import Drama from './img/Drama.jpg';
import Mystery from './img/Mystery.jpg';
import Horror from './img/Horror.jpg';
import Fantasy from './img/Fantasy.jpg';
import Western from './img/Western.jpg';
import Musical from './img/Musical.jpg';
import Scifi from './img/Sci-fi.jpg';
import Logo2 from './img/Logo2.jpg';

import "./preferenceStyling.css";

class Preferences extends Component {
  constructor() {
    super();
    this.state = {preferences:[],};

    this.addPreferences = this.addPreferences.bind(this);
    this.sendPreferences = this.sendPreferences.bind(this);
  }

  addPreferences(callee){
    if(this.state.preferences.indexOf(callee)==-1){
      this.state.preferences.push(callee);
    }
    else{
            this.state.preferences.splice(this.state.preferences.indexOf(callee),1);
    }
    console.log(this.state.preferences);
  }

  sendPreferences(){
    var id = window.sessionStorage.getItem("user_id");
    var formData = new FormData();
    formData.append("id", id);
    formData.append("preference1", this.state.preferences[0]);
    formData.append("preference2", this.state.preferences[1]);
    formData.append("preference3", this.state.preferences[2]);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Preferences/',
        data: formData,
      })
      .then(function(response) {
        console.log(response.data);
        window.location.assign("/Dashboard");
      })
      .catch(function(error) {
        console.log(error);
      });

  }

  componentDidMount() {
    var c = 'all';
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");

      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");

      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }

      element.className = arr1.join(" ");
    }
  }

  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className="main">
          <div className="logo"> <a href="#Index"> <img src={Logo2} alt="Cinque Terre"/> </a> </div>
          <hr />
          <h1 style={{textAlign: 'center'}}>Pick 3 Genres</h1>
          {/* Movie Gallery Grid */}
          <div className="gallery">
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1"><img src={Thriller}  onClick={(e)=>(this.addPreferences(16))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb2" />
                    <label htmlFor="cb2"><img src={Comedy} onClick={(e)=>(this.addPreferences(5))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb3" />
                    <label htmlFor="cb3"><img src={Children} onClick={(e)=>(this.addPreferences(4))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb4" />
                    <label htmlFor="cb4"><img src={Documentary} onClick={(e)=>(this.addPreferences(7))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb5" />
                    <label htmlFor="cb5"><img src={Adventure} onClick={(e)=>(this.addPreferences(2))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb6" />
                    <label htmlFor="cb6"><img src={Scifi} onClick={(e)=>(this.addPreferences(15))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb7" />
                    <label htmlFor="cb7"><img src={War} onClick={(e)=>(this.addPreferences(17))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb8" />
                    <label htmlFor="cb8"><img src={Animation} onClick={(e)=>(this.addPreferences(3))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb9" />
                    <label htmlFor="cb9"><img src={Romance} onClick={(e)=>(this.addPreferences(14))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb10" />
                    <label htmlFor="cb10"><img src={Action} onClick={(e)=>(this.addPreferences(1))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb11" />
                    <label htmlFor="cb11"><img src={Drama}  onClick={(e)=>(this.addPreferences(8))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb12" />
                    <label htmlFor="cb12"><img src={Mystery}  onClick={(e)=>(this.addPreferences(13))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb13" />
                    <label htmlFor="cb13"><img src={Horror} onClick={(e)=>(this.addPreferences(11))} alt="Cinque Terre"/></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb14" />
                    <label htmlFor="cb14"><img src={Fantasy} onClick={(e)=>(this.addPreferences(9))} alt="Cinque Terre" /></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb15" />
                    <label htmlFor="cb15"><img src={Western} onClick={(e)=>(this.addPreferences(18))} alt="Cinque Terre"/></label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column action">
              <div className="content">
                <ul>
                  <li>
                    <input type="checkbox" id="cb16" />
                    <label htmlFor="cb16"><img src={Musical} onClick={(e)=>(this.addPreferences(12))} alt="Cinque Terre"/></label>
                  </li>
                </ul>
              </div>
              <input type="button" name="Submit" onClick={(e)=>this.sendPreferences()} defaultValue="SUBMIT" className="btn" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preferences;
