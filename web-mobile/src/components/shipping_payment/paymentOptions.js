import React, { Component } from 'react' 
import SecureLockLogo from './shipping_payment_icon/Secure1.svg';
import VisaCardLogo from './shipping_payment_icon/visa card.svg';
import AmericaCardLogo from './shipping_payment_icon/amex.svg';
import MasterCardLogo from './shipping_payment_icon/Mastercard card.svg';
import PayPalLogo from './shipping_payment_icon/Paypal.svg';
import BackArrowLogo from './shipping_payment_icon/ic_arrow_back.svg';
import { Link } from 'react-router-dom'
import './shipping_payment.css'
import './radio_button.css'
export default class ShippingPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryCode: '',
            paymentStyle: 'online',
        }
    }

    onRadioButton = (paymentType) => {
        this.setState({
            paymentStyle: paymentType
        })
    }


    render() {
        return (
            <div style={{ backgroundColor: '#FFFAF7' }}>
                <div>
                    <div className='header-div' style={{ display: 'flex' }} >
                        <img src={BackArrowLogo} alt="" className='backword-logo-icon' onClick={() => this.props.history.goBack()}></img>
                        <p className='address-font'>Payment Options</p>
                    </div>
                    <hr style={{ borderColor: '#edd4c5' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                        <p className='payment-Amount-Text-CSS'>Payable Amount</p>
                        <p className='payment-Amount-CSS'>Rs. 6,400</p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#F5E3D8' }}>
                    <div style={{ marginTop: 10 }}>
                        <p className='payment-Options'>Payment Options</p>
                    </div>





                    <div className='form-div' style={{ paddingLeft: 0, paddingRight: 0, marginTop: -6 }}>





                        {/* <div className='payment-option-radio-btn' style={{ display: 'flex', marginTop: 10 }} >
                            <img src={RadioEmptyLogo} className='payment-radio-btn'></img>
                            <p className='payment-option-text'>Pay Online</p>
                        </div>
                        <div className='payment-borader'></div>

                        <div className='payment-option-radio-btn' style={{ display: 'flex', marginTop: 17 }} >
                            <img src={RadioFullLogo} className='payment-radio-btn'></img>
                            <p className='payment-option-text'>Cash On Delivery</p>
                        </div>

                        <div style={{ height: 140, marginTop: 10 }} className='cash-on-delivery-varify'>
                            <p className='cash-on-delivery-varify-text'>We might call you to verify your cash on  delivery order on the mobile number entered below.</p>
                            <div style={{ marginLeft: 8, marginRight: 8, marginTop: -16 }}>
                                <input label='Contact No.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' className='cash-on-delivery-varify-mobile'></input>
                            </div>
                        </div>
                        <div className='payment-borader'></div>

                        <div className='payment-option-radio-btn' style={{ display: 'flex', marginTop: 15 }} >
                            <img src={RadioEmptyLogo} className='payment-radio-btn'></img>
                            <p className='payment-option-text'>PayPal</p>
                        </div> */}



                        <div className="custom-radio-wrap" style={{marginTop:-5, marginBottom:0}}>
                            <form style={{ border: 'none'}}>
                                <div className="form-group" style={{marginTop:3}}>
                                    <input id="html" type="radio" name="custom-radio-btn"  style={{marginTop:5}}checked={this.state.paymentStyle === 'online' ? true : false} onClick={() => this.onRadioButton("online")} />
                                    <label className="custom-radio" for="html" ></label>
                                    <span className="label-text" style={{fontSize:14}}>Pay Online</span>
                                </div>
                                <div className='save-borader' style={{ marginLeft: -16, marginRight: -16, marginTop:10 }}></div>

                                <div className="form-group" style={{marginTop:12}}>
                                    <input id="css" type="radio" name="custom-radio-btn" onClick={() => this.onRadioButton("cod")} />
                                    <label className="custom-radio" for="css"></label>
                                    <span className="label-text">Cash On Delivery</span>
                                </div>

                                <div style={{ height: 140, marginTop: 10 }} className={this.state.paymentStyle === 'cod' ? 'cash-on-delivery-varify' : 'd-none'}>
                            <p className='cash-on-delivery-varify-text'>We might call you to verify your cash on  delivery order on the mobile number entered below.</p>
                            <div style={{ marginLeft: 8, marginRight: 8, marginTop: -16 }}>
                                <input label='Contact No.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' className='cash-on-delivery-varify-mobile'></input>
                            </div>
                        </div>

                                <div className='save-borader' style={{ marginLeft: -16, marginRight: -16, marginTop:10  }}></div>
                                

                                <div className="form-group" style={{marginTop:12}}>
                                    <input id="js" type="radio" name="custom-radio-btn" onClick={() => this.onRadioButton("Paypal")} />
                                    <label className="custom-radio" for="js"></label>
                                    <img src={PayPalLogo} alt="" className="paypal-radio-logo"></img>
                                </div>
                            </form>
                        </div>






                        {/* <div className='payment-option-radio-btn' style={{ display: 'flex', marginTop: 15 }} >
                            <img src={RadioEmptyLogo} className='payment-radio-btn'></img>
                            <p className='payment-option-text'>EMI</p>


                          
                            

                        </div>
                        <div className='payment-borader'></div>
                        <div className='payment-borader' style={{marginLeft:16, marginTop:-8}}></div>


                        <div style={{ paddingTop: 3, marginLeft:16, marginRight:16 }}>
                            <input label='Country' type='text' placeholder='Select a Bank' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} className='country-dropdown-btn'></img>
                        </div>

                        <div style={{ paddingTop: 3, marginLeft:16, marginRight:16 }}>
                            <input label='Country' type='text' placeholder='Select Duration' style={{}} className='input-text-Area-SP'></input>
                            <img src={backLogo} className='country-dropdown-btn'></img>
                        </div> */}

                        {/* <div className="EMI-charges-div">
                                <div className="EMI-charges-msg-div" >
                                    <div className="EMI-charges-text-div">
                                        <p style={{ color:'#f3a320',fontSize:14,  textAlign:'justify' }}>An additional charges at the rate of <span style={{color:'#D88350', fontWeight:'bold'}}>12%</span> per annum would be charged on your credit card.
                                         Indicative EMI is <span style={{color:'#D88350', fontWeight:'bold'}}>Rs. 362.07</span> and indicative total interest paid wii be <span style={{color:'#D88350', fontWeight:'bold'}}>Rs. 362.42</span>. Taxes applicable on interest paid to
                                         bank. </p>    
                                    </div>
                              </div>
                          </div> */}
                    </div>


                    <div className="promotional-code-div" style={{marginTop:-7}}>
                        <div className="promotional-div" >
                            <div className="promotional-text-div">
                                <p style={{ color: '#f3a320', fontSize: 14 }}>Cash on delivery has been disabled because you
                                        applied  a promotional code valid only on online payments. </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginLeft: 16, marginRight: 16, marginTop: 10 }}>
                        <p style={{ fontSize: 15 }}><span className='tap-Here'>tap here</span> to remove the code from your cart if you wish to pay by COD.</p>
                    </div>





                    <div className={this.state.paymentStyle === 'online' ?'payment-related-Msg'  : 'd-none'} style={{ marginLeft: 16, marginRight: 16 }}>
                        <img src={SecureLockLogo} alt="" className='SecureLock-Logo-style'></img>
                        <p className='secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                        <div style={{ display: 'flex', paddingBottom: 10 }}>
                            <img src={AmericaCardLogo} alt="" className='america-card' style={{}}></img>
                            <img src={VisaCardLogo} alt="" className='visa-card'></img>
                            <img src={MasterCardLogo} alt="" className='master-card'></img>
                        </div>
                    </div>


                    <div>
                        <div className={this.state.paymentStyle === 'Paypal' ? 'paypal-payment-related-Msg-SA' : 'd-none'} style={{ marginTop: 20 }}>
                            <img src={PayPalLogo} alt="" className='paypal-logo' style={{ marginTop: 10 }}></img>
                            <p className='paypal-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                            <div style={{ display: 'flex', paddingBottom: 10 }}>
                                <img src={AmericaCardLogo} alt="" className='paypal-america-card'></img>
                                <img src={VisaCardLogo} alt="" className='visa-card'></img>
                                <img src={MasterCardLogo} alt="" className='master-card'></img>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '30%', backgroundColor: '#ffffff' }}>
                        <Link to={{ pathname: '/makePaymentOptions', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                            <button className='pay-rupees-btn'>
                                <strong>Pay Rs. 6400</strong><br />
                                <p style={{ fontSize: 12 }}>ADD CARD DETAILS ON NEXT STEP</p>

                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}    