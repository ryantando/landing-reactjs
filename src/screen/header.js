import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import $ from 'jquery'
class HeaderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        $(document).ready(function() {
            // Transition effect for navbar 
            $(window).scroll(function() {
              // checks if window is scrolled more than 500px, adds/removes solid class
              if($(this).scrollTop() > 50) { 
                  $('.navbar').addClass('solid-nav');
              } else {
                  $('.navbar').removeClass('solid-nav');
              }
            });
        });
    }
    render() { 
        const { location } = this.props;

        const homeClass = location.pathname === "/" ? "nav-item active" : "nav-item ";
        const payClass = location.pathname.match(/^\/pay/) ? "nav-item active" : "nav-item ";
        return ( 
        <nav className="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <strong>Aspire</strong>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                  <li className={homeClass}>
                    <Link className="nav-link" to="/">Home
                    </Link>
                  </li>
                  <li className={payClass}>
                    <Link className="nav-link" to="/pay">
                      Pay
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Contact</Link>
                  </li>
                </ul>
                <form className="form-inline d-inline">
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2 w-100" type="text" placeholder="Search" aria-label="Search"></input>
                  </div>
                </form>
              </div>
            </div>
          </nav>
          );
    }
}
 
export default withRouter(HeaderScreen);