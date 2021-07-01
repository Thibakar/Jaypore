import React, { Component } from 'react'

import backLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import DropDownLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import SecureLockLogo from './shipping_payment_icon/Secure1.svg';
import VisaCardLogo from './shipping_payment_icon/visa card.svg';
import AmericaCardLogo from './shipping_payment_icon/amex.svg';
import MasterCardLogo from './shipping_payment_icon/Mastercard card.svg';
import RadioEmptyLogo from './shipping_payment_icon/Radio - Empty.svg';
import RedioLogo from './shipping_payment_icon/Radio - Empty.svg';
import DeleteLogo from './shipping_payment_icon/Delete.svg';
import EditLogo from './shipping_payment_icon/Edit.svg';
import backPNGLogo from './shipping_payment_icon/hiclipart.com.png';
import RadioFullLogo from './shipping_payment_icon/Radio - Selected.svg';
import ChekboxFullLogo from './shipping_payment_icon/checkbox Selected.svg';
import ChekboxEmptyLogo from './shipping_payment_icon/Checkbox Empty.svg';
import TextAreaCornerLogo from './shipping_payment_icon/Dropdown.svg';
import PayPalLogo from './shipping_payment_icon/Paypal.svg';
import PhoneLpgo from './shipping_payment_icon/Mobile.svg';
import BackArrowLogo from './shipping_payment_icon/ic_arrow_back.svg';
import VisaMasterCVVLogo from './shipping_payment_icon/visa-master cvv.svg';
import AddressRadioBtn from './radioButton'
import SavedAddresses from './savedAddressesComponent'
import AddressInput from './addressInputComponent'
import ForwardBlueLogo from './shipping_payment_icon/forward-blue-Arrow.png';
import ChekArrowLogo from './shipping_payment_icon/checkArrow.png';
import ReCaptchaLogo from './shipping_payment_icon/reCaptcha.svg';
import FedexLogo from './shipping_payment_icon/Fedex.svg';
import DHLLogo from './shipping_payment_icon/DHL.svg';
import taxIncludedLogo from './shipping_payment_icon/tax-img.png';


