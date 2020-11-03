import React, { Component } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

//Stylesheets
import './styling.css';

//Images
import SCLOGO from './img/SCLOGO.jpg';
import Luis from './img/Luis.jpg';
import Hemant from './img/Hemant.png';

//MainClass
class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      slideIndex: 1,
      slideIndex2: 1,
      slideIndex3: 1,
      slideIndex4: 1,
      occu_rating: [],
      pers_rating:[],
      pref_rating:[],
      tren_rating:[],
    };

    this.logout = this.logout.bind(this);

    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    this.showSlides = this.showSlides.bind(this);

    this.plusSlides2 = this.plusSlides2.bind(this);
    this.currentSlide2 = this.currentSlide2.bind(this);
    this.showSlides2 = this.showSlides2.bind(this);

    this.plusSlides3 = this.plusSlides3.bind(this);
    this.currentSlide3 = this.currentSlide3.bind(this);
    this.showSlides3 = this.showSlides3.bind(this);

    this.plusSlides4 = this.plusSlides4.bind(this);
    this.currentSlide4 = this.currentSlide4.bind(this);
    this.showSlides4 = this.showSlides4.bind(this);

    this.changeRating = this.changeRating.bind(this);
    this.changeRating2 = this.changeRating2.bind(this);
    this.changeRating3 = this.changeRating3.bind(this);
    this.changeRating4 = this.changeRating4.bind(this);

  }

  changeRating(newRating, name) {
    var rating = this.state.occu_rating;
    rating[name]=newRating;

    this.setState({
      occu_rating: rating
    });


    var formData = new FormData();
    formData.append("user_id", window.sessionStorage.getItem("user_id"));
    formData.append("movie_id", this.state.occupationalPicks[name].id );
    formData.append("rating", newRating);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Rating/',
        data: formData,
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

  }


  changeRating2(newRating, name) {
    console.log(this.state);
    var rating = this.state.pers_rating;
    rating[name]=newRating;

    this.setState({
      pers_rating: rating
    });


    var formData = new FormData();
    formData.append("user_id", window.sessionStorage.getItem("user_id"));
    formData.append("movie_id", this.state.personalisedPicks[name].id );
    formData.append("rating", newRating);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Rating/',
        data: formData,
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

  }


  changeRating3(newRating, name) {
    var rating = this.state.pref_rating;
    rating[name]=newRating;

    this.setState({
      pref_rating: rating
    });


    var formData = new FormData();
    formData.append("user_id", window.sessionStorage.getItem("user_id"));
    formData.append("movie_id", this.state.preferentialPicks[name].id );
    formData.append("rating", newRating);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Rating/',
        data: formData,
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

  }


  changeRating4(newRating, name) {
    var rating = this.state.tren_rating;
    rating[name]=newRating;

    this.setState({
      tren_rating: rating
    });


    var formData = new FormData();
    formData.append("user_id", window.sessionStorage.getItem("user_id"));
    formData.append("movie_id", this.state.trendingPicks[name].id );
    formData.append("rating", newRating);

    var self = this;
    axios({
        method: 'POST',
        url: 'http://localhost:8000/Rating/',
        data: formData,
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

  }


  logout(){
    window.sessionStorage.removeItem("user_id");
    window.location.reload();
  }

  componentDidMount() {
    var id = window.sessionStorage.getItem("user_id");
    // if(id){
    // }
    // else{
    //   window.location.assign("/Login");
    // }
    var url = 'http://localhost:8000/OccupationalPicks/'.concat(id);
    var self = this;
    axios({
        method: 'GET',
        url: url,
      })
      .then(function(response) {
        console.log(response.data);
        var elements = document.getElementsByClassName("MovieTitle");
        var genres_elements = document.getElementsByClassName("MovieGenres");
        elements[0].innerHTML = response.data.data[0].title;
        genres_elements[0].innerHTML = response.data.genres[0];
        elements[1].innerHTML = response.data.data[1].title;
        genres_elements[1].innerHTML = response.data.genres[1];
        elements[2].innerHTML = response.data.data[2].title;
        genres_elements[2].innerHTML = response.data.genres[2];
        self.setState({occu_rating: response.data.ratings, occupationalPicks:response.data.data});
      })
      .catch(function(error) {
        console.log(error);
      });

      url = 'http://localhost:8000/PersonalisedPicks/'.concat(id);
      var self = this;
      axios({
          method: 'GET',
          url: url,
        })
        .then(function(response) {
          var elements = document.getElementsByClassName("MovieTitle2");
          var genres_elements = document.getElementsByClassName("MovieGenres2");
          elements[0].innerHTML = response.data.data[0].title;
          genres_elements[0].innerHTML = response.data.genres[0];
          elements[1].innerHTML = response.data.data[1].title;
          genres_elements[1].innerHTML = response.data.genres[1];
          elements[2].innerHTML = response.data.data[2].title;
          genres_elements[2].innerHTML = response.data.genres[2];
          self.setState({pers_rating: response.data.ratings, personalisedPicks:response.data.data});
        })
        .catch(function(error) {
          console.log(error);
        });

      url = 'http://localhost:8000/PreferentialPicks/'.concat(id);
      var self = this;
      axios({
          method: 'GET',
          url: url,
        })
        .then(function(response) {
          console.log(response.data);
          var elements = document.getElementsByClassName("MovieTitle3");
          var genres_elements = document.getElementsByClassName("MovieGenres3");
          elements[0].innerHTML = response.data.data[0].title;
          genres_elements[0].innerHTML = response.data.genres[0];
          elements[1].innerHTML = response.data.data[1].title;
          genres_elements[1].innerHTML = response.data.genres[1];
          elements[2].innerHTML = response.data.data[2].title;
          genres_elements[2].innerHTML = response.data.genres[2];

          self.setState({pref_rating: response.data.ratings, preferentialPicks:response.data.data});
        })
        .catch(function(error) {
          console.log(error);
        });

        url = 'http://localhost:8000/TrendingPicks/'.concat(id);
        var self = this;
        axios({
            method: 'GET',
            url: url,
          })
          .then(function(response) {
            console.log(response.data);
            var elements = document.getElementsByClassName("MovieTitle4");
            var genres_elements = document.getElementsByClassName("MovieGenres4");
            elements[0].innerHTML = response.data.data[0].title;
            genres_elements[0].innerHTML = response.data.genres[0];
            elements[1].innerHTML = response.data.data[1].title;
            genres_elements[1].innerHTML = response.data.genres[1];
            elements[2].innerHTML = response.data.data[2].title;
            genres_elements[2].innerHTML = response.data.genres[2];
            self.setState({tren_rating: response.data.ratings, trendingPicks:response.data.data});
          })
          .catch(function(error) {
            console.log(error);
          });

     this.showSlides(this.state.slideIndex);
     this.showSlides2(this.state.slideIndex2);
     this.showSlides3(this.state.slideIndex3);
     this.showSlides4(this.state.slideIndex4);
}

 showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {
     this.state.slideIndex=1;
   }

   if (n < 1) {
     this.state.slideIndex=slides.length;
   }

   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }

   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
    slides[this.state.slideIndex-1].style.display = "block";
    dots[this.state.slideIndex-1].className += " active";
 }

 plusSlides(n) {
   this.showSlides(this.state.slideIndex=this.state.slideIndex+n);
 }

 currentSlide(n) {
   this.showSlides(this.state.slideIndex=n);
 }

 showSlides2(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides2");
   var dots = document.getElementsByClassName("dot2");
   if (n > slides.length) {
     this.state.slideIndex2=1;
   }

   if (n < 1) {
     this.state.slideIndex2=slides.length;
   }

   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }

   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
    slides[this.state.slideIndex2-1].style.display = "block";
    dots[this.state.slideIndex2-1].className += " active";
 }

 plusSlides2(n) {
   this.showSlides2(this.state.slideIndex2=this.state.slideIndex2+n);
 }

 currentSlide2(n) {
   this.showSlides2(this.state.slideIndex2=n);
 }


