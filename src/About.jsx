import React from "react";
import web from "../src/images/img11.png";
//import { NavLink } from "react-router-dom";
import Common from './Common';



const About =() => {
    return (
        <>
        <Common  name=' Welcome to About page ' imgsrc={web} visit="/contact" btnname="Contact Now" />
        </>
    );
};
export default About;