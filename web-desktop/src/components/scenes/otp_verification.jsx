import React from "react";
import ReactDOM from "react-dom";
import LoginHeader from "../shared/header/login_header";
import WelcomeMessage from "./welcome_message";
import backicon from "../../assets/01 Icons/01 Login Signup/back.svg";
import { Link } from "react-router-dom";
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



export default class OTPVerification extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      otp:null,
      formErrors:{
        otp:" ",
      }

    };
  }


  submit = () => {
    console.log("okokokok")
    if (this.state.formErrors.otp ===''){
   
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          loading: true
        }, () => NavUtil.goToOneLastStep())
      }, 1000);
    });
  }

  }


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
    let formErrors = { ...this.state.formErrors };

        formErrors.otp =
         e.length < 6 ? "OTP should not match" : "";
    

    this.setState({ formErrors, [name]: e }, () => console.log(this.state));

  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 8 ? "minimum 8 characaters required" : "";
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
        case "phone":
          formErrors.phone =
            value.length < 6 ? "should be 10 numbers" : "";
          break;
          case "otp":
            formErrors.otp =
              value.length < 4 ? "should not be same" : "";
            break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
    let view = this.state.loading ? <WelcomeMessage /> : <div />
    return (

      <React.Fragment>
        <div className="bg-light-pink p-g-al-page">
          <LoginHeader />
          <div>
            {/* <WelcomeMessage/> */}

            {view}




            <div className={this.state.loading ? 'd-none' : "align-items-center "}>
              <div className="container  p-t-40 p-b-40">
                <div className="login-form-center login-passwordform">
                  <h2 className="login-head">OTP Verification</h2>
                  <p className="email-text text-center">
                    Enter the OTP to verify your mobile number 9944880268
                  </p>
                  <div className="a-pl-pr-20">
                    <div className="">
                      <label className="head1">Enter OTP</label>


                      <input
                        className=" email-input"
                        id="password"
                        type="text"
                        name="otp"
                        required
                        placeholder=""
                        pattern=".+@beststartupever.com"
                        onChange={(e) => this.onValueChange(e)}
                        onChange={(this.handleChange)}
                      />
                       {formErrors.otp.length > 0 && (
                <span className="errorMessage">{formErrors.otp}</span>
              )}
                      <p className="font-12">1:00</p>
                    </div>

                    <button className="login-button" type="submit"
                      ref="login_cont"
                      onClick={() => this.submit()}>
                      Continue
                    </button>
                    <div className="mt20">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
