import React from "react";
import backicon from "../../assets/01 Icons/01 Login Signup/back.svg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import ShowPassword from "./showPassword";
import LoginHeader from "../shared/header/login_header";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default class ResetPassword extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: "",
      reEnterNewPassword: "",
      password:null,
      formErrors:{
        password:" "
      }
    };
  }

  submit = () => {
    console.log("okokokok");
    if (this.state.formErrors.password ===''){

    this.setState(
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              loading: false
            },
            () => NavUtil.goToPasswordChangedMessage()
          );
        }, 1000);
      }
    );
    }
  };

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

  onValueChange = (data) => {
    console.log(data)
    this.setState({
      inputvalue: data
    })
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_cont);
    if (data === "") {
      continue_button_dom.style.backgroundColor = "#babcbf";
    } else {
      continue_button_dom.style.backgroundColor = "#BB4225";
    }
    let formErrors = { ...this.state.formErrors };

        formErrors.password =
         data.length < 6 ? "minimum 6 characaters required" : "";
    

    this.setState({ formErrors, [name]: data }, () => console.log(this.state));
  }


  render() {
    const { formErrors } = this.state;

    return (
      <React.Fragment>
        <LoginHeader />
        <div className="bg-light-pink p-g-al-page">
          <div className="container  p-t-40 p-b-40">
            <div className="login-form-center login-passwordform">
              <h2 className="login-head">Reset Password</h2>

              <div className="p-20">
                <div className="">
                  <label className="head1">Set a New Password</label>
                  <ShowPassword
                    onValueChange={(data) => this.onValueChange(data)}
                  />
                   {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}

                  <div className=" ">
                    <label className="head1">Re-enter New Password</label>
                    <ShowPassword
                      onValueChange={(data) => this.onValueChange(data)}
                    />
                  </div>
                  {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}

                  <button
                    className="login-button"
                    ref="login_cont"
                    type="submit"
                    onClick={() => this.submit()}
                  >
                    Reset Password
              </button>
                  <Link className="text-black" to="/login">
                    <img
                      className="back-icon-login"
                      src={backicon}
                      alt="backicon"
                    />
                    <div className=" p-l-30 f-s-16">Social Login</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
