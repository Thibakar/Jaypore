import React, { Component } from 'react'
import DropDownLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import SecureLockLogo from './shipping_payment_icon/Secure1.svg';
import VisaCardLogo from './shipping_payment_icon/visa card.svg';
import AmericaCardLogo from './shipping_payment_icon/amex.svg';
import MasterCardLogo from './shipping_payment_icon/Mastercard card.svg';
import RadioEmptyLogo from './shipping_payment_icon/Radio - Empty.svg';
import RedioLogo from './shipping_payment_icon/Radio - Empty.svg';
import DeleteLogo from './shipping_payment_icon/Delete.svg';
import EditLogo from './shipping_payment_icon/Edit.svg';
import ChekboxFullLogo from './shipping_payment_icon/checkbox Selected.svg';
import ChekboxEmptyLogo from './shipping_payment_icon/Checkbox Empty.svg';
import TextAreaCornerLogo from './shipping_payment_icon/Dropdown.svg';
import PayPalLogo from './shipping_payment_icon/Paypal.svg';
import PhoneLpgo from './shipping_payment_icon/Mobile.svg';
import BackArrowLogo from './shipping_payment_icon/ic_arrow_back.svg';
import { Link } from 'react-router-dom'
import './shipping_payment.css'
import './radio_button.css'
import InputAddress from './addressInputComponent'

import SavedAddress from './savedAddressesComponent'

