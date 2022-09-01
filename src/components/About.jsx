import React from "react";
import './style.css';
import Image from '../assets/images/mine.jpg'

const About =() =>{
return (
  <>
    <div className="container page">
      <div className="row">
        <div className="col-lg-6">
          <div className="page-content">
            <p className="mb-5 text-muted">
              I'm a 20 year old student at the university of Ibadan currently studying Mathematics.
              As i have learnt as a self taught developer, I've worked along side designers and other developers
              who have impacted in me the bestpractices in writing codes.
              I’m currently seeking new opportunities in front-end development.
              I’m open to work remotely and have flexible hours. I have
              practical knowledge and usage of JavaScript and React.
            </p>
             <h2>My Skills</h2>
             <ul>
              <li>React</li>
              <li>Javascript ES6</li>
              <li>HTML& CSS</li>
              <li> Bootstrap</li>
              <li>Git</li>
             </ul>
            <a
              href="https://resume.io/r/GidfYdwNG"
              target="_blank"
              className="btn btn-button"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={Image} alt="photo" className="img-fluid rounded" />
        </div>
      </div>
     
    </div>
  </>
);
}

export default  About;