import{ React, useEffect, useRef} from 'react';
import Logo from '../assets/images/logo.png';
import Small from '../assets/images/logo-small.jpg';
import Yoghurt from "../assets/images/yoghurt.png";
import Weather from "../assets/images/weather.png";
import Dictionary from "../assets/images/dictionary.png";
import Advice from "../assets/images/desktop-design.jpg";
import './style.css';
import {gsap,Power4 } from 'gsap';
import { useIntersection } from 'react-use';

const Home =()=>{
   
const heroRef = useRef(null);
const yoghurtRef =useRef(null);
const paragraphRef = useRef(null);
const dictionaryRef =useRef(null);
const adviceRef = useRef(null);

//ANIMATION FOR THE LAST PARAGRAPH
const adviceIntersection = useIntersection(adviceRef, {
  root: null,
  rootMargin: "0px",
  threshold: 1,
});

const adviceIn = () => {
  gsap.to(adviceRef.current, {
    duration: 1,
    opacity: 1,
    y: -30,
    delay: 1.5,
    ease: Power4.easeOut,
    stagger: {
      amount: 0.3,
    },
  });
};
const adviceOut = () => {
  gsap.from(adviceRef.current, {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: Power4.easeOut,
  });
};

adviceIntersection && adviceIntersection.intersectionRatio < 1
  ? adviceOut(".advice")
  : adviceIn(".advice");
// ANIMATION FOR THE THIRD PARAGRAPH
const gsapIntersection = useIntersection(dictionaryRef, {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
});

const goIn = () => {
  gsap.to(dictionaryRef.current, {
    duration: 1,
    opacity: 1,
    y: -30,
    delay: 1,
    ease: Power4.easeOut,
    stagger: {
      amount: 0.3,
    },
  });
};
const goOut = () => {
  gsap.to(dictionaryRef.current, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: Power4.easeOut,
  });
};

gsapIntersection && gsapIntersection.intersectionRatio < 0.3
  ? goOut(".go")
  : goIn(".go");

// ANIMATION FOR THE SECOND PARAGRAPH
const intersect = useIntersection(paragraphRef, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

const comeIn = () => {
  gsap.to(paragraphRef.current, {
    duration: 1,
    opacity: 1,
    y: -30,
    delay: 1,
    ease: Power4.easeOut,
    stagger: {
      amount: 0.3,
    },
  });
};
const comeOut = () => {
  gsap.to(paragraphRef.current, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: Power4.easeOut,
  });
};

intersect && intersect.intersectionRatio < 0.5
  ? comeOut(".fade")
  : comeIn(".fade");
// ANIMMATION FOR THE FIRST PARAGRAPH
const intersection = useIntersection(yoghurtRef, {
  root:null,
  rootMargin:'0px',
  threshold:0.5
});

const fadeIn =()=>{
  gsap.to(yoghurtRef.current, {
    duration: 1,
    opacity: 1,
    y: -30,
    delay:1,
    ease: Power4.easeOut,
    stagger: {
      amount: 0.3
    }
  });
}
const fadeOut = () => {
  gsap.to(yoghurtRef.current, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: Power4.easeOut,
   
  });
};


