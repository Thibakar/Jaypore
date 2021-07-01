import React from 'react'
import backicon from "../../assets/01 Icons/01 Login Signup/back.svg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import LoginHeader from "../shared/header/login_header";
import ResetPass from "./restPassword_linkSent";
import { BaseComponent } from '../common/BaseComponent';
import { NavUtil } from '../common/navutil';
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


export class ForgotPassword extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: "",
      reEnterNewPassword: "",
      email:"null",
      formErrors:{
        email:" ",
      }
    };
  }

  submit = () => {
    console.log("okokokok");
    if (this.state.formErrors.email===''){

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
            () => NavUtil.goToResetPassword()
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

  onValueChange = (e) => {
    console.log(e)
    this.setState({
      inputvalue: e.target.value
    })
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_cont);
    if (e.target.value === "") {
      continue_button_dom.style.backgroundColor = "#babcbf";
    } else {
      continue_button_dom.style.backgroundColor = "#BB4225";
    }
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

 

  render() {
    const { formErrors } = this.state;

    let view = this.state.loading ? <ResetPass /> : <div />;
    return (
      <React.Fragment>
        <div className="bg-light-pink">
          <LoginHeader />
          <div className="bg-light-pink p-g-al-page">
            {view}
            <div
              className={this.state.loading ? "d-none" : "align-items-center "}
            >
              <div className="container  p-t-40 p-b-40">
                <div className="login-form-center login-passwordform">
                  <h2 className="login-head">Forgot your password?</h2>
                  <p className=" sub-head  text-center">
                    Enter your registered email below to receive password reset instruction
                      </p>
                  <div className="a-pl-pr-20">
                    <div className="">
                      <label className="head1">Enter Email Address</label>
                              <div>
                                                      <input
                        className=" email-input"
                        type="email"
                        name="email"

                        required
                        placeholder=""
                        pattern=".+@beststartupever.com"
                        onChange={(e) => this.onValueChange(e)}
                        onChange={(this.handleChange)}

                      />
                      
                       {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
                      </div>
                      <button
                        className="login-button m-t-10 a-pl-pr-20"
                        type="submit"
                        ref="login_cont"

                        onClick={() => this.submit()}
                      >
                        Send
                        </button>
                      <Link className="text-black" to="/login">
                        <img
                          className="back-icon-login"
                          src={backicon}
                          alt="backicon"
                        />
                        <div className=" p-l-30 f-s-16">Go back</div>
                      </Link>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment >
    )
  }
}

export default ForgotPassword
