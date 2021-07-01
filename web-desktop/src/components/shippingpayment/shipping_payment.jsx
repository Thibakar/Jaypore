import React, { Component } from "react";
import RadioIcon from "../../assets/shipping_payment_icon/Radio - Empty.svg";
import MobileIcon from "../../assets/shipping_payment_icon/Mobile.svg";
import DeleteIcon from "../../assets/shipping_payment_icon/Delete.svg";
import EditIcon from "../../assets/shipping_payment_icon/Edit.svg";
import CheckboxIcon from "../../assets/shipping_payment_icon/checkbox Selected.svg";
import dropDown from "../../assets/shipping_payment_icon/Dropdown Arrow.svg";
import MoneyIconcircle from "../../assets/shipping_payment_icon/moneyIconcircle.png";
import RadioIconsvg from "../../assets/shipping_payment_icon/Radio - Selected.svg";
import Paypal from "../../assets/shipping_payment_icon/Paypal.svg";
import Secure1 from "../../assets/shipping_payment_icon/Secure1.svg";
import amex from "../../assets/shipping_payment_icon/amex.svg";
import visacard from "../../assets/shipping_payment_icon/visa card.svg";
import Mastercard from "../../assets/shipping_payment_icon/Mastercard card.svg";
import DHL from "../../assets/shipping_payment_icon/DHL.svg";
import Fedex from "../../assets/shipping_payment_icon/Fedex.svg";
import tickimghio from "../../assets/shipping_payment_icon/tickimghio.png";
import visamaster from "../../assets/shipping_payment_icon/visa-master cvv.svg";
import reCaptcha from "../../assets/shipping_payment_icon/reCaptcha.svg";
import forwardBlue from "../../assets/shipping_payment_icon/forward-blue-Arrow.png";
import addIcon from "../../assets/icons/sp-add.svg";
import "../../assets/css/shipping-payment.css";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import MyBagHeader from "../mybag/mybagheader/myBag_header";
import EditModal from "./edit_modal";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";
import DeleteModel from "./delete_modal";

