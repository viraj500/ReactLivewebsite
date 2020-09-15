import React from "react";
//import web from "../src/images/img2.png";
import { NavLink } from "react-router-dom";



const Common =(props) => {
    return (
        <>
       <section id="header" className="d-flex align-content-center">
           <div className="container-fluid ">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row">
                       <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h2> 
                            {props.name}   
                          <strong className="Brand-name"> S.V.H </strong> 
                           </h2>
                           <h3 className="my-3">
                               We are the team talented devloper making wesites
                           </h3>
                           <div className="mt-3">
                            <NavLink to = {props.visit}
                             className= "btn-get-started"> 
                            {props.btnname}
                            </NavLink>
                           </div>
                       </div>

                       <div className="col-lg-6 order-1 order-lg-2 header-img">
                           <img src={props.imgsrc} className="img-fluid animated" alt="home img" /> 
                           </div>
                       </div>

                   </div>
               </div>
           </div>

       </section>
        </>
    );
};
export default Common;