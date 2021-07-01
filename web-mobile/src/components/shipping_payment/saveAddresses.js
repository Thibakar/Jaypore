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
import '../../assets/css/shipping_payment_new.css'
import DeleteIcon from "../../assets/shipping_payment_icon/Delete.svg";
import EditIcon from "../../assets/shipping_payment_icon/Edit.svg";

export default class ShippingPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'home',
            payOption: 'payonline',
            addressOption: 'home'
        }
    }

    handleOptionChange = (key, value) => {
        let stateObj = {}
        stateObj[key] = value;
        this.setState(stateObj);
      }

    // onClickContact() {
    //     this.setState({
    //         mobileCountryCode: true,
    //         // mobileCountryCode: !this.state.mobileCountryCode,
    //         marLeft: 48
    //     })
    // }


    render() {
        return (
            <div style={{ backgroundColor: '#FFFAF7' }}>

                <div className='card-header-div bg-white'>
                    <img src={BackArrowLogo} alt="" className='backword-logo-icon' onClick={() => this.props.history.goBack()}></img>
                    <p className='address-font'>Address</p>
                </div>

                <hr className="jp-mtb-0 jp-border-color"/>

                <div id="d-wrapper">
        <div className="zig-zag-bottom">
        <div className='card-payableAmt-div'>
                    <div className='card-payment-Amount-Text jp-pt-20 jp-pl-20'>Payable Amount</div>
                    <div className='card-payment-Amount jp-pr-20 jp-pt-20'>Rs. 6,400</div>
                </div>
        </div>
</div>
                


                <div>
                    <div className="jp-mt-40 jp-ml-20 jp-mb-10">
                        <div className='' > Saved Addresses</div>
                    </div>

                    <div className="card-sp inner inner-layer sp-inactive-card">
                      <div className="row">
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "home") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.addressOption === 'home'} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <img src={DeleteIcon} alt="welcom.in" className="sp-delete-icon" onClick={() => this.goToDeteleModel()} />
                              <a href="#edit-modal"><img src={EditIcon} alt="welcom.in" className="p-l-20 sp-edit-icon" /></a>
                              <div id="edit-modal" className="modal-window">

                                
                              </div>
                            </span>
                          </div>

                          <div className="sp-mt-10">
                            <b className="font-m">Shahnawaz Alam </b>
                            
                          </div>
                          <div className="a-r-txt text-light-grey jp-mt-10">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </div>
                          <div className="jp-mt-10"><b className="font-m">Home</b>
                          </div>
                          <div className="jp-mt-10">
                            <div className="checkbox-group">
                              <input type="checkbox" id="html21123" checked={true} />
                              <label htmlFor="html21123" className="checkbox-label" ><span className="checkbox-label-text jp-ml-0"><span className="bill">Billing Address: <span className="font-grey">  Same as Shipping Address</span></span></span></label>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 coldrdelEdit09"></div>
                      </div>
                    </div>

                    <div className="card-sp inner inner-layer sp-inactive-card">
                      <div className="row">
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "home") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.addressOption === 'home'} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <img src={DeleteIcon} alt="welcom.in" className="sp-delete-icon" onClick={() => this.goToDeteleModel()} />
                              <a href="#edit-modal"><img src={EditIcon} alt="welcom.in" className="p-l-20 sp-edit-icon" /></a>
                              <div id="edit-modal" className="modal-window">

                                
                              </div>
                            </span>
                          </div>

                          <div className="sp-mt-10">
                            <b className="font-m">Shahnawaz Alam </b>
                            
                          </div>
                          <div className="a-r-txt text-light-grey jp-mt-10">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </div>
                          <div className="jp-mt-10"><b className="font-m">Home</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-sp inner inner-layer sp-inactive-card">
                      <div className="row">
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "home") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.addressOption === 'home'} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <img src={DeleteIcon} alt="welcom.in" className="sp-delete-icon" onClick={() => this.goToDeteleModel()} />
                              <a href="#edit-modal"><img src={EditIcon} alt="welcom.in" className="p-l-20 sp-edit-icon" /></a>
                              <div id="edit-modal" className="modal-window">

                                
                              </div>
                            </span>
                          </div>

                          <div className="sp-mt-10">
                            <b className="font-m">Shahnawaz Alam </b>
                            
                          </div>
                          <div className="a-r-txt text-light-grey jp-mt-10">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </div>
                          <div className="jp-mt-10"><b className="font-m">Home</b>
                          </div>
                          
                        </div>
                      </div>
                    </div>

                    <section className="accordion1 sp-m-b-15 address-card jp-border jp-border-radius jp-mt-20 jp-mb-20">
                    <input type="checkbox" name="collapse4" id="handle1" />
                   
                    <label className=" address-label add-new-label new-billing-Address-div-SP jp-position-relative" htmlFor="handle1">
                      
                        <span className="sp-add-new-label-span">Add A New Shipping Address</span>
                        <img src={DropDownLogo} alt="" className='add-new-shipping-adds-box-downLogo accordion-image'></img>
                    </label>
                    <div className="row add-address-content jp-pl-20 jp-pr-20 jp-pl-20">
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Full Name</label>
                        <input type="email" className="form-control-sp" placeholder="" />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Address</label>
                        <input type="text" className="form-control-sp" placeholder=" " />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Country</label>
                        <select className="form-control-sp jp-form-control-select-lg" placeholder="" >
                          <option>Please select Country</option>
                          <option>India</option>
                          <option>United States of America</option>
                        </select>
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Pin Code / Zip Code</label>
                        <input type="text" className="form-control-sp" placeholder=" " />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">State / Province</label>
                        <select className="form-control-sp jp-form-control-select-lg" placeholder="" >
                          <option>Please Select State</option>
                          <option>Andhra Pradesh</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                        </select>
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">City</label>
                        <select className="form-control-sp jp-form-control-select-lg" placeholder="" >
                          <option>Please Select City</option>
                          <option>Bangalore</option>
                          <option>Mangalore</option>
                          <option>Mysore</option>
                          <option>Hassan</option>
                        </select>
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Phone Number</label>
                        <input type="phone" className="form-control-sp" placeholder=" " />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Address Type</label>
                        <div className="row p-l-5 add-type-row jp-ml-0">
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "home") }} >
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="home" checked={this.state.selectedOption === 'home'}
                            />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Home</label>
                          </div>
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "office") }}>
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="office" checked={this.state.selectedOption === 'office'}
                            />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Office</label>
                          </div>
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "other") }}>
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="other" checked={this.state.selectedOption === 'other'} />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Other</label>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="col-12 jp-mb-20">
                        <div className="checkbox-group sp-same-check">
                          <input type="checkbox" id="html4" />
                          <label htmlFor="html4" className="checkbox-label sp-check-label" >Billing Address will be same</label>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="accordion1 sp-m-b-15 address-card jp-border jp-border-radius jp-mt-20 jp-mb-20">
                    <input type="checkbox" name="collapse4" id="handle2" />
                   
                    <label className=" address-label add-new-label new-billing-Address-div-SP jp-position-relative" htmlFor="handle2">
                      
                        <span className="sp-add-new-label-span">Add A New Billing Address</span>
                        <img src={DropDownLogo} alt="" className='add-new-shipping-adds-box-downLogo accordion-image'></img>
                    </label>
                    <div className="row add-address-content jp-pl-20 jp-pr-20 jp-pl-20">
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Full Name</label>
                        <input type="email" className="form-control-sp" placeholder="" />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Address</label>
                        <input type="text" className="form-control-sp" placeholder=" " />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Country</label>
                        <select className="form-control-sp jp-form-control-select-lg" placeholder="" >
                          <option>Please select Country</option>
                          <option>India</option>
                          <option>United States of America</option>
                        </select>
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Pin Code / Zip Code</label>
                        <input type="text" className="form-control-sp" placeholder=" " />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">State / Province</label>
                        <select className="form-control-sp jp-form-control-select-lg" placeholder="" >
                          <option>Please Select State</option>
                          <option>Andhra Pradesh</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                        </select>
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">City</label>
                        <select className="form-control-sp jp-form-control-select-lg" placeholder="" >
                          <option>Please Select City</option>
                          <option>Bangalore</option>
                          <option>Mangalore</option>
                          <option>Mysore</option>
                          <option>Hassan</option>
                        </select>
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Phone Number</label>
                        <input type="phone" className="form-control-sp" placeholder=" " />
                      </div>
                      <div className="jp-mt-10 col-12">
                        <label className="sp-form-label">Address Type</label>
                        <div className="row p-l-5 add-type-row jp-ml-0">
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "home") }} >
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="home" checked={this.state.selectedOption === 'home'}
                            />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Home</label>
                          </div>
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "office") }}>
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="office" checked={this.state.selectedOption === 'office'}
                            />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Office</label>
                          </div>
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "other") }}>
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="other" checked={this.state.selectedOption === 'other'} />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Other</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

            
                </div>

