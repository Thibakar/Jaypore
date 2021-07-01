import React from 'react'
import { BaseComponent } from '../common/BaseComponent'

export default class OTPNotRecieved extends BaseComponent {
    render() {
        return (
            <div className="color-pink">
                <div className="align-items-center container p-l-500 p-t-100 ">
                    <form className="color-white form-container m-b-100">
                        <div className="p-b-100">
                            <h3 className="text-center bold ">OTP Verification</h3>
                            <h5 className="text-center p-b-20">Enter the OTP to verify your mobile number 9844667596</h5>
                            <div className="p-l-r-30">Enter OTP</div>
                            <input className="input-email" type="text"></input>
                            <div className="p-t-b-10"><strong>OTP </strong>not recieved?<a className="color-blue p-l-5">Resend OTP</a></div>
                            <span>
                                <button className="button-continue " id="btnClick">Continue</button>
                            </span>
                            <div className="p-t-20">Social Link</div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