showSlides3(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides3");
   var dots = document.getElementsByClassName("dot3");
   if (n > slides.length) {
     this.state.slideIndex3=1;
   }

   if (n < 1) {
     this.state.slideIndex3=slides.length;
   }

   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }

   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
    slides[this.state.slideIndex3-1].style.display = "block";
    dots[this.state.slideIndex3-1].className += " active";
 }

 plusSlides3(n) {
   this.showSlides3(this.state.slideIndex3=this.state.slideIndex3+n);
 }

 currentSlide3(n) {
   this.showSlides3(this.state.slideIndex3=n);
 }


showSlides4(n){
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("dot4");
    if (n > slides.length) {
      this.state.slideIndex4=1;
    }

    if (n < 1) {
      this.state.slideIndex4=slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
     slides[this.state.slideIndex4-1].style.display = "block";
     dots[this.state.slideIndex4-1].className += " active";
  }

  plusSlides4(n){
    this.showSlides4(this.state.slideIndex4=this.state.slideIndex4+n);
  }

  currentSlide4(n) {
    this.showSlides4(this.state.slideIndex4=n);
  }



  render() {
    var occupation = "Occupation"; //window.sessionStorage.getItem("occupation_name").toLowerCase();
    var username = "Username"; //window.sessionStorage.getItem("username");
    return (
      <div>
        <title> Index </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="style.css" />

        <main>
          <div class="sidebar">
          <a href=""><i class="fa fa-fw fa-home"></i> Home</a>
          <a href="#services"><i class="fa fa-fw fa-user"></i> Edit Profile </a>
          <a href="#clients"><i class="fa fa-fw fa-align-justify"></i> Preferences </a>
          <a href="" onClick={this.logout}><i class="fa fa-fw fa-level-down"></i> Logout </a>
          <div className="SCLOGO"> <a href="#Index"> <img src={SCLOGO} /> </a> </div>
          </div>


<div className="wrapper">
  <div className = "gridContainer1">
        <div className="slideshow-container">
            <h4> Popular movies among {occupation}: </h4>
              <div className="mySlides">
                <h4 className="MovieTitle"></h4>
                <h6 className="MovieGenres"></h6>
                <StarRatings
                  rating={this.state.occu_rating[0]}
                  starRatedColor="blue"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name='0'
                  starDimension="20px"
                  starSpacing="1px"
                  />
                  <br/>


              </div>

              <div className="mySlides">
                <h4 className="MovieTitle"></h4>
                <h6 className="MovieGenres"></h6>

                <StarRatings
                  rating={this.state.occu_rating[1]}
                  starRatedColor="blue"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name='1'
                  starDimension="20px"
                  starSpacing="1px"
                  />

              </div>

              <div className="mySlides">
                <h4 className="MovieTitle"></h4>
                <h6 className="MovieGenres"></h6>

                <StarRatings
                  rating={this.state.occu_rating[2]}
                  starRatedColor="blue"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  name='2'
                  starDimension="20px"
                  starSpacing="1px"
                  />

              </div>

                <button className="prev" onClick={(e)=>(this.plusSlides(-1))}>❮</button>
                <button className="next" onClick={(e)=>(this.plusSlides(1))}>❯</button>

            <div className="dot-container">
                <span className="dot" onClick={(e)=>(this.currentSlide(1))} />
                <span className="dot" onClick={(e)=>(this.currentSlide(2))} />
                <span className="dot" onClick={(e)=>(this.currentSlide(3))} />
            </div>
          </div>

          <br/>

        <div className="slideshow-container">
                <h4> Just for you, {username} : </h4>
                  <div className="mySlides2">
                    <h4 className="MovieTitle2"></h4>
                    <h6 className="MovieGenres2"></h6>
                    <StarRatings
                      rating={this.state.pers_rating[0]}
                      starRatedColor="blue"
                      changeRating={this.changeRating2}
                      numberOfStars={5}
                      name='0'
                      starDimension="20px"
                      starSpacing="1px"
                      />
                  </div>

                <div className="mySlides2">
                  <h4 className="MovieTitle2"></h4>
                  <h6 className="MovieGenres2"></h6>
                  <StarRatings
                    rating={this.state.pers_rating[1]}
                    starRatedColor="blue"
                    changeRating={this.changeRating2}
                    numberOfStars={5}
                    name='1'
                    starDimension="20px"
                    starSpacing="1px"
                    />
                </div>

                <div className="mySlides2">
                  <h4 className="MovieTitle2"></h4>
                  <h6 className="MovieGenres2"></h6>
                  <StarRatings
                    rating={this.state.pers_rating[2]}
                    starRatedColor="blue"
                    changeRating={this.changeRating2}
                    numberOfStars={5}
                    name='2'
                    starDimension="20px"
                    starSpacing="1px"
                    />
                </div>

                <button className="prev" onClick={(e)=>(this.plusSlides2(-1))}>❮</button>
                <button className="next" onClick={(e)=>(this.plusSlides2(1))}>❯</button>

                <div className="dot-container">
                  <span className="dot2" onClick={(e)=>(this.currentSlide2(1))} />
                  <span className="dot2" onClick={(e)=>(this.currentSlide2(2))} />
                  <span className="dot2" onClick={(e)=>(this.currentSlide2(3))} />
                </div>
            </div>
</div>

<div className = "gridContainer2">
      <div className="slideshow-container">
          <h4> Based on your preferences: </h4>
            <div className="mySlides3">
              <h4 className="MovieTitle3"></h4>
              <h6 className="MovieGenres3"></h6>
              <StarRatings
                rating={this.state.pref_rating[0]}
                starRatedColor="blue"
                changeRating={this.changeRating3}
                numberOfStars={5}
                name='0'
                starDimension="20px"
                starSpacing="1px"
                />
            </div>

            <div className="mySlides3">
              <h4 className="MovieTitle3"></h4>
              <h6 className="MovieGenres3"></h6>
              <StarRatings
                rating={this.state.pref_rating[1]}
                starRatedColor="blue"
                changeRating={this.changeRating3}
                numberOfStars={5}
                name='1'
                starDimension="20px"
                starSpacing="1px"
                />
            </div>

            <div className="mySlides3">
              <h4 className="MovieTitle3"></h4>
              <h6 className="MovieGenres3"></h6>
              <StarRatings
                rating={this.state.pref_rating[2]}
                starRatedColor="blue"
                changeRating={this.changeRating3}
                numberOfStars={5}
                name='2'
                starDimension="20px"
                starSpacing="1px"
                />
            </div>

              <button className="prev" onClick={(e)=>(this.plusSlides3(-1))}>❮</button>
              <button className="next" onClick={(e)=>(this.plusSlides3(1))}>❯</button>

          <div className="dot-container">
              <span className="dot3" onClick={(e)=>(this.currentSlide3(1))} />
              <span className="dot3" onClick={(e)=>(this.currentSlide3(2))} />
              <span className="dot3" onClick={(e)=>(this.currentSlide3(3))} />
          </div>
        </div>

        <br/>

      <div className="slideshow-container">
              <h4> Popular right now: </h4>
                <div className="mySlides4">
                  <h4 className="MovieTitle4"></h4>
                  <h6 className="MovieGenres4"></h6>
                  <StarRatings
                    rating={this.state.tren_rating[0]}
                    starRatedColor="blue"
                    changeRating={this.changeRating4}
                    numberOfStars={5}
                    name='0'
                    starDimension="20px"
                    starSpacing="1px"
                    />
                </div>

              <div className="mySlides4">
                <h4 className="MovieTitle4"></h4>
                <h6 className="MovieGenres4"></h6>
                <StarRatings
                  rating={this.state.tren_rating[1]}
                  starRatedColor="blue"
                  changeRating={this.changeRating4}
                  numberOfStars={5}
                  name='1'
                  starDimension="20px"
                  starSpacing="1px"
                  />
              </div>

              <div className="mySlides4">
                <h4 className="MovieTitle4"></h4>
                <h6 className="MovieGenres4"></h6>
                <StarRatings
                  rating={this.state.tren_rating[2]}
                  starRatedColor="blue"
                  changeRating={this.changeRating4}
                  numberOfStars={5}
                  name='2'
                  starDimension="20px"
                  starSpacing="1px"
                  />
              </div>

              <button className="prev" onClick={(e)=>(this.plusSlides4(-1))}>❮</button>
              <button className="next" onClick={(e)=>(this.plusSlides4(1))}>❯</button>

              <div className="dot-container">
                <span className="dot4" onClick={(e)=>(this.currentSlide4(1))} />
                <span className="dot4" onClick={(e)=>(this.currentSlide4(2))} />
                <span className="dot4" onClick={(e)=>(this.currentSlide4(3))} />
              </div>
          </div>
</div>
</div>
<br />

        <br />
        <br />
        <br />

        </main>

        <br />
        <br />
        <br />

<div className="studentCards">

        <hr/>

      <div id="cards">
      <h3 id="StudentProfile_Text"> <marquee> STUDENT PROFILES </marquee> </h3>
          <div className="card1">
            <img src={Luis} alt="Marlon Luis" style={{width: '70%'}} />
            <h2>Marlon Luis</h2>
            <p className="title">IT Engineer, 4th Year</p>
              <a href="https://www.sharda.ac.in/" target="_blank"> <p>Sharda University</p></a><p><a href="https://www.sharda.ac.in/" target="_blank"> </a>
            </p>

            <div style={{margin: '24px 0'}}>
              <a href="#" className="fa fa-instagram" />
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-facebook" /></a>
            </div>

            <p>
              <button>Contact</button>
            </p>
          </div>
        </div>

          <div className="card1">
            <img src={Hemant} alt="Hemant" style={{width: '70%'}} />
            <h2>Hemant Bisht</h2>

            <p className="title">IBM Engineer, 4th Year</p>
              <a href="https://www.sharda.ac.in/" target="_blank"> <p>Sharda University</p></a><p><a href="https://www.sharda.ac.in/" target="_blank" />
            </p>

            <div style={{margin: '24px 0'}}>
              <a href="#" className="fa fa-instagram" ></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-facebook" /></a>
            </div>
            <p><button>Contact</button></p>
          </div>
</div>
        <footer>
            <div className="Footer_Info">
            <nav>
              <ul>
                <li> <a href="#"> ABOUT SUI COGNITA </a></li>
                  <li> <a href="#"> PRIVACY & POLICY </a></li>
                <li> <a href="#"> TERMS OF USE </a></li>
              </ul>
              <p id="footer_copyright_text"> ALL RIGHTS RESERVED ● SUI COGNITA, COPYRIGHT © 2019 </p>
            </nav>
            </div>
        </footer>
        </div>
    );
  }
}

export default Dashboard;