<div className="bg-white jp-border-top"> 
                <div>
                    <div className='pay-info-text jp-pt-20 jp-c-b2 jp-ml-20'>Payment Information</div>
                    <div className='select-Payment-options jp-c-g1 jp-ml-20'>Select Payment options</div>

                    <div className="jp-p-15 jpm-mb-20 jp-ml-5">
                        

                    <div className=" flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "payonline") }} >
                        <input className="radio-custom payment-radio jp-m-0" name="radio-group11" type="radio" value="payonline" checked={this.state.payOption === 'payonline'} />
                        <label className="radio-custom-label payment-radio-label sp-m-0 p-r-5 font-12 jp-width-100">Pay Online</label>
                      </div>
                      <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "cod") }} >
                        <input className="radio-custom payment-radio jp-m-0" name="radio-group11" type="radio" value="cod" checked={this.state.payOption === 'cod'} />
                        <label className="radio-custom-label payment-radio-label sp-m-0 p-r-5 font-12 jp-width-100">Cash On Delivery</label>
                      </div>

                      <div className=" flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "paypal") }} >
                        <input className="radio-custom payment-radio jp-m-0" name="radio-group11" type="radio" value="paypal" checked={this.state.payOption === 'paypal'} />
                        <label className="radio-custom-label payment-radio-label sp-m-0 p-r-5 font-12 jp-width-100"><img src={PayPalLogo} alt="" /></label>
                      </div>
                    </div>
                </div>

                <div>
                    <div className={this.state.payOption === 'Paypal' ? 'paypal-payment-related-Msg-SA' : 'd-none'} style={{ marginTop: -12 }}>
                        <img src={PayPalLogo} className='paypal-logo' alt="" style={{ marginTop: 10 }}></img>
                        <p className='paypal-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</p>
                        <div style={{ display: 'flex', paddingBottom: 10 }}>
                            <img src={AmericaCardLogo} alt="" className='paypal-america-card'></img>
                            <img src={VisaCardLogo} alt="" className='visa-card'></img>
                            <img src={MasterCardLogo} alt="" className='master-card'></img>
                        </div>
                    </div>
                </div>

                <div className={this.state.payOption === 'cod' ? 'cash-on-delivery-varify-SA jp-mt-10' : 'd-none jp-mt-10'}>
                    <div className='cash-on-delivery-varify-text'>We might call you to verify your cash on  delivery order on the mobile number entered below.</div>
                    <div className="jp-ml-10 jp-mr-10 jp-mb-10">
                        <input label='Contact Number.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' style={{}} className='form-control-sp' onClick={() => this.onClickContact()}></input>
                        {/* <input label='Contact No.' pattern="^\d{10}$" type='text' placeholder='Mobile Number' className='cash-on-delivery-varify-mobile' style={{width:'90%'}}></input> */}
                    </div>
                </div>

                <div className={this.state.payOption === 'payonline' ? 'card-payment-related-Msg jp-mt-10' : 'd-none jp-mt-10'} style={{marginTop:-12}}>
                    <img src={SecureLockLogo} alt="" className='card-secureLock-Logo'></img>
                    <div className='card-secure-text'>you will be directed to a 100% secure
                    geteway to process your payment.</div>
                    <div style={{ display: 'flex', marginLeft: -13 }}>
                        <img src={AmericaCardLogo} alt="" className='america-card'></img>
                        <img src={VisaCardLogo} alt="" className='visa-card'></img>
                        <img src={MasterCardLogo} alt="" className='master-card'></img>
                    </div>
                </div>


                <div className="e-container jp-none">
                    <div className="e-section" >
                        <div className="e-textSection" style={{ height: 70, padding: 0, paddingLeft: 5 }}>
                            <p style={{ color: '#f3a320', fontSize: 14 }}>Cash on delivery has been disabled because you
                                        applied  a promotional code valid only on online payments. </p>
                        </div>
                    </div>
                </div>

                <div className={(this.state.payOption === 'payonline') || (this.state.payOption === 'paypal') ? 'jp-display' : 'jp-none'} style={{ marginLeft: 16, marginRight: 16, marginTop: 10 }}>
                    <p style={{ fontSize: 15 }}><span className='tap-Here'>tap here</span> to remove the code from your cart if you wish to pay by COD.</p>
                </div>



                <div className="">
                    <Link to={{ pathname: '/orderConfirmation', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                        <button className='makePayment-btn-enable-SP jp-c-w'>
                            Make Payment
                    </button>
                    </Link>
                </div>
                </div>


            </div>
        )
    }
}    