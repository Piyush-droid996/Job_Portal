import React from "react";
import "./Home.css"; // Import your CSS file


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="App-header">
        <div className="container">
          <div className="row align-items-center d-flex">
            <div className="col-md-6">
              <h1 className="mb-5 main-heading" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                Your Dream <br /><span>Job is Waiting</span>
              </h1>
            </div>
            <div className="col-md-6">
              <h1>hi</h1>
            </div>
          </div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Link className="App-link" to="/jobs">
          Find your Job now !!
        </Link> */}
      </header>
    </>
  );
};

export default Home;