import { Link } from 'react-router-dom'
import './shipping_payment.css'
import './radio_button.css'
//import './checked_button.css'
export default class ShippingPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentStyle: 'online',
            mobileCountryCode: false,
            marLeft: 18,
            shippingAddress: false,
            billingAddress: false,
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

    openshippingAddresForm = () => {
        this.setState({
            shippingAddress: !this.state.shippingAddress
        })
    }

    _addShipingAddres = () => {
        let shipView = this.state.shippingAddress ?
            <div>
                <AddressInput />
                <div style={{ marginTop: 10 }}>
                    <p className='address-Type-div-SP'> Address Type</p>
                </div>

                <AddressRadioBtn />

                <div className='borader-redio-SP' style={{ marginTop: -30, marginRight: -16 }}></div>

                <div className='billing-checkbox-ful' style={{ marginTop: 15 }}>
                    <img src={ChekboxFullLogo} ></img>
                    <p className='billing-checkbox-full-text'><span style={{ fontFamily: 'none', fontSize: 14, color: '#7B7876', fontFamily: 'WorkSans-m' }}>Billing Address:</span> Same as Shipping Address</p>
                </div>

            </div>
            : <div />
        return shipView;
    }

    openbillingAddresForm = () => {
        this.setState({
            billingAddress: !this.state.billingAddress
        })
    }

    _addBillingAddres = () => {
        let billingView = this.state.billingAddress ?
            <AddressInput />
            : <div />
        return billingView;
    }


    render() {
        return (
            <div >

                {/* ////////////////Main header////////////// */}

                <div style={{ backgroundColor: 'white' }}>
                    <div className='card-header-div'>
                        <img src={BackArrowLogo} className='backword-logo-icon' onClick={() => this.props.history.goBack()}></img>
                        <p className='address-font'>Address</p>
                    </div>

                    <hr style={{ marginTop: -2, borderColor: '#edd4c5' }} />

                    <div className='card-payableAmt-div'>
                        <p className='card-payment-Amount-Text'>Payable Amount</p>
                        <p className='card-payment-Amount'>Rs. 6,400</p>
                    </div>
                </div>
                {/* //////////////// MAin header////////////// */}


                <div style={{ backgroundColor: '#fff0e7', paddingTop: 16, marginTop: 15 }}>

                    {/* ////////////////////////////sub haeder///////////////////////////////// */}
                    <div>
                        <p className='shipping-Address-header'>Add a  new shipping address</p>
                    </div>
                    {/* ////////////////////////////sub haeder///////////////////////////////// */}

                    <SavedAddresses />

                    <div className='card-saveAddress-form-div' style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <div className='add-new-shipping-adds-box' style={{ marginTop: 15 }}>
                            <p className='add-new-shipping-adds-box-text'>Add a new Shipping address</p>
                            <img src={DropDownLogo} className='add-new-shipping-adds-box-downLogo' onClick={() => this.openshippingAddresForm()}></img>
                        </div>
                        {this._addShipingAddres()}
                    </div>

                    <div className='card-saveAddress-form-div' style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <div className='add-new-shipping-adds-box' style={{ marginTop: 15 }}>
                            <p className='add-new-shipping-adds-box-text'>Add a new Billing address</p>
                            <img src={DropDownLogo} className='add-new-shipping-adds-box-downLogo' onClick={() => this.openbillingAddresForm()}></img>
                        </div>
                        {this._addBillingAddres()}
                    </div>


                    <div style={{}}>
                        <p className='charges-text'>Charges</p>
                    </div>
                    <div className='card-estimate-shipping-tax-div'>
                        <div className='card-estimate-shipping-tax-add-box' style={{ height: 60 }}>
                            <img src={taxIncludedLogo} className='tax-Included-Logo' style={{ width: 40, height: 50 }}></img>
                            <p className='tax-Included-text'>Estimate Shipping & Tax</p>
                             <img src={DropDownLogo} className='tax-Included-collapsible' onClick={() => this.openNewAddresForm()}></img> 
                        </div>

{/* ///////////////////Estimate Shipping////////////*/}

                        <div className='charges-div-borader'></div>

                        <p className='text-for-estimate-shipping'>Enter your destination to get shipping estimate</p>
                        <p className='text-for-estimate-shipping'>Destination</p>
                        <div style={{marginTop:-14 }}>
                            <input label='Country' type='text' placeholder='Country' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} className='country-dropdown-btn'></img>
                        </div>

                        <div className='courier-services-div'>
                            <div className='courier-service-div-first'>
                                <img src={RadioFullLogo} className='courier-service-radio-btn'></img>
                                <img src={DHLLogo} className='dhl-Logo'></img>
                            </div>

                            <div className='courier-service-div-first' style={{ marginLeft: 16 }}>
                                <img src={RadioFullLogo} className='courier-service-radio-btn'></img>
                                <img src={FedexLogo} className='dhl-Logo' style={{ width: 70, marginLeft: -5 }}></img>
                            </div>
                        </div>

                        <div className='country-tax-div'>
                            <img src={ChekArrowLogo} className='checkArrowLogo'></img>
                            <p style={{ fontSize: 14 }}>Duty:<span style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>$16</span></p>
                        </div>

                        <div className='country-tax-div' style={{ marginTop: -1 }}>
                            <img src={ChekArrowLogo} className='checkArrowLogo'></img>
                            <p style={{ fontSize: 14, textTransform: 'uppercase' }}>VAT:<span style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>$16</span></p>
                        </div>

                        <div className='country-tax-div' style={{ marginTop: -1 }}>
                            <img src={ChekArrowLogo} className='checkArrowLogo'></img>
                            <p style={{ fontSize: 14 }}>Handling Charges:<span style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>$16</span></p>
                        </div>


                        <div className='total-charges-tax-div'>
                            <p style={{ fontSize: 14 }}>Total Charges:<span style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 4 }}>$48</span></p>
                        </div>

                        <div style={{ height: 72 }} className='tax-on-delivery-text'>
                            <p className='cash-on-delivery-varify-text'>This amount is payable at the time of delivery.</p>
                        </div>

 {/* ///////////////////Estimate Shipping////////////*/}





                    </div>

                    {/* <div className='card-saveAddress-form-div' style={{ }}>
                        <div className='add-new-shipping-adds-box' style={{ marginTop: 15 }}>
                            <p className='add-new-shipping-adds-box-text'>Add a new Billing address</p>
                            <img src={DropDownLogo} className='add-new-shipping-adds-box-downLogo' onClick={() => this.openbillingAddresForm()}></img>
                        </div>

                    </div> */}



                    {/* <div>
                        <p className='card-new-Shipping-Address '>Add a  new shipping address</p>
                    </div> */}

                    <div className='card-saveAddress-form-div' style={{ paddingTop: 8 }}>

                        <AddressInput />

                        {/* ////////////Address Radio///////////////// */}
                        <div style={{ marginTop: 10 }}>
                            <p className='address-Type-div-SP'> Address Type</p>
                        </div>

                        <AddressRadioBtn />

                        <div className='borader-redio-SP' style={{ marginTop: -30, marginRight: -16 }}></div>

                        <div className='billing-checkbox-ful' style={{ marginTop: 15 }}>
                            <img src={ChekboxFullLogo} ></img>
                            <p className='billing-checkbox-full-text'><span style={{ fontFamily: 'none', fontSize: 14, color: '#7B7876', fontFamily: 'WorkSans-m' }}>Billing Address:</span> Same as Shipping Address</p>
                        </div>
                        {/* ////////////Address Radio///////////////// */}

                        <div className='borader-redio-SP' style={{ marginLeft: -16, marginRight: -16, marginTop: 15 }}></div>


                        {/* //////////////////// */}
                        <div className=''>
                            <div className='add-new-shipping-adds-box' style={{ marginTop: 15 }}>
                                <p className='add-new-shipping-adds-box-text'>Add a new billing address</p>
                                <img src={DropDownLogo} className='add-new-shipping-adds-box-downLogo' onClick={() => this.openbillingAddresForm()}></img>
                            </div>
                            {this._addBillingAddres()}
                        </div>
                        {/* //////////////////// */}



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









                <div className="e-container" style={{ marginTop: -35 }}>
                    <div className="e-section" >
                        <div className="e-textSection" style={{ height: 70, padding: 0, paddingLeft: 5 }}>
                            <p style={{ color: '#f3a320', fontSize: 14 }}>Cash on delivery has been disabled because you
                                        applied  a promotional code valid only on online payments. </p>
                        </div>
                    </div>
                </div>

                <div style={{ marginLeft: 16, marginRight: 16, marginTop: 15 }}>
                    <p style={{ fontSize: 15 }}><span className='tap-Here'>tap here</span> to remove the code from your cart if you wish to pay by COD.</p>
                </div>


                <div className={this.state.paymentStyle == 'online' ? 'card-payment-related-Msg' : 'd-none'} style={{}}>
                    <img src={SecureLockLogo} className='card-secureLock-Logo'></img>
                    <p className='card-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                    <div style={{ display: 'flex', marginLeft: -13 }}>
                        <img src={AmericaCardLogo} className='america-card'></img>
                        <img src={VisaCardLogo} className='visa-card'></img>
                        <img src={MasterCardLogo} className='master-card'></img>
                    </div>
                </div>

                <div style={{ height: 140 }} className={this.state.paymentStyle == 'cod' ? 'cash-on-delivery-varify-SA' : 'd-none'}>
                    <p className='cash-on-delivery-varify-text'>We might call you to verify your cash on  delivery order on the mobile number entered below.</p>
                    <div style={{ marginTop: -16, marginRight: 8, marginLeft: 8, marginBottom: 8 }}>
                        <input label='Contact Number.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' style={{}} className='input-text-Area-SP' onClick={() => this.onClickContact()}></input>
                    </div>
                </div>

                <div>
                    <div className={this.state.paymentStyle == 'Paypal' ? 'paypal-payment-related-Msg-SA' : 'd-none'} style={{}}>
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



                <div className='pay-with-paypal-div-new'>
                    <div>
                        <p className='pay-with-paypal-text'>Pay with</p>
                        <img src={PayPalLogo} className='payPal-input-logo'></img>
                    </div>

                    <div className='payPal-inputBox'>

                        <img src={ForwardBlueLogo} className='card-pay-with-paypal-forwardLogo-blue' onClick={() => this.openNewAddresForm()}></img>
                    </div>
                </div>


                <div>
                    <input label='Name as it appears on the card' type='text' placeholder='Name as it appears on the card' style={{ width: '91%', height: 47, marginLeft: 16, marginRight: 16 }} className='input-text-Area-card'></input>
                </div>

                <div style={{ marginTop: 3 }}>
                    <input label='Card Number' type='text' placeholder='Card Number' style={{ width: '91%', height: 47, marginLeft: 16, marginRight: 16 }} className='input-text-Area-card'></input>
                </div>



                {/* <select style={{ marginTop: 8 }} class="select-country-control">
                    <option>State / Province</option>
                    <option>Andhra Pradesh</option>
                    <option>Haryana</option>
                    <option>Gujarat</option>
                </select> */}

                <div className='card-expiry-date-div'>

                <select style={{ marginTop: 8 }} style={{ width: '100%', height: 47 }} className='month-expiry-date'>
                    <option>Month of Expiry</option>
                    <option>12</option>
                    <option>11</option>
                    <option>10</option>
                </select> 

                <select style={{ marginTop: 8 }} style={{ width: '100%', height: 47 }} className='month-expiry-date'>
                    <option>Year of Expiry</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select> 


                    {/* <div className='card-expiry-month-div'>
                        <input label='Month of Expiry' type='text' placeholder='Month of Expiry' style={{ width: '100%', height: 47 }} className='input-text-card-date'></input>
                        <img src={DropDownLogo} className='month-expiry-dropdown-logo'></img>
                    </div>

                    <div className='card-expiry-year-div'>
                        <input label='Year of Expiry' type='text' placeholder='Year of Expiry' style={{ width: '100%', height: 47 }} className='input-text-card-date'></input>
                        <img src={DropDownLogo} className='year-expiry-dropdown-logo'></img>
                    </div> */}

                </div>

                <div className='card-expiry-date-div'>
                    <div className='card-expiry-month-div'>
                        <input label='CVV' type='password' placeholder='CVV' style={{ width: '100%', height: 47 }} className='input-text-card-date'></input>
                    </div>
                    <div className='card-expiry-month-div'>
                        <img src={VisaMasterCVVLogo} className='visa-master-CVV-Logo'></img>
                        <p className='CVV-text'>CVV</p>
                    </div>

                </div>
                

                <div className='reCaptcha' style={{ marginLeft: 16, borderRadius: 5, height: 70 }}>
                    <div className='reCaptcha-row-div'>
                        <img src={ChekboxEmptyLogo} className='reCaptcha-checkbox-Logo'></img>
                        <p className='robot-text' style={{ left: 0, marginLeft: 10 }}>I am not a robot</p>
                    </div>
                    <div className='reCaptcha-logo-div'>
                        <img src={ReCaptchaLogo} className='' style={{ right: 0, left: 'auto', marginRight: 8 }}></ img>
                    </div>
                </div>

                <div className='cancel-save-btn-div-SP' >
                    <button className='cancel-btn-SP'>
                        Cancel
                    </button>

                    <button className='saveProceed-btn-SP'>
                        Save & Proceed
                    </button>
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