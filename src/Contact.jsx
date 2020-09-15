import React from "react";
import { useState } from "react";


const Contact =() => {
    const [Data, setData]= useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    
    });

    const InputEvent = (event) => {
     const { name, value }= event.target;

     setData((preVal) => {
         return { 
               ...preVal,
               [name] : value,
         };
     });
    };

const formSubmit =(e) => {
    e.preventDefault();
    alert (
        `My name is ${Data.fullname}. My moblie number is ${Data.phone} and
        email is ${Data.email}, Here is what I want to say ${Data.msg}`
        );
};

    return (
        <>
      <div className="my-3">
          <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit={formSubmit}>
       <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">FullName
    </label>
    <input type="text" 
    className="form-control"
    id="exampleFormControlInput1" 
    name="fullname"
    value={Data.fullname}
    onChange={InputEvent}
    placeholder="Enter youre name" />
  </div>

  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Phone Number
    </label>
    <input type="number" 
    className="form-control"
    id="exampleFormControlInput1" 
    name="phone"
    value={Data.phone}
    onChange={InputEvent}
    placeholder="Mobile Number" />
  </div>

  <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address
    </label>
    <input type="email" 
    className="form-control"
    id="exampleFormControlInput1" 
    name="email"
    value={Data.email}
    onChange={InputEvent}
    placeholder="name@example.com" />
  </div>

  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Message
    </label>
    <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        name="msg"
        value={Data.msg}
        onChange={InputEvent}

    ></textarea>
    
  </div>
  <div className="col-12">
  <button className="btn btn-outline-primary mb-5" type="submit">Submit form</button>  
  </div>
                  </form>
              </div>
          </div>
      </div>
        </>
    );
};
export default Contact;