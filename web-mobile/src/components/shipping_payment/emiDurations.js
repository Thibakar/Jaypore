import React, { Component } from 'react'
import CrossLogo from './shipping_payment_icon/close.svg';
import RadioEmptyLogo from './shipping_payment_icon/Radio - Empty.svg';
import Modal from 'react-modal'
import '../../assets/css/shipping_payment_new.css'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    content: {
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 16,
        right: 16,
        height: '42%',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,255)',
    }
};

export default class BankOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
        }
    }


    render() {
        return (
            <Modal
            isOpen={this.state.isVisible}
            style={customStyles}
        >
                <div className='emi-duartions-header-div' style={{ backgroundColor: '#FFFAF7' }}>
                    <p className='emi-duartions-txt'>EMI Durations</p>
                    <img src={CrossLogo} className='cross-logo-emi' />
                </div>
                <div className='save-borader' style={{ marginTop: -2, marginLeft:-10, marginRight:-10 }}></div>


                <div className='popular-bank-div'>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text' style={{ marginLeft: 12 }}>3 Months</p>
                </div>

                <div className='popular-bank-div' style={{ marginTop: 2 }} >
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text' style={{ marginLeft: 12 }}>6 Months</p>
                </div>

                <div className='popular-bank-div' style={{ marginTop: 2 }}>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text' style={{ marginLeft: 12 }}>9 Months</p>
                </div>

                <div className='popular-bank-div' style={{ marginTop: 2 }}>
                    <img src={RadioEmptyLogo} className='bank-select-radio'></img>
                    <p className='bank-Name-text' style={{ marginLeft: 12 }}>1 Year</p>
                </div>


            </Modal>
        )
    }
}