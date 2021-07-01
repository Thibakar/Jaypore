import React, { Component } from 'react'
import "../../assets/css/ayush.css";
import ReactDOM from 'react-dom'
import BasicModal from '../common/BasicModal'
import BrandLogo from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import Back from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg'

export class OTPEnter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }


    submit = () => {
        this.setState({
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                }, () => { this.props.history.push('/login/onelaststep') })
            }, 1500);
        })

    }

    onChangeInput = (event) => {
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_continue)
        if (event.target.value === '') {
            continue_button_dom.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom.style.backgroundColor = '#BB4225'
        }
    }


    render() {
        return (
            <div className="container-div r-txt">
                <BasicModal
                    visible={this.state.loading}
                    subTitle=''
                    heading='Welcome to Jaypore'
                    title='You have successfully created your Jaypore account'
                />

                <div className="margin-s-20 margin-m-20">
                    <div className="left-align">
                        <img src={Back} alt="Go Back" width='20px' height="20px" onClick={() => this.props.history.goBack()} />
                    </div>
                    <div className='right-center'>
                        <img src={BrandLogo} alt="Menubar" height='20px' />
                        <div className="sb-txt font-24 colr-21 mt-20">OTP Verification</div>
                        <p className="text-center font-11-l mt-10 colr-61">
                            Enter the OTP to verify your mobile number <span className='sb-txt colr-21'> 9944880268</span>
                        </p>
                    </div>
                    <div className='left-align' >
                        <div className='mt-30 m-txt colr-21'>Enter OTP</div>
                    </div>
                    <input type="text" className='btn-radius' style={{ marginTop: 0, marginBottom: 0 }}
                        onChange={(e) => this.onChangeInput(e)}
                    ></input>
                    <div className="colr-61 mt-10 font-size-12">1:59</div>
                    <button className='btn-radius grey-button mt-10' ref='login_continue'
                        onClick={() => this.submit()}>
                        <div className='white-color m-txt font-16'>Continue</div>
                    </button>
                </div>

            </div>
        )
    }
}

export default OTPEnter
