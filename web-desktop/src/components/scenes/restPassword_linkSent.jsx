import React from 'react'
import { LoopCircleLoading } from "react-loadingg";
import { BaseComponent } from '../common/BaseComponent';
//import "../assets/css/custom.css";
// import "../assets/css/loginSignUp.css"

export default class ResetPasswordLinkSent extends BaseComponent {
    render() {
        return (
            
            <div>

        <div>
          <div className="align-items-center p-g-al-page ">

            <div className="container  p-t-40 p-b-40">
              <form className="login-form-center">
                <div className=" text-center">
                <div className="loading-div">
                  <LoopCircleLoading />
                  </div>
                  <div className="p-t-150">
                    <h4 className="text-center bold">Reset Password</h4>
                    <p className="text-center p-b-100 a-14-txt font-nm">
                      <span className='font-nk'>
                    Reset Password link has been successfully sent to</span> <span className='mail-text'>shahnawaz.alam@jaypore.com</span>
                            </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
