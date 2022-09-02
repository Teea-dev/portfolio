import React from 'react';
import {FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import "./style.css";
const Footer =()=>{
    return (
      <>
        <footer className="container">
          <div className="contact d-none d-md-flex justify-content-between">
            <div>
              <h4>Work Enquiry</h4>
              <p className="text-muted">Let's Work together</p>
            </div>
            <div>
              <a href="/contact.html" className="mt-4 btn btn-button">
                {" "}
                Contact me
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <a
              href="mailto:adetokunboogunnoiki28@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="email-link"
            >
              adetokunboogunnoki28@gmail.com
            </a>
          </div>

          <div className="socials d-flex justify-content-center">
            <a
              href="https://instagram.com/ogunnoiki_tokunbo"
              target="_blank"
              rel="noreferrer"
              title="instagram-profile"
            >
             <FaInstagram/>
            </a>
            <a
              href="https://github.com/Teea-dev/"
              target="_blank"
              rel="noreferrer"
              title="github-profile"
            >
              <FaGithub/>
            </a>
            <a
              href="https://twitter.com/the_tokunbo"
              target="_blank"
              rel="noreferrer"
              title="twitter-profile"
            >
              <FaTwitter/>
            </a>
          </div>
        </footer>
        <p className="text-center mt-5">
          This website was coded by Ogunnoiki Adetokunbo,and it is{" "}
          <a
            href="https://github.com/Teea-dev/portfolio-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
        </p>
      </>
    );
}
export default Footer;