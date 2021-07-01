import React from 'react';
import {LoopCircleLoading} from "react-loadingg"
import { BaseComponent } from '../common/BaseComponent';
class WelcomeMessage extends BaseComponent {
  render() {
    return (
      <div>
       
        <div className="bg-light-pink">
          <div className="align-items-center p-g-al-page ">
           
            <div className="container  p-t-40 p-b-40">
              <form className="login-form-center">
             
                        <div className=" text-center">
                        <div className="loading-div">
                            <LoopCircleLoading />
                            </div>
                            <div className="p-t-150">
                            <h3 className="text-center bold">Welcome to JayPore</h3>
                            <p className="text-center p-b-100">
                                You have successfully created your JayPore account
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

export default WelcomeMessage;