export default class ShippingPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentStyle: 'online',
            mobileCountryCode: false,
            marLeft: 18,
        }
    }

    onRadioButton = (paymentType) => {
        this.setState({
            paymentStyle: paymentType
        })
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    onClickContact() {
        this.setState({
            mobileCountryCode: true,
            marLeft: 48
        })
    }


    render() {
        return (
            <div style={{ backgroundColor: '#FFFAF7' }}>

                <div className='card-header-div'>
                    <img src={BackArrowLogo} className='backword-logo-icon' onClick={() => this.props.history.goBack()}></img>
                    <p className='address-font'>Address</p>
                </div>

                <hr style={{ marginTop: -2, borderColor: '#edd4c5' }} />

                <div className='card-payableAmt-div'>
                    <p className='card-payment-Amount-Text'>Payable Amount</p>
                    <p className='card-payment-Amount'>Rs. 6,400</p>
                </div>


                <div style={{ backgroundColor: '#fff0e7' }}>
                    {/* <div>
                        <p className='card-new-Shipping-Address' > Save addresses</p>
                    </div> */}

                    <div>
                        <p className='card-new-Shipping-Address' > Add a new shipping addresses</p>
                    </div>

                    <SavedAddress/> 


                    <div className='card-saveAddress-form-div' style={{marginTop:-6}}>
                        <div className='add-new-shipping-adds-box'>
                            <p className='add-new-shipping-adds-box-text'>Add a  new shipping address</p>
                            <img src={DropDownLogo} className='add-new-shipping-adds-box-downLogo' onClick={() => this.openNewAddresForm()}></img>
                        </div>

                        <InputAddress/>

                        {/* <div>
                            <input label='Full Name' type='text' placeholder='Full Name' style={{}} className='input-text-Area-SP'></input>
                        </div>
                        <div style={{ paddingTop: 8 }}>
                            <textarea label='Address' type='text' placeholder='Address' style={{}} className='textArea-SP'></textarea>
                            <img src={TextAreaCornerLogo} className='text-Area-Corner-Logo-SP'></img>
                        </div>

                        <select style={{ marginTop: 10 }} class="select-country-control">
                            <option>Country</option>
                            <option>India</option>
                            <option>US</option>
                        </select>

                        <div style={{ paddingTop: 8 }}>
                            <input label='Pin Code / Zip Code' type='text' placeholder='Pin Code / Zip Code' style={{}} className='input-text-Area-SP'></input>
                        </div>

                        <select style={{ marginTop: 8 }} class="select-country-control">
                            <option>State / Province</option>
                            <option>Andhra Pradesh</option>
                            <option>Haryana</option>
                            <option>Gujarat</option>
                        </select>

                        <select style={{ marginTop: 16 }} class="select-country-control">
                            <option>City</option>
                            <option>Ambala</option>
                            <option>Bhiwani</option>
                            <option>Gurugram</option>
                        </select>


                        <div style={{ marginTop: 9 }}>
                            <p className={this.state.mobileCountryCode ? 'country-code' : 'd-none'}>+91</p>
                            <input label='Contact No.' type='text' placeholder='Mobile Number' style={{ paddingLeft: this.state.marLeft }} className='input-text-Area-mobile' onClick={() => this.onClickContact()}></input>
                        </div> */}


                        <div style={{ marginTop: 10 }}>
                            <p className='address-Type-div-SP'> Address Type</p>
                        </div>

                        <div className='address-redio-div' style={{ display: 'flex' }}>
                            <img src={RadioEmptyLogo} ></img>
                            <p className='home-radio'> Home</p>
                            <img src={RadioEmptyLogo} className='radio-btn'></img>
                            <p className='home-radio'>Office</p>
                            <img src={RadioEmptyLogo} className='radio-btn'></img>
                            <p className='home-radio'>Other</p>


                        </div>
                        <hr className='borader-redio-SP' style={{ marginRight: -16 }} />
                        <hr className='borader-redio-SP' style={{ marginRight: -16, marginTop: -10 }} />


                        <div className='billing-checkbox-ful' style={{ height: 48, marginTop: 20 }}>
                            <img src={ChekboxFullLogo} ></img>
                            <p className='billing-checkbox-full-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                        </div>

                        <hr className='borader-redio-SP' style={{ marginRight: -16, marginLeft: -16, marginTop: -10 }} />

                        <div className='new-billing-Address-div-SP' >
                            <p className='new-billing-Address-SP' style={{ marginTop: 8, paddingBottom: 2 }}>Add a new billing address</p>
                            <img src={DropDownLogo} className='billing-Address-dropDown-Logo-SP'></img>
                        </div>
                    </div>
                    <div className='div-borader'></div>
                </div>

                <div>
                    <p className='pay-info-text'>Payment Information</p>
                    <p className='select-Payment-options'>Select Payment options</p>

                    <div className="custom-radio-wrap">
                        <form style={{ border: 'none' }}>
                            <div className="form-group">
                                <input id="html" type="radio" name="custom-radio-btn" checked={this.state.paymentStyle == 'online' ? true : false} onClick={() => this.onRadioButton("online")} />
                                <label className="custom-radio" for="html"></label>
                                <span className="label-text">Pay Online</span>
                            </div>
                            <div className="form-group">
                                <input id="css" type="radio" name="custom-radio-btn" onClick={() => this.onRadioButton("cod")} />
                                <label className="custom-radio" for="css"></label>
                                <span className="label-text">Cash On Delivery</span>
                            </div>
                            <div className="form-group">
                                <input id="js" type="radio" name="custom-radio-btn" onClick={() => this.onRadioButton("Paypal")} />
                                <label className="custom-radio" for="js"></label>
                                <img src={PayPalLogo} className="paypal-radio-logo"></img>
                            </div>
                        </form>
                    </div>
                </div>


                <div>
                    <div className={this.state.paymentStyle == 'Paypal' ? 'paypal-payment-related-Msg-SA' : 'd-none'} style={{ marginTop: -12 }}>
                        <img src={PayPalLogo} className='paypal-logo' style={{ marginTop: 10 }}></img>
                        <p className='paypal-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                        <div style={{ display: 'flex', paddingBottom: 10 }}>
                            <img src={AmericaCardLogo} className='paypal-america-card'></img>
                            <img src={VisaCardLogo} className='visa-card'></img>
                            <img src={MasterCardLogo} className='master-card'></img>
                        </div>
                    </div>
                </div>

                <div style={{ height: 140, marginTop: -12 }} className={this.state.paymentStyle == 'cod' ? 'cash-on-delivery-varify-SA' : 'd-none'}>
                    <p className='cash-on-delivery-varify-text'>We might call you to verify your cash on  delivery order on the mobile number entered below.</p>
                    <div style={{ marginTop: -16, marginRight: 8, marginLeft: 8, marginBottom: 8 }}>
                        <input label='Contact Number.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' style={{}} className='input-text-Area-SP' onClick={() => this.onClickContact()}></input>
                    </div>
                </div>

                <div className={this.state.paymentStyle == 'online' ? 'card-payment-related-Msg' : 'd-none'} style={{ marginTop: -12 }}>
                    <img src={SecureLockLogo} className='card-secureLock-Logo'></img>
                    <p className='card-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                    <div style={{ display: 'flex', marginLeft: -13 }}>
                        <img src={AmericaCardLogo} className='america-card'></img>
                        <img src={VisaCardLogo} className='visa-card'></img>
                        <img src={MasterCardLogo} className='master-card'></img>
                    </div>
                </div>


                <div className="e-container">
                    <div className="e-section" >
                        <div className="e-textSection" style={{ height: 70, padding: 0, paddingLeft: 5 }}>
                            <p style={{ color: '#f3a320', fontSize: 14 }}>Cash on delivery has been disabled because you
                                        applied  a promotional code valid only on online payments. </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginLeft: 16, marginRight: 16, marginTop: 10 }}>
                    <p style={{ fontSize: 15 }}><span className='tap-Here'>tap here</span> to remove the code from your cart if you wish to pay by COD.</p>
                </div>



                <div style={{ margin: 8, paddingLeft: 8, paddingRight: 8 }}>
                    <Link to={{ pathname: '/cardDetailsPayment', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                        <button className='makePayment-btn-enable-SP'>
                            Make Payment
                    </button>
                    </Link>
                </div>
            </div>
        )
    }
}    