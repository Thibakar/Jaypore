import React, { Component } from 'react'
import backLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import DropDownLogo from './shipping_payment_icon/Dropdown Arrow.svg';
import SecureLockLogo from './shipping_payment_icon/Secure1.svg';
import VisaCardLogo from './shipping_payment_icon/visa card.svg';
import AmericaCardLogo from './shipping_payment_icon/amex.svg';
import MasterCardLogo from './shipping_payment_icon/Mastercard card.svg';
import RedioLogo from './shipping_payment_icon/Radio - Empty.svg';
import DeleteLogo from './shipping_payment_icon/Delete.svg';
import EditLogo from './shipping_payment_icon/Edit.svg';
import RadioFullLogo from './shipping_payment_icon/Radio - Selected.svg';
import ChekboxEmptyLogo from './shipping_payment_icon/Checkbox Empty.svg';
import taxIncludedLogo from './shipping_payment_icon/tax-img.png';
import PayPalLogo from './shipping_payment_icon/Paypal.svg';
import ChekArrowLogo from './shipping_payment_icon/checkArrow.png';
import ReCaptchaLogo from './shipping_payment_icon/reCaptcha.svg';
import FedexLogo from './shipping_payment_icon/Fedex.svg';
import DHLLogo from './shipping_payment_icon/DHL.svg';
import ForwardBlueLogo from './shipping_payment_icon/forward-blue-Arrow.png';
import VisaMasterCVVLogo from './shipping_payment_icon/visa-master cvv.svg';
import BackArrowLogo from './shipping_payment_icon/ic_arrow_back.svg';
import { Link } from 'react-router-dom'

