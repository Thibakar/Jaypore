import React, { Component } from 'react';
import { LoopCircleLoading } from "react-loadingg"

class WelcomeBack extends Component {
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
                    <h3 className="text-center bold">Welcome Back</h3>
                    <p className="text-center p-b-100">
                      You have successfully Loggedin  to your Jaypore account
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

export default WelcomeBack;