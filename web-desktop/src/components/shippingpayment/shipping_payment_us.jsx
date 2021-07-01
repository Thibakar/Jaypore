import React, { Component } from "react";

import MobileIcon from "../../assets/shipping_payment_icon/Mobile.svg";
import DeleteIcon from "../../assets/shipping_payment_icon/Delete.svg";
import EditIcon from "../../assets/shipping_payment_icon/Edit.svg";
import dropDown from "../../assets/shipping_payment_icon/Dropdown Arrow.svg";
import MoneyIconcircle from "../../assets/shipping_payment_icon/moneyIconcircle.png";
import Paypal from "../../assets/shipping_payment_icon/Paypal.svg";
import Secure1 from "../../assets/shipping_payment_icon/Secure1.svg";
import amex from "../../assets/shipping_payment_icon/amex.svg";
import visacard from "../../assets/shipping_payment_icon/visa card.svg";
import Mastercard from "../../assets/shipping_payment_icon/Mastercard card.svg";
import DHL from "../../assets/shipping_payment_icon/DHL.svg";
import Fedex from "../../assets/shipping_payment_icon/Fedex.svg";
import tickimghio from "../../assets/icons/sp-tick.svg";
import visamaster from "../../assets/icons/visa-master.svg"
import reCaptcha from "../../assets/shipping_payment_icon/reCaptcha.svg";
import forwardBlue from "../../assets/shipping_payment_icon/forward-blue-Arrow.png";
import addIcon from "../../assets/icons/sp-add.svg";
import paypal from "../../assets/icons/Paypal.svg";
import chevronrightblue from "../../assets/icons/chevron-right.svg";
import chevronformdown from "../../assets/icons/chevron-form-down.svg";
import "../../assets/css/shipping-payment.css";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import MyBagHeader from "../mybag/mybagheader/myBag_header";
import Recaptcha from 'react-recaptcha';
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