export default class ShippingPayment extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'home',
      payOption: 'payonline',
      addressOption: 'home',
      deleteVisible: false,
      editVisible: false, 
      mobileNumber:"+91 "
    };
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

  toggleDeleteVisible = () => {
    this.setState({
      deleteVisible: !this.state.deleteVisible
    });
  };

  toggleEditVisible = () => {
    this.setState({
      editVisible: !this.state.editVisible
    });
  };

  mobileNumberHandler = (e) => {
    this.setState({
      mobileNumber : e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* <Header /> */}
        <MyBagHeader />
        <div style={{ backgroundColor: "#fdf0e7" }}>
          <div className="container" style={{ paddingTop: "1%" }}>
            <div className="row">
              <div className="col-md-7 sp-pr-75 sp-mb-20">
                <div className="suscard Rectangle-9">
                  <div className="head-spp ">
                    <div className="sp-card-title">Shipping Address</div>
                  </div>
                  <h5 className="stylePara">Choose From Saved Addresses</h5>

                  <div className="card outer-layer">
                    <div className="card inner inner-layer">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "home") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.addressOption === 'home'} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <a onClick={() => {
                                this.toggleDeleteVisible()
                              }}><img src={DeleteIcon} alt="welcom.in" className="p-l-20 sp-edit-icon cu-ptr" /></a>
                              <div id="delete-modal" className="modal-window">

                                <DeleteModel visible={this.state.deleteVisible} toggleVisible={this.toggleDeleteVisible} />
                              </div>
                              <a onClick={() => {
                                this.toggleEditVisible()
                              }}><img src={EditIcon} alt="welcom.in" className="p-l-20 sp-edit-icon cu-ptr" /></a>
                              <div id="edit-modal" className="modal-window">

                                <EditModal visible={this.state.editVisible} toggleVisible={this.toggleEditVisible} />
                              </div>
                            </span>
                          </div>

                          <p className="sp-mt-10">
                            <b className="b-head">Shahnawaz Alam </b>&nbsp;
                            <img src={MobileIcon} alt="welcome.in" className="paddingLeftCallIcon" />
                            <b className="b-head"> +91 9773778575</b>
                          </p>
                          <p className="a-r-txt text-light-grey">
                            Flat - 207, Hill View Apartment, Mehta Chowk,
                            Mehrauli, New Delhi, 121003 India
                          </p>
                          <p>Home
                          </p>
                          <div className="">
                            <div className="checkbox-group borderBottomNone">
                              <input type="checkbox" id="html21" checked={true} />
                              <label htmlFor="html21" className="checkbox-label" ><span className="checkbox-label-text jp-ml-0"><span className="bill">Billing Address: <span className="font-grey">  Same as Shipping Address</span></span></span></label>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 coldrdelEdit09"></div>
                      </div>
                    </div>

                    <div className="card inner inner-layer sp-inactive-card">
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "office") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="office" checked={this.state.addressOption === 'office'} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <a onClick={() => {
                                this.toggleDeleteVisible()
                              }}><img src={DeleteIcon} alt="welcom.in" className="p-l-20 sp-edit-icon cu-ptr" /></a>
                              <a onClick={() => {
                                this.toggleEditVisible()
                              }}><img src={EditIcon} alt="welcom.in" className="p-l-20 sp-edit-icon cu-ptr" /></a>
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

                    <div className="card inner inner-layer sp-inactive-card">
                      <div className="row">
                        <div className=""></div>
                        <div className="col-md-12 IconBarMehAlam">
                          <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "other") }}>
                            <input className="radio-custom" name="radio-group" type="radio" value="other" checked={this.state.addressOption === 'other'} />
                            <label className="radio-custom-label sp-m-0"  ></label>
                            <span className="item-right text-right sp-width-100">
                              <a onClick={() => {
                                this.toggleDeleteVisible()
                              }}><img src={DeleteIcon} alt="welcom.in" className="p-l-20 sp-edit-icon cu-ptr" /></a>
                              <a onClick={() => {
                                this.toggleEditVisible()
                              }}><img src={EditIcon} alt="welcom.in" className="p-l-20 sp-edit-icon cu-ptr" /></a>
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
                    <div className="content bg-white sp-add-new-content shipping-pl-20">
                      <div className="jp-mt-10">
                        <label className="sp-form-label">Full Name</label>
                        <input type="email" className="form-control" placeholder="" />
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">Address</label>
                        <input type="text" className="form-control" placeholder=" " />
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">Country</label>
                        <select className="form-control jp-form-control-select-lg" placeholder="" >
                          <option>Please select Country</option>
                          <option>India</option>
                          <option>United States of America</option>
                        </select>
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">Pin Code / Zip Code </label>
                        <input type="text" className="form-control" placeholder="i.e:110001" />
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">State / Province</label>
                        <select className="form-control jp-form-control-select-lg" placeholder="" >
                          <option>Please Select State</option>
                          <option>Andhra Pradesh</option>
                          <option>Karnataka</option>
                          <option>Kerala</option>
                          <option>Tamil Nadu</option>
                          <option>Telangana</option>
                        </select>
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">City</label>
                        <select className="form-control jp-form-control-select-lg" placeholder="" >
                          <option>Please Select City</option>
                          <option>Bangalore</option>
                          <option>Mangalore</option>
                          <option>Mysore</option>
                          <option>Hassan</option>
                        </select>
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">Phone Number</label>
                        <input type="phone" className="form-control" placeholder=" " />
                      </div>
                      <div className="jp-mt-10">
                        <label className="sp-form-label">Address Type</label>
                        <div className="row p-l-5 add-type-row">
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
                      <div className="row p-l-20">
                        <div className="checkbox-group sp-same-check shipping-border-none borderBottomNone">
                          <input type="checkbox" id="html4" />
                          <label htmlFor="html4" className="checkbox-label sp-check-label" >Billing Address will be same</label>
                        </div>
                      </div>


                      <div>
                        {/* <section className="accordion1 sp-m-b-15"> */}
                        {/* <input type="checkbox" name="collapse4" id="handle2" /> */}
                        <div className="mt-4" htmlFor="handle2">
                          {" "}
                          <b className="bBillingTag font-size-18">Add a biling address</b>
                          <img
                            src={dropDown}
                            alt="welcom.in"
                            className="DropdownAction"
                          />
                        </div>
                        <div className='mt-3'>
                          <div>
                            <h4 className="shipping-label">Full Name</h4>
                            <input
                              type="email"
                              className="skform-control563 inputformHeight w-100"
                              id="exampleInputEmail1"
                              placeholder=""
                            />
                          </div>
                          <div>
                            <h4 className="shipping-label">Address</h4>
                            <textarea className="skform-control563sp" />
                          </div>
                          <div>
                            <h4 className="shipping-label">Country</h4>
                            <select className="form-control jp-form-control-select-lg mb-3" placeholder="" >
                              <option></option>
                              <option>India</option>
                              <option>United States of America</option>
                            </select>

                          </div>
                          <div>
                            <h4 className="shipping-label">Pin Code</h4>
                            <input
                              type="email"
                              className="skform-control563 inputformHeight w-100"
                              id="exampleInputEmail1"
                              placeholder=" "
                            />
                          </div>{" "}
                          <div>
                            <h4 className="shipping-label">State</h4>
                            <select className="form-control jp-form-control-select-lg mb-3" placeholder="" >
                              <option></option>
                              <option>Andhra Pradesh</option>
                              <option>Karnataka</option>
                              <option>Kerala</option>
                              <option>Tamil Nadu</option>
                              <option>Telangana</option>
                            </select>
                          </div>
                          <div>
                            <h4 className="shipping-label">City</h4>
                            <select className="form-control jp-form-control-select-lg mb-3" placeholder="" >
                              <option></option>
                              <option>Please Select City</option>
                              <option>Bangalore</option>
                              <option>Mangalore</option>
                              <option>Mysore</option>
                              <option>Hassan</option>
                            </select>
                          </div>
                          <div>
                            <h4 className="shipping-label">Phone Number</h4>
                            <input
                              type="text"
                              className="skform-control563 inputformHeight w-100"
                              id="exampleInputEmail1"
                              value="+91"
                              placeholder=" "
                            />
                          </div>
                          {/* <div className="badgsavechanges">
                            <button className="block0190">Save Changes</button>
                          </div> */}
                        </div>
                        {/* </section> */}
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
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label className="shipping-label">Address</label>
                        <input
                          type="email"
                          className="form-controlsp"
                          id="exampleInputEmail1"
                          placeholder=" "
                        />
                      </div>
                      <div>
                        <label className="shipping-label">country</label>
                        <select
                          className="form-control"
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
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder=" "
                        />
                      </div>{" "}
                      <div>
                        <label className="shipping-label">Satate/Province</label>
                        <select
                          className="form-control"
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
                          className="form-control"
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
                          className="form-control"
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
              <div className="col-md-5 sp-pl-75">
                <div className="card Rectangle-1h sp-items-card jp-border">
                  <h5 className="crdMrrectangle">
                    <span className="font-14 text-42 a-sb-txt sp-item-title">Items</span>
                  </h5>
                  <div className="d-flex">
                    <img
                      src="https://static.jaypore.com/tr:w-42,h-56/media/catalog/product/r/i/ritacb40013457-1_5.jpg"
                      alt="welcom.in"
                      className="sp-item-img"
                    />
                    <img
                      src="https://static.jaypore.com/tr:w-42,h-56/media/catalog/product/r/i/ritacb40013457-1_5.jpg"
                      alt="welcom.in"
                      className="sp-item-img"
                    />
                    <img
                      src="https://static.jaypore.com/tr:w-42,h-56/media/catalog/product/r/i/ritacb40013457-1_5.jpg"
                      alt="welcom.in"
                      className="sp-item-img"
                    />
                    <span className="font-12  p-t-20 a-m-txt text-42 sp-pl-15">
                      Total Number of Items: <b className="sp-bold">3</b>
                    </span>
                    <span className="font-12 p-t-20 a-m-txt text-42 p-l-15 ">
                      Price: <b className="sp-bold">Rs. 9288</b>
                    </span>
                  </div>
                </div>
                <div className="card Rectangle-1 payment-card">
                  <h6 className="crdImgPaymentOpt">
                    <span className="a-sb-txt text-12">Payment Options</span>
                  </h6>
                  <div className="payment-card-body">
                    <h6 className="font-14 m-t-10 a-m-txt text-12 sp-pl-5">
                      SELECT PAYMENT OPTION
                  </h6>
                    <div className="row flex sp-pl-5 sp-mlr-0">

                      <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "payonline") }} >
                        <input className="radio-custom payment-radio" name="payonline" type="radio" onChange={this.paymentChange} value={this.state.paymentValues} checked={this.state.payOption === 'payonline'} />
                        <label className="radio-custom-label payment-radio-label sp-m-0 p-t-10 p-r-5 font-12 jp-width-100">Pay Online</label>
                      </div>
                      <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "cod") }} >
                        <input className="radio-custom payment-radio" name="cod" type="radio" onChange={this.paymentChange} value={this.state.paymentValues} checked={this.state.payOption === 'cod'} />
                        <label className="radio-custom-label payment-radio-label sp-m-0 p-t-10 p-r-5 font-12 jp-width-100">Cash On Delivery</label>
                      </div>

                      <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "paypal") }} >
                        <input className="radio-custom payment-radio" name="paypal" type="radio" onChange={this.paymentChange} value={this.state.paymentValues} checked={this.state.payOption === 'paypal'} />
                        <label className="radio-custom-label payment-radio-label sp-m-0 p-t-10 p-r-5 font-12 jp-width-100"><img src={Paypal} alt="" /></label>
                      </div>

                      {/* <div className="flex-center sp-plr-0" onClick={() => { this.handleOptionChange("payOption", "emi") }} >
                        <input className="radio-custom payment-radio" name="radio-group11" type="radio" value="emi" checked={this.state.payOption === 'emi'} />
                        <label className="radio-custom-label  payment-radio-label sp-m-0 p-t-10 p-r-5 font-12 jp-width-100">EMI</label>
                      </div> */}
                    </div>

                    <div className={this.state.payOption === 'payonline' ? "cashOndeviverySection mt-3 mb-3 regular" : 'd-none'}>
                      <p>Cash on delivery has been disabled because you applied a promotional code valid only on online payment.</p>
                    </div>

                    <div className={this.state.payOption === 'payonline' ? "" : 'd-none'}>
                      <p><a href="#" className="text-blue">CLICK HERE</a> <span className="regular">to remove the code from your cart if you wish to pay by COD.</span></p>
                    </div>

                    <div className={this.state.payOption === "cod" ? "cashOnDeliverySection regular mt-3 mb-3" : "d-none"}>
                      <p>We might claa you to verify your cash on delivery order on the mobile number entered below</p>

                      <input type="text"
                        className="skform-control563 inputformHeight w-75 ml-0"
                        value={this.state.mobileNumber}
                        onChange={this.mobileNumberHandler}
                        placeholder=" "
                      />
                    </div>

                    <div className={this.state.payOption === "paypal" ? 'payPalSection mt-3 mb-3' : 'd-none'}>
                      <div>
                        <img src={Paypal} alt="welcom.in" className="" />
                        <p className="mt-2 regular">
                          You will be directed to a 100% secure gateway to process
                          your payment
                      </p>
                      </div>
                      <div className="d-flex">
                        <img src={amex} alt="welcom.in" className="MargStlKl" />
                        <img
                          src={visacard}
                          alt="welcom.in "
                          className="MargStlKl"
                        />
                        <img src={Mastercard} alt="welcom.in" />
                      </div>
                    </div>

                    <div className={this.state.payOption === 'payonline' ? "card cdSize5 sp-mt-15 secure-background" : 'd-none'}>
                      <div className="d-flex">
                        <img src={Secure1} alt="welcom.in" className="" />
                        <p className="secure-text regular">
                          You will be directed to a 100% secure gateway to process
                          your payment
                      </p>
                      </div>
                      <div className="d-flex p-l-25 ">
                        <img src={amex} alt="welcom.in" className="MargStlKl" />
                        <img
                          src={visacard}
                          alt="welcom.in "
                          className="MargStlKl"
                        />
                        <img src={Mastercard} alt="welcom.in" />
                      </div>
                    </div>
                    <div className="sp-mlr-5 sp-mb-5">
                      <button className="add-cart-details-btn" onClick={NavUtil.goToOrderConfirmation}>
                        <div className="font-18">Pay Rs. 6400</div>

                        <p className="m-b-0 m-t-0">
                          ADD CARD DETAILS ON NEXT STEP
                      </p>
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
