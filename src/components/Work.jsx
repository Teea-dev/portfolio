import React from "react";
import "./style.css";
import Yoghurt from '../assets/images/yoghurt.png';
import Weather from '../assets/images/weather.png';
import Dictionary from '../assets/images/dictionary.png';
import Advice from '../assets/images/desktop-design.jpg';
const Work =() =>{
 return (
   <>
     <div className="container page">
       <div className="page-content">
         <h1 className="mb-4">Take a look at what I've been working on!</h1>
       </div>
       <div className="row">
         <div className="col-md-6">
           <img src={Yoghurt} className="img-fluid round mb-4" alt="yoghurt" />
           <h3 className="text-center">Yogurt Landing Page</h3>
           <p className="text-muted">Built with Html and Css</p>
         </div>
         <div className="col-md-6">
           <img src={Dictionary} alt='dictionary' className="img-fluid round mb-4" />
           <h3 className="text-center">Dictionary App</h3>
           <p className="text-muted">
             Built using Html, an active API,advanced Css and React
           </p>
         </div>
         <div className="col-md-6">
           <img src={Weather} className="img-fluid round mb-4" alt="weather" />
           <h3 className="text-center">Weather App</h3>
           <p className="text-muted">
             Built usiing Html, an active API and advanced Css and Javascript
           </p>
         </div>
         <div className="col-md-6">
           <img src={Advice} className="img-fluid mb-4" alt="advice" />
           <h3 className="text-center">Advice Generator App</h3>
           <p className="text-muted">
             Built using Html,an active API,advanced Css and React
           </p>
         </div>
       </div>
      
     </div>
   </>
 );
}

export default  Work;