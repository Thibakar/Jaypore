import React, { isValidElement }  from "react";
import ReactDOM from "react-dom";
import lock from "../../assets/01 Icons/01 Login Signup/Lock.svg";
import facebook from "../../assets/01 Icons/01 Login Signup/Facebook.svg";
import google from "../../assets/01 Icons/01 Login Signup/Google.svg";
import tooltip from "../../assets/01 Icons/01 Login Signup/Tooltip.svg";
import LoginHeader from "../shared/header/login_header";

import EmailVerification from "./loading";
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



class Login extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      tooltip: false,
      email:"",
      formErrors:{
        email:"",
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
              () => NavUtil.goToLoginPassword()
            );
          }, 1000);
  
        }
      );
    }
    
  };

  back = () => {
    this.props.history.goBack();
  };

  updateInputValue(e) {
    if (e.target.name === "password") {
      this.setState({ password: e.target.value });
      if (e.target.value !== "") {
        this.setState({ passwordEmpty: false });
      }
    }
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
      if (e.target.value !== "") {
        this.setState({ userNameEmpty: false });
      }
    }
  }

  login(e) {
    e.preventDefault();
    //let loginUserDetails = {};
    if (this.validate()) {
      NavUtil.goToHome()
    }
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

  ontipshow = () => {
    this.setState({
      tooltip: true
    })
  }
  ontiphide = () => {
    this.setState({
      tooltip: false
    })
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  onChangeInput = event => {
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_cont);
    this.setState({email:"Enter Valid mail"})
    if (event.target.value === "") {
      continue_button_dom.style.backgroundColor = "#babcbf";
    } else {
      continue_button_dom.style.backgroundColor = "#BB4225";
    }

  };

  onClick = event => {
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_cont);
      continue_button_dom.style.backgroundColor = "#BB4225";

  };


  /*********************validation********************** */
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
    // let errMsgUser = "";
    // let errMsgPass = "";
    // if (this.state.userNameEmpty) {
    //   errMsgUser = <small className="pt-0 text-danger">Enter username</small>;
    // } else {
    //   errMsgUser = "";
    // }
    // if (this.state.passwordEmpty) {
    //   errMsgPass = <small className="pt-0 text-danger">Enter password</small>;
    // } else {
    //   errMsgPass = "";
    // }
    const { formErrors } = this.state;
    let view = this.state.loading ? <EmailVerification /> : <div />;
    return (
      <React.Fragment>
        <LoginHeader />
        <div className=" bg-light-pink p-g-al-page">
          <div>
            {view}
            <div
              className={this.state.loading ? "d-none" : "align-items-center "}
            >
              <div className="container  p-t-40 p-b-40 ">
                <form className="login-form-center">
                  <h2 className="login-head">Welcome to Jaypore</h2>

                  <p className=" sub-head text-center">
                    Get exclusive access to India's most beautiful products
                  </p>
                  <div className="p-l-b-20" style={{ paddingTop: 0 }}>
                    <button className="button-flex-google a-colr-42">
                      <img src={google} height="22" width="22" alt="" style={{ marginRight: 30, marginLeft: '-5%' }} />
                          Sign Up with Google
                    </button>
                    <button className="button-flex-facebook p-t-10">
                      <img
                        className=""
                        src={facebook}
                        height="22"
                        width="22"
                        alt=""
                        style={{ marginRight: 30 }}
                      />
                          Sign Up with Facebook

                    </button>
                    <div class="flex-container-lock">
                      <img
                        src={lock}
                        height="15"
                        width="15"
                        alt="welcom.in"
                        className="lockwidth01"
                      />

                      <span className="flextext a-colr-75">
                        We will not share anything on your wall without your
                        permission
                        </span>
                    </div>
                    <div className="text-center  or a-colr-21 a-16-txt a-r-txt">OR</div>
                    <div className="">
                      <label className="head1">Enter Email Address</label>

                      <div className='a-rel a-mb-8'>
                        <div className={this.state.tooltip ? "arrowtxt right" : 'd-none'} ><img src={tooltip} className='mt-t'/><div className='d-in-blk mg-t' style={{ lineHeight: '10px',paddingLeft:'5px' }}> Email address must have<br /><div className='tool-tip-img'>@, .com, .in</div></div></div>
                        <input
                          className={formErrors.email.length > 0 ? "error":" email-input"}
                          type="email"
                        name="email"
                          placeholder="Email"
                          // formNoValidate
                          pattern=".+@beststartupever.com"
                          onFocus={() => this.ontipshow()}
                          onBlur={() => this.ontiphide()}
                          onChange={(this.handleChange)}
                          onClick={()=>{this.onClick()}}
                          
                         
                        />
                         {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
                      </div>
                    </div>

                    <button
                      className="continue-button a-mt-8"
                      type="submit"
                      onClick={() => this.submit()}
                      id="login_continues"
                      ref="login_cont"
                    >
                      Continue
                    </button>

                    <p className="p-t-10">
                      <span className="sign-text a-colr-75">
                        By Signing Up. You are agreeing to our{" "}
                      </span>
                      <span className="terms-text a-sb-txt">Terms & Privacy Policy</span>
                    </p>
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

export default Login;
