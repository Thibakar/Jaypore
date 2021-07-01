import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginHeader from "../shared/header/login_header";
import otpicon from "../../assets/01 Icons/01 Login Signup/OTPMessage.svg";
import calendericon from "../../assets/01 Icons/01 Login Signup/Callender.svg";
import backicon from "../../assets/01 Icons/01 Login Signup/back.svg";
import DownArrow from "../../assets/01 Icons/01 Login Signup/Dropdown Arrow.svg";
import { Link } from "react-router-dom";
import OTPSent from "./otp_sent";
import ShowPassword from './showPassword'
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";
import UsPinCodeModel from "./uspincodemodel";
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


class AccountSetupUs extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      mobileno:'',
      firstName: null,
      password:null,
      phone:null,
      formErrors:{
        password:" ",
        firstName: " ",
        phone:" ",
        visible: false
      }
    };
  }
  componentDidMount()
  {
    console.log(this.props)
    this.setState({
      data:this.props.location.state
    })
  }
  submit = () => {

      
    
    if (this.state.formErrors.password ==='' && this.state.firstName!=null){
  
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
            () => NavUtil.goToOtpVerification(this.state.data)
            
          );
          console.log("okokokok",  this.state.data);
          console.log("ghsajdhskjk")
        }, 1000);
      }
    );
    }
    
  };
  

  onValueChange = (data) => {
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

    formErrors.password = ''
    let value=this.state.inputvalue
    let pass = /^(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!%*#?&]{8,}/
    formErrors.password =  value.match(pass) ? "" : "Minimum 8 characters & 1 special character required";
    

    this.setState({ formErrors, [name]: data }, () => console.log(this.state));
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value ,maxLength } = e.target;
    let formErrors = { ...this.state.formErrors };
    if(name==='phone'){
      const message = value.slice(0, maxLength);
      this.setState({
        mobileno:message
      })
    }

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 8 ? "Minimum 8 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 8 ? "Minimum 8 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length > 8 ? "Minimum 8 characaters required" : "";
        break;
        case "phone":
          formErrors.phone =
            value.length < 10 ? "should be 10 numbers" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  usCodeToggle = () => {
    this.setState({
        visible: !this.state.visible
      });
  }

  closeModal = () => {
    console.log("this")
    this.props.toggleVisible();
}
toggleVisible = () => {
    console.log("this", this.state.visible);
    this.setState({
      visible: !this.state.visible
    });
  };
 


  render() {
    const { formErrors } = this.state;
    let view = this.state.loading ? <OTPSent /> : <div />;
    return (
      <React.Fragment>
        <div className="bg-light-pink">
          <LoginHeader />
          <div>
            {view}
            <div
              className={this.state.loading ? "d-none" : "align-items-center "}
            >
              <div className="container  p-t-40 p-b-30">
                <form className="login-form-center">
                  <div className="login-head">Setup your account</div>
                  <p className="email-text text-center">
                    {this.props.email}
                  </p>
                  <div className="p-account-20 ">
                    <div className="">
                      <label className="head1">Set a Password</label>

                      <ShowPassword
                        onValueChange={(data) => this.onValueChange(data)}
                      />
                       {formErrors.password.length > 0 && (
                <span className="errorMessage mt-l-10">{formErrors.password}</span>
              )}
                      
                    </div>
                    <div className="p-t-8 mt-a-15">
                      <label className="head1">
                        Full Name
                      </label>

                      <input
                        className={formErrors.firstName.length > 0 ? "error" : " email-input"}
                        // id="password"
                        type="text"
                        name="firstName"
                        required
                        placeholder="Name"
                        onChange={(this.handleChange)}
                      />
                      {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
                    </div>

                    <label className="head1 mt-2">
                        Mobile Number
                        <span className=" sign-text">(optional)</span>
                      </label>
                   <div className="row">
                  <UsPinCodeModel toggleVisible={() => this.toggleVisible()}
          visible={this.state.visible} />
                        <div className="col-3 accountSetUpUsSelectArrow" onClick={this.usCodeToggle}>
                         <img
                        className="usPinDownArrow"
                        src={DownArrow}
                        alt="sign-text"
                      />
                      <input
                        className=" text-input web-date-hide"
                        id="password"
                        type="number"
                        value="+20"
                        name="date"
                        required
                        placeholder="+20"
                        defaultValue=""
                      />
                        </div>
                        <div className="col-9 pl-0">
                        <div className="">
                      

                      <input
                        className={formErrors.phone.length > 0 ? "error" : " email-input"}
                        // id="password"
                        type="number"
                        value={this.state.mobileno}
                        name="phone"
                        maxLength='10'
                        placeholder=""
                        onChange={(this.handleChange)}
                      />
                     
                      {/* <div class="flex-container-numberpin p-t-10">
                        <div className="width-15">
                        <img
                        className="downarrow-icon "
                        src={DownArrow}
                        alt=""
                        />
                      <input
                        className=" text-input-login-countrypin "
                        id="password"
                        type=""
                        required
                        placeholder="+20"
                        />
                        </div>
                        <div className="p-l-5">
                        <input
                        className=" text-input-login-number"
                        id="password"
                        type=""
                        required
                        placeholder=""
                        /></div>
                        </div>
                         */}

                      
                    </div>
                        </div>
                        {formErrors.phone.length > 0 && (
                <p className="errorMessage ml-3">{formErrors.phone}</p>
              )}
                        <span className="sign-text">
                        <img
                          className=" otp-icon "
                          src={otpicon}
                          alt="sign-text"
                        />

                        <span className="p-l-10 p-t-8">
                          OTP will be send to your number for verification
                        </span>
                      </span>
                   </div>


                    <div className="mt20 a-rel">
                      <label className="head1">
                        Date Of Birth
                        <span className="  sign-text">(optional)</span>
                      </label>
                      <img
                        className="calender-icon "
                        src={calendericon}
                        alt="sign-text"
                      />
                      <input
                        className=" text-input web-date-hide"
                        id="password"
                        type="date"
                        name="date"
                        placeholder=""
                        defaultValue=""
                      />
                    </div>

                    <button
                      className="login-button m-t-10"
                      type="submit"
                      ref="login_cont"
                      onClick={() => this.submit()}
                    >
                      Continue
                    </button>
                    <div className="mt20">
                      <Link className="text-black" to="/login">
                        <img
                          className="back-icon-login"
                          src={backicon}
                          alt="backicon"
                        />
                        <div className=" p-l-30 a-colr-75 a-r-txt">Social Login</div>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountSetupUs;
