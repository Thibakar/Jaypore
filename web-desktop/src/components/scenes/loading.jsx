import React, { Component } from "react";
import { LoopCircleLoading } from "react-loadingg";
// import "../assets/css/custom.css";

export default class EmailVerification extends Component {
  render() {
    return (
      <div className="bg-light-pink p-g-al-page">
       
      <div>
        <div className="align-items-center ">
          
          <div className="container  p-t-40 p-b-40">
              <form className="login-form-center">
           
                      <div className=" text-center">
                        <div className="loading-div">
                        <LoopCircleLoading />
                        </div>
                          
                          <div className="p-t-150">
                          <p className="text-center font-15">An email verification link has been successfully sent to</p>
                          <h5 className="text-center p-b-100 m-15">
                              <strong>shahnawaz.alam@jaypore.com</strong>
                          </h5>
                      </div>
                      </div>
                 </form>
            </div>
          </div>
        </div>
      </div>
   
    );
  }
}
