import React from "react";
import ReactDOM from "react-dom";
import LoginHeader from "../../components/shared/header/login_header";
import backicon from "../../assets/01 Icons/01 Login Signup/back.svg";
import WelcomeBack from "./welcomeBack";
import { Link } from "react-router-dom";
import ShowPassword from "./showPassword";
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

class LoginPassword extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      inputvalue: "",
      password:null,
      formErrors:{
        password:" "
      }
          };
  }

  submit = () => {
    console.log("okokokok",this.state.formErrors.password);
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
            () => NavUtil.goToAccountSetup()
          );
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

        formErrors.password =
         data.length < 6 ? "minimum 6 characaters required" : "";
    

    this.setState({ formErrors, [name]: data }, () => console.log(this.state));
  }

  back = () => {
    this.props.history.goBack();
  };
  /*************************validation ***********/
  

  render() {
    const { formErrors } = this.state;
    let view = this.state.loading ? <WelcomeBack /> : <div />;
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
                  <h2 className="login-head a-colr-24">Login to your account</h2>
                  <p className=" sub-head-m  text-center a-colr-21">
                    shahnawaz.alam@jaypore.com
                  </p>
                  <div className="p-20">
                    <div className="">
                      <label className="head1 a-colr-21" style={{ marginTop: 14 }}>Enter Password</label>

                      <ShowPassword
                      //  onChange={this.handleChanged}
                        onValueChange={(data) => this.onValueChange(data)}
                      />
                       {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
                    </div>
                    <div className=" link-text-forgotpassword text-center a-colr-21">
                      <a className="text-black" href="/forgotpassword">
                        Forgot Password?
                      </a>
                    </div>

                    <button
                      className="login-button "
                      type="submit"
                      ref="login_cont"
                      onClick={() => this.submit()}
                    >
                      Login
                    </button>
                    <div className="mt20">
                      <Link className="text-black" to="/login">
                        <img
                          className="back-icon-login"
                          src={backicon}
                          alt="backicon"
                        />
                        <div className=" p-l-30 f-s-16 fontstyle a-colr-75 a-r-txt">Social Login</div>
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

export default LoginPassword;
