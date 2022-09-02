import React from "react";

import "./style.css";
const Contact =() =>{
 return (
   <>
     <div className="container">
       <div className="page page-content">
         <div className="row">
           <h1 className="mb-4 ">Let's get in touch!</h1>
           <h3>Email</h3>
           <div className="links">
             <a
               href="mailto:adetokunboogunnoiki28@gmail.com"
               target="_blank"
               rel="noreferrer"
             >
               adetokunboogunnoiki28@gmail.com
             </a>
           </div>

           <h3>Twitter</h3>
           <div className="links">
             <a
               href="https://twitter.com/the_tokunbo"
               target="_blank"
               rel="noreferrer"
             >
               @the_tokunbo
             </a>
           </div>
           <h3>Instagram</h3>
           <div className="links">
             <a
               href="https://instagram.com/tokunbo"
               target="_blank"
               rel="noreferrer"
             >
               tokunbo
             </a>
           </div>
         </div>
       </div>
     </div>
   </>
 );
}


export default Contact;