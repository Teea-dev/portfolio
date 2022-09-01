import React from 'react';
import "./style.css";
const Footer =()=>{
    return(
        <>
         <footer className="container">
        <div className="contact d-none d-md-flex justify-content-between">
          <div>
            <h4>Work Enquiry</h4>
            <p className="text-muted">Let's Work together</p>
          </div>
          <div>
            <a href="/contact.html" className="mt-4 btn btn-button"> Contact me</a>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <a href="mailto:adetokunboogunnoiki28@gmail.com" className="email-link"
            >adetokunboogunnoki28@gmail.com</a
          >
        </div>

        <div className="socials d-flex justify-content-center">
          <a
            href="https://inatagram.com/ogunnoiki_tokunbo" target="_blank"
            title="instagram-profile"
          >
            <i className="fab fa-instagram"></i
          ></a>
          <a href="https://github.com/Teea-dev/" target="_blank" title="github-profile">
            <i className="fab fa-github"></i
          ></a>
          <a href="https://twitter.com/the_tokunbo" target="_blank" title="twitter-profile">
            <i className="fab fa-twitter"></i
          ></a>
        </div>
      </footer>
              <p className="text-center mt-5">This website was coded by Ogunnoiki Adetokunbo,and it is <a href="https://github.com/Teea-dev/portfolio-project" target="_blank">open-sourced</a>  </p>
    
   
        </>
    );
}
export default Footer;