import React, { Component } from "react";
import lock from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Lock.svg";
import facebook from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Facebook.svg";
import google from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Google.svg";
import "../../assets/css/ayush.css";


class SignLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            name: "thiba",
            tabValue: 'Sign Up'
        };
    }

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
            this.props.history.push("/dashboard");
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
                //formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    onchangeTab = (value) => {
        this.setState({
            tabValue: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="margin-s-20 margin-m-20">
                    <div className='tab-login-sign'>
                        <button className={this.state.tabValue === 'Log In' ? 'white-back-color btn-radius' : 'lightgrey btn-radius'}
                            onClick={() => this.onchangeTab('Log In')}>
                            <h5 className='brandcolor-txt sub-heading-txt '>Log In</h5>
                        </button>
                        <button className={this.state.tabValue === 'Sign Up' ? 'white-back-color btn-radius' : 'lightgrey btn-radius'}
                            onClick={() => this.onchangeTab('Sign Up')}>
                            <h5 className='brandcolor-txt sub-heading-txt'>Sign Up</h5>
                        </button>
                    </div>
                    <div className='right-center'>
                        <h1 className='brandname' style={{ fontFamily: 'WorkSans-Light' }}>JAYPORE</h1>
                        <h2 className='sub-heading mt-30'>Welcome To Jaypore</h2>
                        <h3 className='heading-2 mt-20'> Get exclusive access to India's most beautiful products</h3>
                        <button className='btn-radius lightgrey mt-30'>
                            <div className='row-div'>
                                <img src={google} alt="google" />
                                <h3 className='heading-2 black-color ml-20'>Sign In with Google</h3>
                            </div>
                        </button>
                        <button className='btn-radius fb-color mt-10'>
                            <div className='row-div'>
                                <img src={facebook} alt="facebook" />
                                <h3 className='heading-2 white-color ml-20'>Sign In with Facebook</h3>
                            </div>
                        </button>
                        <div className='row-div'>
                            <img src={lock} alt="lock" />
                            <p className=' black-color ml-10' style={{ marginTop: '13px' }}>We will not share anything on the wall without your permission</p>
                        </div>
                        <h3 className='heading-2 mt-30'>Or</h3>

                    </div>
                    <div className='left-align'>
                        <h3 className='heading-2 mt-30'>Enter Email Address</h3>
                    </div>
                    <input type="text" className='btn-radius'></input>
                    <div className='left-align'>
                        <h3 className='heading-2 mt-30'>Enter Password</h3>
                    </div>
                    <input type="text" className='btn-radius'></input>
                    
                        <div className={this.state.tabValue==='Log In'?'right-center':'d-none'}>
                            <h2 className='heading-2 text-underline mt-10'>Forgot Password?</h2>
                        </div>
                    
                    <button className='btn-radius grey-button mt-10'>
                        <h3 className='sub-heading white-color '>{this.state.tabValue}</h3>
                    </button>
                    <div className='wrap-content'>
                        <p className='heading-2 mt-20'>By Signing Up. You are agreeing to our <b>Terms & Privacy Policy</b>
                        </p>

                    </div>

                </div>

            </div>

        );
    }
}

export default SignLogin;