intersection && intersection.intersectionRatio < 0.5 ? fadeOut(".fadeIn") : fadeIn('.fadeIn');
   useEffect(()=>{
     gsap.to(heroRef.current, {opacity:0,delay:1.5, duration :1
    })
     
   })


   return (
     <>
       <div className="container">
         <nav className="d-flex justify-content-between nav-bar">
           <a href="/">
             <img src={Logo} className="logo d-none d-md-block" alt="logo" />
             <img
               src={Small}
               className="logo d-block d-md-none small-logo"
               alt="logo"
             />
           </a>
           <a href="/" className="toggle-button">
             <span className="bar"></span>
             <span className="bar"></span>
             <span className="bar"></span>
           </a>

           <div className="nav-links">
             <ul>
               <li>
                 <a href="/" className="active " title="Homepage">
                   Home
                 </a>
               </li>
               <li>
                 <a href="/about.html" title="About-page">
                   About
                 </a>
               </li>
               <li>
                 <a href="/work.html" title="Work-page">
                   Work
                 </a>
               </li>
               <li>
                 <a href="/contact.html" title="Contact-page">
                   Contact
                 </a>
               </li>
             </ul>
           </div>
         </nav>
       </div>
       <div ref={heroRef} className="top mb-5">
         <p>Hi I am</p>
         <h1>Ogunnoiki Adetokunbo</h1>
         <h2 className="mb-5">Front-end Developer,based in Nigeria</h2>
         <div>
           <a href="/work.html" className="btn btn-button">
             {" "}
             Get started
           </a>
         </div>
       </div>
       <p className="m-5">
         Featured Project which my best projects be choice to show
       </p>
       <div className="container">
         <div className="row" data="#33EACE">
           <div className="col d-none d-lg-block">
             <img src={Yoghurt} alt="yogurt" className="img-fluid" />
           </div>
           <div className="col">
             <div ref={yoghurtRef} className="project fadeIn">
               <h2 className="mb-5">Yogurt Landing Page</h2>
               <p className="mb-5 text-muted">
                 I entered the world of front-end development by gaining some
                 knowledge in HTML, CSS, and JavaScript. I used my knowledge of
                 these languages, along with my new skills in VS Code, to build
                 a landing page about Yogurt. The page utilizes JavaScript
                 functions to create user interaction.
               </p>
               <a href="/work.html" className="btn btn-page mb-5">
                 View detail project
               </a>
             </div>
           </div>
         </div>
         <div className="row " data="#7BC2FF">
           <div className="col">
             <div ref={paragraphRef} className="fade project">
               <h2 className="mb-5">Weather App</h2>
               <p className="mb-5 text-muted">
                 I built a Vanilla JavaScript weather app in SheCodes Plus, an
                 advanced 8-week JavaScript coding workshop. Building upon my
                 previously-gained knowledge, I also became skilled in
                 Bootstrap, API’s, real-life development workflow, hosting, and
                 advanced JavaScript. I combined all of these skills to create a
                 fully-functioning weather app.
               </p>
               <a
                 href="https://glittering-piroshki-cf285d.netlify.app/"
                 target="_blank"
                 className="btn btn-page mb-5"
                 rel="noreferrer"
               >
                 View detail project
               </a>
             </div>
           </div>
           <div className="col d-none d-lg-block">
             <img src={Weather} alt="weather" className="img-fluid" />
           </div>
         </div>
         <div className="row " data="#33EACE">
           <div className="col d-none d-lg-block">
             <img
               src={Dictionary}
               alt="dictionary"
               className="img-fluid"
             />
           </div>
           <div className="col">
             <div ref={dictionaryRef} className="go project">
               <h2 className="mb-5">Dictionary App</h2>
               <p className="mb-5 text-muted">
                 I immersed myself in React development in SheCodes React. I
                 used my knowledge of this highly-demanded framework to build a
                 working dictionary app incorporating coding best practices,
                 along with the most popular tools and technologies
               </p>
               <a
                 href="https://deft-belekoy-1b7efc.netlify.app/ "
                 target="_blank"
                 rel="noreferrer"
                 className="btn btn-page"
               >
                 View detail project
               </a>
             </div>
           </div>
         </div>
         <div className="row">
           <div className="col">
             <div ref={adviceRef} className=" advice project">
               <h2 className="advice">Advice generator</h2>
               <p className="mb-5 text-muted">
                 Built this app using React and integrated with the API.This web
                 application randomly generates advices when you click on the
                 cube below.
               </p>
               <a
                 href="https://stupendous-biscotti-35bc52.netlify.app/"
                 target="_blank"
                 className="btn btn-page"
                 rel="noreferrer"
               >
                 View detail project
               </a>
             </div>
           </div>

           <div className=" col d-none d-lg-block">
             <img src={Advice} alt="advice app" className="img-fluid" />
           </div>
         </div>
       </div>
     </>
   );
}

export default Home;