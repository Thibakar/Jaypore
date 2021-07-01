import React from "react";
import lock from "../../assets/01 Icons/01 Login Signup/Lock.svg";
import facebook from "../../assets/01 Icons/01 Login Signup/Facebook.svg";
import google from "../../assets/01 Icons/01 Login Signup/Google.svg";
import ShowPassword from "./showPassword";
import { BaseComponent } from "../common/BaseComponent";
export default class SignUpLanding extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: "",
      reEnterNewPassword: ""
    };
  }

  newPassword = e => {
    this.setState({
      newPassword: e.target.value
    });
  };
  reEnterNewPassword = e => {
    this.setState({
      reEnterNewPassword: e.target.value
    });
  };
  render() {
    return (
      <div className="color-pink">
        <div className="align-items-center container p-l-500 p-t-100 ">
          <form className="color-white p-t-0 p-l-r-0">
            <div class="button-area p-l-r-0">
              <a className="p-t-30" href="#">
                Log In
              </a>
              <a className="p-t-30" href="#">
                Sign Up
              </a>
            </div>
            <div className="p-l-r-30 p-t-30">
              <button className="button-flex-google ">
                <div className="flex-container-google ">
                  <div className="p-l-50 ">
                    <img src={google} height="26" width="26" alt="" />
                  </div>
                  <div className="p-l-37 f-s-20 f-c-black">
                    Sign Up with Google
                  </div>
                </div>
              </button>
              <button className="button-flex-facebook ">
                <div className="flex-container-facebook ">
                  <div className="p-l-50 ">
                    <img src={facebook} height="26" width="26" alt="" />
                  </div>
                  <div className="p-l-37 f-s-20 f-c-white">
                    Sign Up with Facebook
                  </div>
                </div>
              </button>
              <div class="flex-container-lock">
                <div>
                  <img src={lock} height="16" width="16" alt="" />
                </div>
                <div>
                  we will not share anything on your wall without your
                  permission
                </div>
              </div>
              <div className="text-center p-t-b-20">OR</div>
              <label>Enter Email Address</label>
              <div class="emailBox">
                <br />
                <input
                  className="input-email"
                  id="emailAddress"
                  type="email"
                  required
                  placeholder=""
                  pattern=".+@beststartupever.com"
                />
              </div>
              <label>Enter Password</label>
              <ShowPassword />
              <button className="button-continue" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
