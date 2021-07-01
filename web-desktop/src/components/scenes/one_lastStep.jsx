import React, { Component } from 'react'
import LoginHeader from '../shared/header/login_header';
import WelcomeMessage from './welcome_message';
import backicon from "../../assets/01 Icons/01 Login Signup/back.svg";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
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




export default class OneLastStep extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email:"",
      formErrors:{
        email:" ",
      }
    };
  }


  submit = () => {
    console.log("okokokok")
    if (this.state.formErrors.email===''){
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
        this.setState({
          loading: false
        }, () => NavUtil.goToHomeMain())
      }, 1000);
    });
  }

  }

  back = () => {
    this.props.history.goBack();
  }
  validate() {
    let fields = this.state.fields;
    let errors = {};
    // let formIsValid = true;

    if (!fields["email"]) {
      //formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        this.formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
  }
  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
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
  }

  onClick = event => {
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_cont);
      continue_button_dom.style.backgroundColor = "#BB4225";

  };
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
    let view = this.state.loading ? <WelcomeMessage /> : <div />

    return (
      <React.Fragment>
        <div className="bg-light-pink">
          <LoginHeader />
          {view}
          <div>
            <div className={this.state.loading ? 'd-none' : "align-items-center "}>
              <div className="container  p-t-40 p-b-40">
                <div className="login-form-center one-last-step-form">
                  <h2 className="login-head">One last step</h2>
                  <p className="font-14 text-center p-t-5">
                    We do not have your email address with us. You must fill email address to complete your Sign Up
                    </p>
                  <div className="p-20">
                    <div className="">
                      <label className="head1">Email Address</label>


                      <input
                        className=" email-input"
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder=""
                        pattern=".+@beststartupever.com"
                        // onChange={(e) => this.onValueChange(e)}
                        onClick={() => this.onClick()}
                        onChange={(this.handleChange)}
                      />
                       {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
                    </div>
                    <button className="login-button" type="submit"
                      ref="login_cont"
                      onClick={() => this.submit()}>
                      <p className="finish-sign-up"
                      >  Finish Sign Up</p>
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


// <h3 className="text-center bold">One Last Step</h3>
//                             <h5 className="text-center ">
//                                 We do not have your email address with us. You must fill email address to complete your Sign Up
//                             </h5>