import '../../assets/css/shipping_payment_new.css'
export default class ShippingPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.openNewAddresForm = this.openNewAddresForm.bind();
    }

    openNewAddresForm() {
        // alert('Save alert');
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={{ backgroundColor: '#FFFAF7' }}>
                <div className='card-header-div'>
                    <img src={BackArrowLogo} alt="" className='backword-logo-icon' onClick={() => this.props.history.goBack()}></img>
                    <p className='address-font'>Address</p>
                </div>

                <hr style={{ marginTop: -2, borderColor: '#edd4c5' }} />

                <div className='card-payableAmt-div'>
                    <p className='card-payment-Amount-Text'>Payable Amount</p>
                    <p className='card-payment-Amount'>Rs. 6,400</p>
                </div>

                <div style={{ backgroundColor: '#fff0e7' }}>
                    <div>
                        <p className='card-new-Shipping-Address' > Save addresses</p>
                    </div>

                    <div className='card-saveAddress-form-div' style={{ marginTop: 3 }}>
                        <div className='card-saveAddres-btns-div'>
                            <img src={RedioLogo} alt="" ></img>
                            <div className='card-saveAddres-btns-div-div'>
                                <img src={DeleteLogo} alt="" className='delete-Logo'></img>
                                <img src={EditLogo} alt="" ></img>
                            </div>
                        </div>

                        <p className='card-userName-sty'>Shahnawaz Alam</p>
                        <p className='user-Address-sty'>#234, 1st Floor, HSR 2 sector  bangalore -560034 </p>
                        <p className='card-userName-sty'>Home</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                            <img src={ChekboxEmptyLogo} alt="" ></img>
                            <p className='checkbox-empty-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                        </div>

                        <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div>


                        <div className='card-saveAddres-btns-div'>
                            <img src={RedioLogo} alt=""></img>
                            <div className='card-saveAddres-btns-div-div'>
                                <img src={DeleteLogo} alt="" className='delete-Logo'></img>
                                <img src={EditLogo} alt=""></img>
                            </div>
                        </div>

                        <p className='card-userName-sty'>Shahnawaz Alam</p>
                        <p className='user-Address-sty'>#234, 1st Floor, HSR 2 sector  bangalore -560034 </p>
                        <p className='card-userName-sty'>Home</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                            <img src={ChekboxEmptyLogo} alt=""></img>
                            <p className='checkbox-empty-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                        </div>

                        <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div>



                        <div className='card-saveAddres-btns-div'>
                            <img src={RedioLogo} alt=""></img>
                            <div className='card-saveAddres-btns-div-div'>
                                <img src={DeleteLogo} alt="" className='delete-Logo'></img>
                                <img src={EditLogo} alt=""></img>
                            </div>
                        </div>

                        <p className='card-userName-sty'>Shahnawaz Alam</p>
                        <p className='user-Address-sty'>#234, 1st Floor, HSR 2 sector  bangalore -560034 </p>
                        <p className='card-userName-sty'>Home</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                            <img src={ChekboxEmptyLogo} alt=""></img>
                            <p className='checkbox-empty-text'><span style={{ fontFamily: 'none', fontSize: 13 }}>Billing Address:</span> Same as Shipping Address</p>
                        </div>

                        <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div>

                    </div>

                    <div className='card-saveAddress-form-div'>
                        <div className='add-new-shipping-adds-box'>
                            <p className='add-new-shipping-adds-box-text'>Add a  new shipping address</p>
                            <img src={DropDownLogo} alt="" className='add-new-shipping-adds-box-downLogo' onClick={() => this.openNewAddresForm()}></img>
                        </div>
                    </div>

                    {/* 
                    <div className='card-saveAddress-form-div'>
                        <div className='add-new-shipping-adds-box'>
                            <p className='add-new-shipping-adds-box-text'>Add a  new shipping address</p>
                            <img src={DropDownLogo} className='save-address-dropDown-Logo-style' onClick={() => this.openNewAddresForm()}></img>
                        </div>
                    </div> */}

                    {/* only for Estimate Shipping & Tax */}
                    {/* <div className='card-saveAddress-form-div'>
                        <div className='add-new-shipping-adds-box'>
                        <img src={taxIncludedLogo} className='tax-Included-Logo' style={{width:40,height:50}}></img>
                        <p className='tax-Included-text'>Estimate Shipping & Tax</p>
                            <img src={DropDownLogo} className='tax-Included-collapsible' onClick={() => this.openNewAddresForm()}></img>
                        </div>
                    </div> */}
                    <div style={{}}>
                        <p className='charges-text'>Charges</p>
                    </div>
                    <div className='card-estimate-shipping-tax-div'>
                        <div className='card-estimate-shipping-tax-add-box'>
                            <img src={taxIncludedLogo} alt="" className='tax-Included-Logo' style={{ width: 40, height: 50 }}></img>
                            <p className='tax-Included-text'>Estimate Shipping & Tax</p>
                            {/* <img src={DropDownLogo} className='tax-Included-collapsible' onClick={() => this.openNewAddresForm()}></img> */}
                        </div>

                        <div className='charges-div-borader'></div>

                        <p className='text-for-estimate-shipping'>Enter your destination to get shipping estimate</p>

                        <div style={{ paddingTop: 3 }}>
                            <input label='Country' type='text' placeholder='Country' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} alt="" className='country-dropdown-btn'></img>
                        </div>

                        <div className='courier-services-div'>
                            <div className='courier-service-div-first'>
                                <img src={RadioFullLogo} alt="" className='courier-service-radio-btn'></img>
                                <img src={DHLLogo} alt="" className='dhl-Logo'></img>
                            </div>

                            <div className='courier-service-div-first' style={{ marginLeft: 16 }}>
                                <img src={RadioFullLogo} alt="" className='courier-service-radio-btn'></img>
                                <img src={FedexLogo} alt="" className='dhl-Logo' style={{ width: 70, marginLeft: -5 }}></img>
                            </div>
                        </div>



                        <div className='country-tax-div'>
                            <img src={ChekArrowLogo} alt="" className='checkArrowLogo'></img>
                            <p style={{ fontSize: 14 }}>Duty:<span style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>$16</span></p>
                        </div>

                        <div className='country-tax-div' style={{ marginTop: -1 }}>
                            <img src={ChekArrowLogo} alt="" className='checkArrowLogo'></img>
                            <p style={{ fontSize: 14, textTransform: 'uppercase' }}>VAT:<span style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>$16</span></p>
                        </div>

                        <div className='country-tax-div' style={{ marginTop: -1 }}>
                            <img src={ChekArrowLogo} alt="" className='checkArrowLogo'></img>
                            <p style={{ fontSize: 14 }}>Handling Charges:<span style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}>$16</span></p>
                        </div>


                        <div className='total-charges-tax-div'>
                            <p style={{ fontSize: 14 }}>Total Charges:<span style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 4 }}>$48</span></p>
                        </div>

                        <div style={{ height: 72 }} className='tax-on-delivery-text'>
                            <p className='cash-on-delivery-varify-text'>This amount is payable at the time of delivery.</p>
                        </div>




                    </div>

                    {/* <div className='card-saveAddress-form-div'>
                        <div style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'space-between' }}>
                            <img src={taxIncludedLogo} className='tax-Included-Logo'></img>
                            <p className='tax-Included-text'>Estimate Shipping & Tax</p>
                            <img src={DropDownLogo} className='tax-Included-collapsible' onClick={() => this.openNewAddresForm()}></img>
                        </div>
                    </div> */}

                    <div className='div-borader'></div>

                </div>




                <p className='card-pay-info-text'>Payment Information</p>

                {/* <div className='pay-with-paypal-div'>
                    <p className='pay-with-paypal-text'>Pay with</p>
                    <img src={PayPalLogo} className='payPal-input-logo'></img>
                    <div className='payPal-inputBox'>

                        <img src={ForwardBlueLogo} className='card-pay-with-paypal-forwardLogo-blue' onClick={() => this.openNewAddresForm()}></img>
                    </div>
                </div> */}

                <div className='pay-with-paypal-div-new'>
                    <div>
                        <p className='pay-with-paypal-text'>Pay with</p>
                        <img src={PayPalLogo} alt="" className='payPal-input-logo'></img>
                    </div>

                    <div className='payPal-inputBox'>

                        <img src={ForwardBlueLogo} alt="" className='card-pay-with-paypal-forwardLogo-blue' onClick={() => this.openNewAddresForm()}></img>
                    </div>
                </div>




                {/* <div className='reCaptcha' style={{ marginLeft: 16, borderRadius: 5, height: 70 }}>
                    <div className='reCaptcha-row-div'>
                        <img src={ChekboxEmptyLogo} className='reCaptcha-checkbox-Logo'></img>
                        <p className='robot-text' style={{ left: 0, marginLeft: 10 }}>I am not a robot</p>
                    </div>
                    <div className='reCaptcha-logo-div'>
                        <img src={ReCaptchaLogo} className='' style={{ right: 0, left: 'auto', marginRight:8 }}></ img>
                    </div>
                </div> */}





                <p className='card-pay-info-text'>Or fill Payment Information</p>

                <div className='card-payment-related-Msg'>
                    <img src={SecureLockLogo} alt="" className='card-secureLock-Logo'></img>
                    <p className='card-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                    <div style={{ display: 'flex', marginLeft: -13 }}>
                        <img src={AmericaCardLogo} alt="" className='america-card'></img>
                        <img src={VisaCardLogo} alt="" className='visa-card'></img>
                        <img src={MasterCardLogo} alt="" className='master-card'></img>
                    </div>
                </div>

                <div>
                    <input label='Full Name' type='text' placeholder='Name as it appears on the card' style={{ width: '91%', height: 47, marginLeft: 16, marginRight: 16 }} className='input-text-Area-card'></input>
                </div>

                <div style={{ marginTop: 3 }}>
                    <input label='Full Name' type='text' placeholder='Card Number' style={{ width: '91%', height: 47, marginLeft: 16, marginRight: 16 }} className='input-text-Area-card'></input>
                </div>

                <div className='card-expiry-date-div'>
                    <div className='card-expiry-month-div'>
                        <input label='Month of Expiry' type='text' placeholder='Month of Expiry' style={{ width: '100%', height: 47 }} className='input-text-card-date'></input>
                         <img src={DropDownLogo} alt="" className='month-expiry-dropdown-logo'></img>
                    </div>

                    <div className='card-expiry-year-div'>
                        <input label='Year of Expiry' type='text' placeholder='Year of Expiry' style={{ width: '100%', height: 47 }} className='input-text-card-date'></input>
                        <img src={DropDownLogo} alt="" className='year-expiry-dropdown-logo'></img>
                    </div>

                    {/* <div className='card-expiry-year-div' style={{ }}>
                        <input label='Year of Expiry' type='text' placeholder='Year of Expiry' style={{ width: '100%', height: 47, marginLeft: 16 }} className='input-text-card-date'></input>
                    </div> */}
                </div>

                <div className='card-expiry-date-div'>
                    <div className='card-expiry-month-div'>
                        <input label='CVV' type='password' placeholder='CVV' style={{ width: '100%', height: 47 }} className='input-text-card-date'></input>
                    </div>
                    <div className='card-expiry-month-div'>
                        <img src={VisaMasterCVVLogo} alt="" className='visa-master-CVV-Logo'></img>
                        <p className='CVV-text'>CVV</p>
                    </div>


                </div>


                {/* <div className='cvv-card-div'>
                    <div style={{ width: '43%' }}>
                    <input label='CVV' type='password' placeholder='CVV' style={{  height: 47, marginLeft: 16, borderRadius: 5 }} className='input-text-Area-card'></input>
                    </div>
                </div> */}




                <div className='reCaptcha' style={{ marginLeft: 16, borderRadius: 5, height: 70 }}>
                    <div className='reCaptcha-row-div'>
                        <img src={ChekboxEmptyLogo} alt="" className='reCaptcha-checkbox-Logo'></img>
                        <p className='robot-text' style={{ left: 0, marginLeft: 10 }}>I am not a robot</p>
                    </div>
                    <div className='reCaptcha-logo-div'>
                        <img src={ReCaptchaLogo} alt="" className='' style={{ right: 0, left: 'auto', marginRight: 8 }}></ img>
                    </div>
                </div>



                <div>
                    <Link to={{ pathname: '/paymentOptions', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                        <button className='makePayment-btn-disable' style={{ width: '94%', marginLeft: 12 }}>
                            Make Payment
                    </button>
                    </Link>
                </div>








            </div>
        )
    }
}    