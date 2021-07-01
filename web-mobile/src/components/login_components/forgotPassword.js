import React, { Component } from 'react'
import BrandLogo from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import BasicModal from '../common/BasicModal'
import Back from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg'
import ReactDOM from 'react-dom'

export class ForgotPassword extends Component {


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
                }, this.props.history.push('/resetPassword'))
            }, 1500);
        })

    }

    onChangeInput = (event) => {
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.otp)
        if (event.target.value ==='') {
            continue_button_dom.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom.style.backgroundColor = '#BB4225'
        }
    }

    back = () => {
        this.props.history.goBack();
    }



    render() {
        return (
            <div className="container-div r-txt">
                <BasicModal
                    visible={this.state.loading}
                    subTitle='shahnawaz.alam@jaypore.com'
                    heading='Reset Password'
                    title='Link has been sent successfully to'
                />
                <div className="margin-s-20 margin-m-20">

                <div className="left-align">
                        <img src={Back} alt="Go Back" width='20px' height="20px" onClick={() => this.back()} />
                    </div>
                    <div className='right-center'>
                        <img src={BrandLogo} alt="Menubar" height='20px' />
                        <div className='mt-24 sb-txt font-24 colr-21'>Forgot your password?</div>
                        <div className='mt-10 m-txt font-12 colr-21'>
                            Enter your  registered email below to receive password reset instruction
                        </div>
                    </div>
                    <div className='left-align' >
                        <div className='mt-30 m-txt colr-21'>Enter Email Address</div>
                    </div>
                    <input type="text" className='btn-radius' style={{ marginTop: 0, marginBottom: 0 }}
                        onChange={(e) => this.onChangeInput(e)}
                    ></input>
                    <button className='btn-radius grey-button mt-20'
                        onClick={() => this.submit()} ref='otp'
                    >
                        <div className=' white-color m-txt font-16'>Send</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
