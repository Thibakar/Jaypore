import React, { Component } from 'react'
import Back from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg'
import "../../assets/css/ayush.css";
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import BasicModal from '../common/BasicModal'
import BrandLogo from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import ShowPassword from './showPassword'

export class LoginPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
            loading: false,
            inputvalue:""
        };
    }


    submit = () => {
        this.setState({
            loading: true
        }, () => {
             setTimeout(() => {
                this.setState({
                    loading: false
                }, () => this.props.history.push('/login/setAccounts'))
            }, 1500);
        })

    }

    onValueChange=(data)=>{
        console.log('data',data)
        this.setState({
          inputvalue:data
        })
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_pass);
        if (data === "") {
          continue_button_dom.style.backgroundColor = "#babcbf";
        } else {
          continue_button_dom.style.backgroundColor = "#BB4225";
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
                    subTitle=''
                    heading='Welcome Back'
                    title='You have successfully LoggedIn to your Jaypore account'
                />
                <div className="margin-s-20 margin-m-20">
                    <div className="left-align">
                        <img src={Back} alt="Go Back" width='20px' height="20px"
                            onClick={() => this.back()}
                        />
                    </div>
                    <div className='right-center'>
                        <img src={BrandLogo} alt="Menubar" height='20px' />
                        <div className='mt-24 sb-txt font-24 colr-21'>Login to your account</div>
                        <div className='mt-10 m-txt font-12 colr-21'> shahnawaz.alam@jaypore.com</div>
                    </div>
                    <div className='left-align'>
                        <div className='mt-30 m-txt colr-21'>Password</div>
                    </div>
                    <ShowPassword
                      onValueChange={(data)=>this.onValueChange(data)}
                      />
                    <div className='right-center colr-21' >
                        <Link to='/forgotPassword'> <div className='text-underline mt-24'>Forgot Password?</div></Link>
                    </div>
                    <button className='btn-radius grey-button mt-30'
                        onClick={() => this.submit()} ref='login_pass'
                    >
                        <div className='white-color m-txt font-16'>Continue</div>
                    </button>
                </div>

            </div>
        )
    }
}

export default LoginPassword
