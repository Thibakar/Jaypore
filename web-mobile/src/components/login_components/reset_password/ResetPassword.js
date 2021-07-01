import React, { Component } from 'react'
import jayporeLogo from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import ShowPassword from '../showPassword'
import Back from '../../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg'
import Confirmation from './ComfiramtionModal'
import ReactDOM from 'react-dom'
class ResetPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newPassword: "",
            reEnterNewPassword: "",
            visible: false
        }
    }

    newPassword = (e) => {
        this.setState({
            newPassword: e.target.value
        })
    }
    reEnterNewPassword = (e) => {
        this.setState({
            reEnterNewPassword: e.target.value
        })
    }

    closeModal = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    goToNextPage = () => {
        this.props.history.push('/login');
    }


    changePass=(e)=>{
        this.setState({
            newPassword:e
        },()=>this.onChangeInput())
    } 
    changeRePass=(e)=>{
        this.setState({
            reEnterNewPassword:e
        },()=>this.onChangeInput())
        
    }

    onChangeInput = () => {
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_continue)
        if (this.state.newPassword==='' || this.state.reEnterNewPassword==='') {
            continue_button_dom.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom.style.backgroundColor = '#BB4225'
        }
    }

    render() {
        return (
            <div>
                <Confirmation visible={this.state.visible}
                    closeModal={() => this.closeModal()}
                    goToNextPage={() => this.goToNextPage()}
                />

                <div className="p-16">
                    <div className="left-align">
                        <img src={Back} alt="Go Back" width='20px' height="20px" onClick={() => this.props.history.goBack()} />
                    </div>
                    <div className="col-sm-12">
                        <div className="text-center">
                            <img src={jayporeLogo} height="40px" width="130px" alt="logo" />
                            <h1 className="mt-0 mb-5"><strong>Reset Password</strong></h1>
                        </div>
                        <div>
                            <label className="mb-0">Set A New Password</label>
                            <ShowPassword
                                onValueChange={(data) => this.changePass(data)}
                            />

                            <label className="mb-0">Re-enter New Password</label>
                            <ShowPassword
                                onValueChange={(data) => this.changeRePass(data)}
                            />
                            <button className='btn-radius grey-button ' id='login_continue'
                                onClick={() => this.closeModal()} ref='login_continue'
                            ><span className='white-color m-txt font-16'>Reset Password</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword
