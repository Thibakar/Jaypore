import React from 'react';
import successImage from '../../assets/01 Icons/07 Order Confirmation/Order Confirmation.svg'
import LoginHeader from '../shared/header/login_header';
import { BaseComponent } from '../common/BaseComponent';
import { NavUtil } from '../common/navutil';

export default class PasswordChangedMessage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }
    submit = () => {
        console.log("okokokok")
        this.setState({
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                }, () => NavUtil.goToHomeMain())
            }, 1000);
        })

    }
    render() {
        return (
            <React.Fragment>
                <LoginHeader />
                <div className="bg-light-pink p-g-al-page">
                    <div className="container  p-t-40 p-b-40">
                        <div className="login-form-center login-passwordform">

                            <div className=" text-center p-t-100 mb-p-l">
                                <img className="p-b-10" src={successImage} height="50" width="50" alt="" />
                                <p className="text-center font-14 mt15 font-nk">Your password has been successfully changed.</p>
                                <button
                                    className="button-proceed p-l-r-40"
                                    onClick={() => this.submit()}
                                >
                                    Proceed to Log In
                                 </button>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
