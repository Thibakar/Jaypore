import React from "react";
import { BaseComponent } from "../common/BaseComponent";

export default class Confirmation extends BaseComponent {
  render() {
    return (
      <div className="bg-light-pink">
        <div>
          <div className="row align-items-center ">
            <div className="col-md-4 offset-md-4 m-t-100 m-b-100">
              <div className="container ">
                {/* <Form className="color-white form-container">
                  <div className="p-t-b-50">
                    <LoopCircleLoading />
                  </div>
                  <div className="p-t-10">
                    <h3 className="text-center ">Welcome Back</h3>
                  </div>

                  <h6 className="text-center p-b-100">
                    You have successfully Loggedin to your Jaypore account
                  </h6>
                </Form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
