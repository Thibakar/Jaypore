import React, { Component } from 'react'
import backLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import DropDownLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import SecureLockLogo from './shipping_payment_icon/Secure1.svg';
import VisaCardLogo from './shipping_payment_icon/visa card.svg';
import AmericaCardLogo from './shipping_payment_icon/amex.svg';
import MasterCardLogo from './shipping_payment_icon/Mastercard card.svg';
import RadioEmptyLogo from './shipping_payment_icon/Radio - Empty.svg';
import ChekboxFullLogo from './shipping_payment_icon/checkbox Selected.svg';
import RadioFullLogo from './shipping_payment_icon/Radio - Selected.svg';
import TextAreaCornerLogo from './shipping_payment_icon/Dropdown.svg';
import BackArrowLogo from './shipping_payment_icon/ic_arrow_back.svg';
import './shipping_payment.css'
export default class ShippingPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    gotoLastPage = () => {
        console.log("cokokokokok")
        this.props.history.push('/orderConfirmation');
    }
    render() {
        return (
            <div style={{ backgroundColor: '#FFFAF7' }}>
                <div>
                    <div className='SP-header-div'>
                        <img src={BackArrowLogo} alt="" className='backword-logo-icon' onClick={() => this.props.history.goBack()}></img>
                        <p className='address-font'>Address</p>
                    </div>
                    <div className='borader' style={{ marginTop: -2 }}></div>
                    <div className='card-payableAmt-div' style={{ marginTop: 24 }}>
                        <p className='card-payment-Amount-Text' style={{ fontWeight: 'bold' }}>Payable Amount</p>
                        <p className='card-payment-Amount' style={{ fontWeight: 'bolder' }}>Rs. 6,400</p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff0e7' }}>
                    <div>
                        <p className='card-new-Shipping-Address'>Add a  new shipping address</p>
                    </div>

                    <div className='card-saveAddress-form-div' style={{ paddingTop: 8, marginTop: -6 }}>
                        <div>
                            <input label='Full Name' type='text' placeholder='Full Name' style={{}} className='input-text-Area-SP'></input>
                        </div>

                        <div style={{ paddingTop: 8 }}>
                            <textarea label='Address' type='text' placeholder='Address' style={{}} className='textArea-SP'></textarea>
                            <img src={TextAreaCornerLogo} alt="" className='text-Area-Corner-Logo-SP'></img>
                        </div>

                        <div style={{ paddingTop: 3 }}>
                            <input label='Country' type='text' placeholder='Country' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} alt="" className='country-dropdown-btn'></img>
                        </div>

                        <div style={{ paddingTop: 3 }}>
                            <input label='Pin Code / Zip Code' type='text' placeholder='Pin Code / Zip Code' style={{}} className='input-text-Area-SP'></input>
                        </div>


                        <div style={{ paddingTop: 3 }}>
                            <input label='State / Provinec' type='text' placeholder='State / Province' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} alt="" className='country-dropdown-btn'></img>
                        </div>



                        <div style={{ paddingTop: 3 }}>
                            <input label='City' type='text' placeholder='City' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} alt="" className='country-dropdown-btn'></img>
                        </div>

                        <div style={{ paddingTop: 3 }}>
                            <input label='Contact No.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' style={{}} className='input-text-Area-SP' onClick={() => this.onClickContact()}></input>
                        </div>

                        <div style={{ marginTop: 10 }}>
                            <p className='address-Type-div-SP'> Address Type</p>
                        </div>

                        <div className='address-redio-div' style={{ display: 'flex' }}>
                            <img src={RadioEmptyLogo} alt="" ></img>
                            <p className='home-radio'> Home</p>
                            <img src={RadioEmptyLogo} alt="" className='radio-btn'></img>
                            <p className='home-radio'>Office</p>
                            <img src={RadioEmptyLogo} alt="" className='radio-btn'></img>
                            <p className='home-radio'>Other</p>


                        </div>
                        <hr className='borader-redio-SP' style={{ marginRight: -16 }} />
                        <hr className='borader-redio-SP' style={{ marginRight: -16, marginTop: -10 }} />


                        <div className='billing-checkbox-ful' style={{ height: 48, marginTop: 20 }}>
                            <img src={ChekboxFullLogo} alt="" ></img>
                            <p className='billing-checkbox-full-text'><span style={{ fontFamily: 'none', fontSize: 14 }}>Billing Address:</span> Same as Shipping Address</p>
                        </div>

                        <hr className='borader-redio-SP' style={{ marginRight: -16, marginLeft: -16, marginTop: -30 }} />

                        <div className='new-billing-Address-div-SP' >
                            <p className='new-billing-Address-SP'>Add a new billing address</p>
                            <img src={DropDownLogo} alt="" className='billing-Address-dropDown-Logo-SP'></img>
                        </div>

                    </div>

                    <div className='div-borader'></div>
                </div>

                <div>
                    <p className='pay-info-text'>Payment Information</p>
                    <p className='select-Payment-options'>Select Payment options</p>
                    <div className='' style={{ display: 'flex', marginBottom: -8 }}>
                        <img src={RadioFullLogo} alt="" className='radio-btn' ></img>
                        <p className='home-radio'> Pay Online</p>

                    </div>

                    <div className='' style={{ display: 'flex', marginBottom: -8 }}>
                        <img src={RadioEmptyLogo} alt="" className='radio-btn'></img>
                        <p className='home-radio'>Cash On Delivery</p>
                    </div>

                    <div className='' style={{ display: 'flex', marginBottom: -8 }}>
                        <img src={RadioEmptyLogo} alt="" className='radio-btn'></img>
                        <p className='home-radio'>Pay Pal</p>
                    </div>
                </div>


                <div className='card-payment-related-Msg-SP'>
                    <div className='payment-Secure-box-SP'>
                        <img src={SecureLockLogo} alt="" className='secureLock-Logo-SP'></img>
                        <p className='secure-lock-text-SP' >you will be directed to a 100% secure
                    geteway to process your payment.</p>
                    </div>
                    <div style={{ display: 'flex', paddingBottom: 10 }}>
                        <img src={AmericaCardLogo} alt="" className='america-card'></img>
                        <img src={VisaCardLogo} alt="" className='visa-card'></img>
                        <img src={MasterCardLogo} alt="" className='master-card'></img>
                    </div>
                </div>

                <div style={{ margin: 8, paddingLeft: 8, paddingRight: 8 }}>
                    <button className='makePayment-btn-enable-SP' onClick={() => this.gotoLastPage()}>
                        Make Payment
                    </button>
                </div>
                {/* 
                <div>
                    <button className='makePayment-btn' style={{ marginLeft:10, marginRight:10 }}>
                        Make Payment
                    </button>
                </div> */}





            </div>
        )
    }
}    