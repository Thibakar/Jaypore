import React, { Component } from 'react'
import "../../assets/css/ayush.css";
import BasicModal from '../common/BasicModal'
import BrandLogo from '../../assets/Jaypore Assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg'
import ReactDOM from 'react-dom'


export class OneLastStep extends Component {

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
                    loading: false,
                }, this.props.history.push('/'))
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


    render() {
        return (
            <div className="container-div r-txt">
                <BasicModal
                    visible={this.state.loading}
                    subTitle=''
                    heading='Welcome to Jaypore'
                    title='You have successfully created your Jaypore accounts'
                />
                <div className="margin-s-20 margin-m-20">

                    <div className='right-center'>
                        <img src={BrandLogo} alt="Menubar" height='20px' />
                        <div className='mt-24 sb-txt font-24 colr-21'>One last step</div>
                        <div className='mt-10 m-txt font-11-l colr-21'>We do not have your email address with us. You must fill email address to complete your Sign Up. </div>
                    </div>
                    <div className='left-align' >
                        <div className='mt-30 m-txt colr-21'>Email Address</div>
                    </div>
                    <input type="text" className='btn-radius' style={{ marginTop: 0, marginBottom: 0 }}
                        onChange={(e) => this.onChangeInput(e)}
                    ></input>
                    <button className='btn-radius grey-button mt-20'
                        onClick={() => this.submit()} ref='otp'
                    >
                        <div className=' white-color m-txt font-16'>Finish Signup</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default OneLastStep