export default class ShippingPaymentUS extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'home',
      payOption: 'payonline',
      addressOption: 'home'
    };
  }

  recaptchaLoaded = () => {
    console.log("Captcha loaded successfully !");
  }

  goToDeteleModel = () => {
    NavUtil.goToDeleteModal()
  };
  goToEditeModel = () => {
    NavUtil.goToEditModal()
  };
  goOrderConfirmation = () => {
    NavUtil.goToOrderConfirmation()
  };

  handleOptionChange = (key, value) => {
    let stateObj = {}
    stateObj[key] = value;
    this.setState(stateObj);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <MyBagHeader /> */}

        <div style={{ backgroundColor: "#fdf0e7" }}>
          <div className="container" style={{ paddingTop: "1%" }}>
            <div className="row">
              <div className="col-md-7 sp-pr-75 sp-mb-20">
                <div className="suscard Rectangle-9">
                  <div className="head-spp ">
                    <div className="sp-card-title">Shipping Address</div>
                  </div>
                  <h5 className="stylePara font-18">Choose From Saved Addresses</h5>

                  <div className="card outer-layer">
                    <div className="card inner inner-layer">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-md-12 IconBarMehAlam">
                          {/* <img src={RadioIcon} alt="welcom.in" /> */}
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "home") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.addressOption === 'home'} onChange={() => { this.handleOptionChange("addressOption", "home") }} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <img
                                src={DeleteIcon}
                                alt="welcom.in"
                                className="sp-delete-icon"
                                onClick={() => this.goToDeteleModel()}
                              />
                              <img
                                src={EditIcon}
                                alt="welcom.in"
                                className="p-l-20 sp-edit-icon"
                                onClick={() => this.goToEditeModel()}
                              />
                            </span>
                          </div>

                          <p className="sp-mt-10">
                            <b className="b-head">Shahnawaz Alam </b>&nbsp;
                            <img
                              src={MobileIcon}
                              alt="welcome.in"
                              className="paddingLeftCallIcon"
                            />
                            <b className="b-head"> +91 9773778575</b>
                          </p>
                          <p className="a-r-txt text-light-grey">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </p>
                          <p>Home
                          </p>
                          <div className="">
                            <label className="sp-same-billing-label">
                              <span className="bill">Billing Address: <span className="font-grey">  Same as Shipping Address
                          </span></span>
                            </label>
                          </div>
                        </div>
                        <div className="col-1 coldrdelEdit09"></div>
                      </div>
                    </div>

                    <div className="card inner inner-layer">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "office") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="office" checked={this.state.addressOption === 'office'} onChange={() => { this.handleOptionChange("addressOption", "office") }} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <img
                                src={DeleteIcon}
                                alt="welcom.in"
                                className="sp-delete-icon"
                                onClick={() => this.goToDeteleModel()}
                              />
                              <img
                                src={EditIcon}
                                alt="welcom.in"
                                className="p-l-20 sp-edit-icon"
                                onClick={() => this.goToEditeModel()}
                              />
                            </span>
                          </div>

                          <p className="sp-mt-10">
                            <b className="b-head">Shahnawaz Alam </b>&nbsp;
                            <img
                              src={MobileIcon}
                              alt="welcome.in"
                              className="paddingLeftCallIcon"
                            />
                            <span className="b-head"> +91 9773778575</span>
                          </p>
                          <p className="a-r-txt text-light-grey">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </p>
                          <span>
                            <b className="b-head">Home</b>
                          </span>
                        </div>
                        <div className="col-1 coldrdelEdit09"></div>
                      </div>
                    </div>

                    <div className="card inner inner-layer">
                      <div className="row">
                        <div className=""></div>
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "other") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="other" checked={this.state.addressOption === 'other'} onChange={() => { this.handleOptionChange("addressOption", "other") }} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <img
                                src={DeleteIcon}
                                alt="welcom.in"
                                className="sp-delete-icon"
                                onClick={() => this.goToDeteleModel()}
                              />
                              <img
                                src={EditIcon}
                                alt="welcom.in"
                                className="p-l-20 sp-edit-icon"
                                onClick={() => this.goToEditeModel()}
                              />
                            </span>
                          </div>

                          <p className="sp-mt-10">
                            <b className="b-head">Shahnawaz Alam </b>&nbsp;
                            <img
                              src={MobileIcon}
                              alt="welcome.in"
                              className="paddingLeftCallIcon"
                            />
                            <b className="b-head"> +91 9773778575</b>
                          </p>
                          <p className="a-r-txt text-light-grey">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </p>
                          <span>
                            <b className="b-head a-sb-txt">Home</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="accordion1 sp-m-b-15">
                    <input type="checkbox" name="collapse4" id="handle1" />
                    <label className=" address-label add-new-label" htmlFor="handle1">
                      {" "}
                      <b className="bBillingTag sp-add-new-label">
                        <img src={addIcon} alt="add" className="" />
                        <span className="sp-add-new-label-span">Add New Address</span></b>
                    </label>
                    <div className="content bg-white sp-add-new-content">
                      <div>
                        <label className="sp-form-label">Full Name</label>
                        <input type="email" className="skform-control563" placeholder="" />
                      </div>
                      <div>
                        <label className="sp-form-label">Address</label>
                        <input type="text" className="skform-control563" placeholder=" " />
                      </div>
                      <div>
                        <label className="sp-form-label">Country</label>
                        <select className="skform-control563" placeholder="" >
                          <option>Please Select Country</option>
                          <option>India</option>
                          <option>United States of America</option>
                        </select>
                      </div>
                      <div>
                        <label className="sp-form-label">Pin Code / Zip Code</label>
                        <input type="text" className="skform-control563" placeholder=" " />
                      </div>
                      <div>
                        <label className="sp-form-label">State / Province</label>
                        <select className="skform-control563" placeholder="" >
                          <option>Please Select State</option>
                          <option>Andhra Pradesh</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                        </select>
                      </div>
                      <div>
                        <label className="sp-form-label">City</label>
                        <select className="skform-control563 " placeholder="" >
                          <option>Please Select City</option>
                          <option>Bangalore</option>
                          <option>Mangalore</option>
                          <option>Mysore</option>
                          <option>Hassan</option>
                        </select>
                      </div>
                      <div>
                        <label className="sp-form-label">Phone Number</label>
                        <input type="phone" className="skform-control563" placeholder=" " />
                      </div>
                      <div>
                        <label className="sp-form-label">Address Type</label>
                        <div className="row p-l-5 add-type-row">
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "home") }} >
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="home" checked={this.state.selectedOption === 'home'} onChange={() => { this.handleOptionChange("selectedOption", "home") }}
                            />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Home</label>
                          </div>
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "office") }}>
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="office" checked={this.state.selectedOption === 'office'} onChange={() => { this.handleOptionChange("selectedOption", "office") }}
                            />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Office</label>
                          </div>
                          <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "other") }}>
                            <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="other" checked={this.state.selectedOption === 'other'} onChange={() => { this.handleOptionChange("selectedOption", "other") }} />
                            <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Other</label>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="row p-l-20">
                        <div className="checkbox-group sp-same-check">
                          <input type="checkbox" id="html4" />
                          <label htmlFor="html4" className="checkbox-label sp-check-label" >Billing Address will be same</label>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* <section className="accordion1 sp-m-b-15">
                    <input type="checkbox" name="collapse4" id="handle2" />
                    <div className="sp-mlr-15" htmlFor="handle2">
                      {" "}
                      <b className="bBillingTag">Add a biling address</b>
                      <img
                        src={dropDown}
                        alt="welcom.in"
                        className="DropdownAction"
                      />
                    </div>
                    <div className="content bg-white">
                      <div>
                        <label className="shipping-label">Full Name</label>
                        <input
                          type="email"
                          className="skform-control563"
                          id="exampleInputEmail1"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label className="shipping-label">Address</label>
                        <input
                          type="email"
                          className="skform-control563sp"
                          id="exampleInputEmail1"
                          placeholder=" "
                        />
                      </div>
                      <div>
                        <label className="shipping-label">country</label>
                        <select
                          className="skform-control563"
                          id="exampleInputEmail1"
                          placeholder=""
                        >
                          <img
                            src={dropDown}
                            alt="welcom.in"
                            className="DropdownAction"
                          />
                          <option>India</option>
                          <option>Japan</option>
                          <option>Japan</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div>
                        <label className="shipping-label">pin Code/ zip code</label>
                        <input
                          type="email"
                          className="skform-control563"
                          id="exampleInputEmail1"
                          placeholder=" "
                        />
                      </div>{" "}
                      <div>
                        <label className="shipping-label">Satate/Province</label>
                        <select
                          className="skform-control563"
                          id="exampleInputEmail1"
                          placeholder=""
                        >
                          <img
                            src={dropDown}
                            alt="welcom.in"
                            className="DropdownAction"
                          />
                          <option>India</option>
                          <option>Japan</option>
                          <option>Japan</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div>
                        <label className="shipping-label">city</label>
                        <select
                          className="skform-control563"
                          id="exampleInputEmail1"
                          placeholder=""
                        >
                          <img
                            src={dropDown}
                            alt="welcom.in"
                            className="DropdownAction"
                          />
                          <option>India</option>
                          <option>Japan</option>
                          <option>Japan</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div>
                        <label className="shipping-label">Phone Number</label>
                        <input
                          type="email"
                          className="skform-control563"
                          id="exampleInputEmail1"
                          placeholder=" "
                        />
                      </div>
                      <div>
                        <label className="shipping-label">Phone Number</label>

                        <div className="row p-l-5">
                          <img
                            src={RadioIcon}
                            alt="welcom.in"
                            className="paddingIcon"
                          />
                          <p className="pstyleHome">Home</p>
                          <img
                            src={RadioIcon}
                            alt="welcom.in"
                            className="paddingIcon"
                          />
                          <p className="pstyleHome"> Office</p>
                          <img
                            src={RadioIcon}
                            alt="welcom.in"
                            className="paddingIcon"
                          />
                          <p className="pstyleHome">Others</p>
                        </div>
                      </div>
                      <hr className="hstyLe51"></hr>
                      <div className="row p-l-5 ">
                        <img
                          src={CheckboxIcon}
                          alt="weelcom.in"
                          className="IconOfCheckBx"
                        />
                        <p className="IconOfCheckBx">
                          Billing address will be same
                        </p>
                      </div>
                    </div>
                  </section> */}
                </div>
              </div>
              <div className="col-md-5 sp-pl-75 jp-mb-20">
                <div className="card Rectangle-1h sp-items-card">
                  <h5 className="crdMrrectangle">
                    <span className="font-14 text-42 a-sb-txt sp-item-title">Items</span>
                  </h5>
                  <div className="d-flex">
                    <img
                      src="https://static.jaypore.com/tr:w-42,h-56/media/catalog/product/r/i/ritacb40013457-1_5.jpg"
                      alt="welcom.in"
                      className="img-sp"
                    />
                    <img
                      src="https://static.jaypore.com/tr:w-42,h-56/media/catalog/product/r/i/ritacb40013457-1_5.jpg"
                      alt="welcom.in"
                      className="img-sp"
                    />
                    <img
                      src="https://static.jaypore.com/tr:w-42,h-56/media/catalog/product/r/i/ritacb40013457-1_5.jpg"
                      alt="welcom.in"
                      className="img-sp"
                    />
                    <span className="font-12  p-t-20 a-m-txt text-42 sp-pl-15">
                      Total Number of Items: <b className="sp-bold">3</b>
                    </span>
                    <span className="font-12 p-t-20 a-m-txt text-42 p-l-15 ">
                      Price: <b className="sp-bold">Rs. 9288</b>
                    </span>
                  </div>
                </div>


                <div className="sp-tab">
                  <input className="sp-tabs-checkbox" type="checkbox" id="sp-handing1" />
                  <label htmlFor="sp-handing1" className=" sp-tab-label category-filter-label"><div className="d-flex">
                    <img
                      src={MoneyIconcircle}
                      alt="welcom.in"
                      className="sp-header-icon-left"
                    />
                    <span className="text-green sp-header-label">Estimate Shipping & Tax</span>
                  </div> </label>
                  <div className="sp-tab-content jp-p-20">
                    <div className="">
                      <div className="jp-c-b2">
                        Enter your destination to get shipping estimate
                        </div>
                      <input name="country" className="form-control jp-mt-10" placeholder="Australia " />
                    </div>
                    <div className="d-flex jp-mt-10">
                      <div className="card mrDhLicon">
                        <div className="flex-center" onClick={() => { this.handleOptionChange("shippingOption", "dhl") }}>
                          <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.shippingOption === 'dhl'} onChange={() => { this.handleOptionChange("shippingOption", "dhl") }} />
                          <label className="radio-custom-label sp-m-0"  ><img src={DHL} alt="welcom.in" className="dhLiopSize" /></label>
                        </div>
                      </div>
                      <div className="card mrDhLicon">
                        <div className="flex-center" onClick={() => { this.handleOptionChange("shippingOption", "fedex") }}>
                          <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.shippingOption === 'fedex'} onChange={() => { this.handleOptionChange("shippingOption", "fedex") }} />
                          <label className="radio-custom-label sp-m-0"  ><img src={Fedex} alt="welcom.in" className="dhLiopSize" /></label>
                        </div>
                      </div>
                    </div>

                    <div className="jp-mt-10">

                      <span className="">
                        <img src={tickimghio} alt="welcom.in" className="" /><span className="jp-c-g1">Duty: </span><span className="jp-c-b2">$15</span></span>

                      <span className="jp-ml-10">
                        <img src={tickimghio} alt="welcom.in" className="" /><span className="jp-c-g1">VAT: </span><span className="jp-c-b2">$15</span>
                      </span>

                      <span className="jp-ml-10">
                        <img src={tickimghio} alt="welcom.in" className="" /><span className="jp-c-g1">Handling Charges:</span> <span className="jp-c-b2">$15</span>
                      </span>
                    </div>

                    <div className="jp-mt-15">
                      <span className="jp-c-b1">Total charges:</span><span className="jp-c-b2"> $45</span>
                    </div>

                    <div className="jp-mt-10">
                      <button className="jp-btn jp-btn-warning jp-width-100 jp-font-r">This amount is payable at the time of delivery</button>
                    </div>

                  </div>
                </div>

                <div className="card Rectangle-1 payment-card">
                  <h6 className="crdImgPaymentOpt">
                    <span className="a-sb-txt text-12">Payment Options</span>
                  </h6>
                  <div className="payment-card-body jp-p-20">
                    <div className=" ">
                      <button className="paypal-button jp-width-100 text-left">
                        <span className="paypal-button-title">
                          Pay with
                        </span>

                        <span className="">
                          <img src={paypal} alt="welcom.in" className="" />
                        </span>
                        <span className="">
                          <img src={chevronrightblue} alt="welcom.in" className="forward-blue" />
                        </span>
                      </button>
                    </div>

                    <div className="jp-mt-15">
                      <div className="jp-c-g1">OR FILL IN PAYMENT INFO</div>
                    </div>
                    <div className="jp-mt-15">
                      <input type="email" className="form-control" placeholder="Shahnawaz Alam " />
                    </div>
                    <div className="jp-mt-15">
                      <input type="email" className="form-control" placeholder="4505 0200 1004 4162 " />
                    </div>

                    <div className="row jp-mt-15">
                      <div className="col-6 jp-pr-7-5">
                        <div className=" ">
                          <select className="form-control jp-form-control-select" placeholder="02" >
                            <option>Expiry Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sept</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dev</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 jp-pl-7-5">
                        <div className="">
                          <select className="form-control jp-form-control-select" placeholder="21" >
                            <option>Expiry Year</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row jp-mt-15 jp-mb-15">
                      <div className="col-6 jp-pr-7-5">
                        <input type="email" className="form-control" maxLength={3} placeholder="cvv" />
                      </div>
                      <div className="col-6 jp-pl-7-5">
                        <img className="cvv-height" src={visamaster} alt="welcom.in" />
                      </div>
                    </div>
                    <div className="jp-width-100">
                      <Recaptcha
                        sitekey="6Lcg59kUAAAAACmRxLFWqXhg98zo3EtHYveoUiBV"
                        render="explicit"
                        onloadCallback={this.recaptchaLoaded}
                        className="sp-recaptcha jp-width-100"
                      />
                    </div>
                    <div className="">
                      <button className="login-button m-t-10" type="submit" onClick={() => this.goOrderConfirmation()}>
                        Make Payment
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
