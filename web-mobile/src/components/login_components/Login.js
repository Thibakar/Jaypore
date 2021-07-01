import React, { Component } from "react";
import lock from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Lock.svg";
import facebook from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Facebook.svg";
import google from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/Google.svg";
import "../../assets/css/ayush.css";
import { Link } from 'react-router-dom'
import BasicModal from '../common/BasicModal'
import BrandLogo from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            name: "thiba",
            loading: false,
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

    submit = () => {
        this.setState({
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                }, () => this.props.history.push('/loginPassword'))
            }, 1500);
        })

    }

    componentDidMount() {
        console.log("ok", this.props)
    }

    // onChangeInput = (event) => {
    //     let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_continue)
    //     if (event.target.value == '') {
    //         continue_button_dom.style.backgroundColor = '#babcbf'
    //     }
    //     else {
    //         continue_button_dom.style.backgroundColor = '#BB4225'
    //     }
    // }

    render() {
        return (
            <div className="container-div r-txt">
                <BasicModal
                    visible={this.state.loading}
                    subTitle='shahnawaz.alam@jaypore.com'
                    heading=''
                    title='An email verification link has been successfully sent to'
                />
                <div className="margin-s-20 margin-m-20">
                    <div className="right-align">
                        <Link to={{ pathname: '/', state: 'all' }} params={{ value: "all" }} className='skip-link' activeClassName="active">
                            <span className="m-txt font-14">SKIP</span>
                        </Link>
                    </div>
                    <div className='right-center'>
                        <img src={BrandLogo} alt="Menubar" height='20px' />
                        <h2 className='font-18 mt-24 sb-txt colr-21'>Welcome To Jaypore</h2>
                        <h3 className='mt-10 r-txt font-14 colr-42'> Get exclusive access to India's most beautiful<br /> products</h3>
                        <button className='btn-radius white-back lightgrey mt-30'>
                            <div className='row-div m-r-20'>
                                <img src={google} alt="google" />
                                <div className='colr-42 ml-20 m-txt font-16'
                                    style={{ marginBottom: '0px' }}
                                >Sign In with Google</div>
                            </div>
                        </button>
                        <button className='btn-radius fb-color mt-10'>
                            <div className='row-div'>
                                <img src={facebook} alt="facebook" />
                                <div className='white-color ml-20 m-txt font-16'
                                    style={{ marginBottom: '0px' }}
                                >Sign In with Facebook</div>
                            </div>
                        </button>
                        <div className='row-div-start'>
                            <img src={lock} alt="lock" className='mt-8-mb-a' />
                            <p className='ml-10 mt-8-mb-a left-align r-txt font-new colr-42' >We will not share anything on your wall without your permission</p>
                        </div>
                    </div>
                    <div className='left-align'>
                        <h3 className='mt-30 m-txt font-14 colr-21'>Or Enter Email Address</h3>
                    </div>
                    <input type="text" id='email_input' className='btn-radius ft-bld'
                        
                    ></input>

                    <button className='btn-radius brandcolor m-t-8' id='login_continue'
                        onClick={() => this.submit()} ref='login_continue'
                    ><span className='white-color m-txt font-16'>Continue</span>
                    </button>
                    <div className='wrap-content'>
                        <p className='mt-10 r-txt font-new left-align  colr-21'>By Signing Up. You are agreeing to our <span className='sb-txt black-color-42'>Terms & Privacy Policy</span>
                        </p>

                    </div>

                </div>

            </div>

        );
    }
}

export default Login;
