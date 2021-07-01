import React  from "react";
import { LoopCircleLoading } from "react-loadingg";
import { BaseComponent } from "../common/BaseComponent";

export default class OTPSent extends BaseComponent {
    render() {
        return (
            <div>
       
            <div>
              <div className="align-items-center ">
              <div className="container  p-t-40 p-b-40">
              <form className="login-form-center">
                 
                            <div className=" text-center">
                            <div className="loading-div">
                                <LoopCircleLoading />
                                </div>
                                <div className="p-t-150">
                                <h4 className="text-center bold">OTP Sent</h4>
                            <p className="text-center p-b-100">
                                OTP has been successfully sent to<strong> 9844667596</strong>
                            </p>
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