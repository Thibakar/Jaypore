import React from 'react'
import WrongOTPCross from '../../assets/01 Icons/01 Login Signup/Wrong Password.svg'
import { BaseComponent } from '../common/BaseComponent'

export default class WrongOTP extends BaseComponent {
    render() {
        return (
            <div className="bg-light-pink">
                <div className="align-items-center container p-l-500 p-t-100 ">
                    <form className="color-white form-container m-b-100">
                        <div className=" text-center p-t-100">
                            <img src={WrongOTPCross} height="100" width="100" alt="" />
                            <h3 className="text-center bold">OTP Sent</h3>
                            <h5 className="text-center p-b-100">
                                <strong>OTP has been successfully sent to 9844667596</strong>
                            </h5>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
