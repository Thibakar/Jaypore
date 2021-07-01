import React, { Component } from 'react'
import OTPMessage from "../../assets/Jaypore Assets/01 Icons/01 Login Signup/OTPMessage.svg";
import "../../assets/css/ayush.css";
import ReactDOM from 'react-dom'
import BasicModal from '../common/BasicModal'
import BrandLogo from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import Back from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg'
import CalenderLogo from '../../assets/Jaypore Assets/01 Icons/01 Login Signup/Callender.svg'
import ShowPassword from './showPassword'

export class SetAccounts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            password:'',
            name:'',
            formErrors:{
                password:'',
              }
        };
    }


    submit = () => {
        this.setState({
            loading: true
        }, () => {
             setTimeout(() => {
                this.setState({
                    loading: false
                }, () => this.props.history.push('/login/OtpEnter'))
            }, 1500);
        })

    }

    back = () => {
        this.props.history.goBack();
    }

    onChangePass=(data)=> {

        let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_continue)
        let formErrors = { ...this.state.formErrors };

        formErrors.password =
         data.length < 50 ? "minimum 8 characaters & 1 special character" : "";
         continue_button_dom.style.backgroundColor = '#BB4225'

    this.setState({ formErrors, [name]: data }, () => console.log(this.state));
  };
  
  
    onChangeName=(e)=>{
        this.setState({
            name:e.target.value
        },()=>this.onChangeInput())
        
    }

    onChangeInput = () => {
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_continue)
        if (this.state.name==='' || this.state.password==='') {
            continue_button_dom.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom.style.backgroundColor = '#BB4225'
        }
    }

    render() {
        const { formErrors } = this.state;
        return (
            <div className="container-div r-txt">
                <BasicModal
                    visible={this.state.loading}
                    subTitle='0987633789'
                    heading='OTP Sent'
                    title='OTP has been sent successfully to'
                />
                <div className="margin-s-20 margin-m-20">
                    <div className="left-align">
                        <img src={Back} alt="Go Back" width='20px' height="20px" onClick={() => this.back()} />
                    </div>
                    <div className='right-center'>
                        <img src={BrandLogo} alt="Menubar" height='20px' />
                        <div className='mt-24 sb-txt font-24'>Setup Your Account</div>
                        <div className='mt-10 m-txt font-12'> shahnawaz.alam@jaypore.com</div>
                    </div>
                    <div className='left-align' >
                        <div className='mt-30 m-txt'>Set a Password</div>
                    </div>
                    <ShowPassword
                      onValueChange={(data) => this.onChangePass(data)}
                      />
                     {formErrors.password.length > 0 && (
                <span className="errorMessage"><img src={OTPMessage} className='pr-10'/>{formErrors.password}</span>
              )}
                    <div className='left-align' >
                        <div className='mt-10 m-txt'>Full Name</div>
                    </div>
                    <input type="text" className='btn-radius' style={{ marginTop: 0 }}
                    onChange={(e) => this.onChangeName(e)}
                    ></input>
                    <div className='left-align' >
                        <div className='mt-10 m-txt'>Mobile Number <span className='colr-61'>(optional)</span> </div>
                    </div>
                    <div className='div-rel'>
                    <input type="text" className='btn-radius' style={{ marginTop: 0,paddingLeft:40 }}></input>
                    <div className='div-abs'
                    style={{left: 16,
                        top: '27%'}}
                    >+91 </div>
                    </div>
                    <div className='row-div-start'>
                        <img src={OTPMessage} alt="lock" style={{ marginTop: -4 }} />
                        <p className=' colr-61 ml-10 font-12' style={{ marginTop: 8 }} >OTP will be sent to your number for verification</p>
                    </div>
                    <div className='left-align' >
                        <div className=' m-txt'>Date Of Birth <span className='colr-61'>(optional)</span> </div>
                    </div>
                    <div className='div-rel'>
                        <input type="date" placeholder="." className='btn-radius' style={{ marginTop: 0, marginBottom: 0 ,paddingRight: '8px'}}></input>
                        <img src={CalenderLogo} alt="alcender-logo" className='calender-logo'/>
                    </div>
                    <button className='btn-radius grey-button mt-20'
                        onClick={() => this.submit()} ref='login_continue'>
                        <div className='white-color m-txt font-16'>Continue</div>
                    </button>
                    <div className='wrap-content'>
                        <p className='mt-10 left-align font-12'>By Signing Up. You are agreeing to our <br/><span className='sb-txt'>Terms & Privacy Policy</span>
                        </p>

                    </div>
                </div>

            </div>
        )
    }
}

export default SetAccounts
