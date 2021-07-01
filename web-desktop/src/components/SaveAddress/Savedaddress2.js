import React from 'react';
// import img from '../../assets/01 Icons/05 My Bag/jaypore.png';
// import img1 from '../../assets/shipping_payment_icon/Dropdown Arrow.svg';
// import img2 from '../../assets/01 Icons/01 Login Signup/Sale.svg';
// import img3 from '../../assets/01 Icons/01 Login Signup/Search.svg';
// import img4 from '../../assets/01 Icons/01 Login Signup/Bag.svg'
// import img5 from '../../assets/01 Icons/01 Login Signup/hambutton.png'
// import facebook from '../../assets/01 Icons/01 Login Signup/Facebook.svg';
// import img7 from '../../assets/images/earrings.jpg'
// import img8 from '../../assets/01 Icons/01 Login Signup/Facebook.svg'
// import img9 from '../../assets/shipping_payment_icon/Fedex.svg'
// import img12 from '../../assets/01 Icons/01 Login Signup/Instagram.svg'
// import img13 from '../../assets/01 Icons/01 Login Signup/jaypore.png'
// import img17 from '../../assets/01 Icons/01 Login Signup/payu.svg'
// import img18 from '../../assets/01 Icons/01 Login Signup/RazorPay.svg'
// import img20 from '../../assets/01 Icons/01 Login Signup/Twitter.svg'
// import img21 from '../../assets/01 Icons/01 Login Signup/ups.svg'
// import img27 from '../../assets/01 Icons/01 Login Signup/pi.png'
// import img28 from "../../assets/01 Icons/01 Login Signup/aramex.svg"
// import img29 from '../../assets/01 Icons/01 Login Signup/BrainTree.svg';
// import radiobutton from '../../assets/01 Icons/01 Login Signup/Radio - Empty.svg';
import "../../assets/css/SavedAddress.css";
// import Header from '../shared/header/header'
// import Footer from '../shared/footer/footer'
import DeleteIcon from "../../assets/01 Icons/06 Shipping _ Payment/Delete.svg";
import { NavUtil} from '../../components/common/navutil';
import { BaseComponent } from "../common/BaseComponent";
import DeleteModel from "../shippingpayment/delete_modal";
// import Mastercard from "../../assets/01 Icons/06 Shipping & Payment/Mastercard card.svg";
import EditIcon from "../../assets/01 Icons/06 Shipping _ Payment/Edit.svg";
// import visacard from "../../assets/shipping_payment_icon/visa card.svg";
// import DHL from "../../assets/shipping_payment_icon/DHL.svg";
// import Fedex from "../../assets/shipping_payment_icon/Fedex.svg";
// import tickimghio from "../../assets/shipping_payment_icon/tickimghio.png";
// import visamaster from "../../assets/shipping_payment_icon/visa-master cvv.svg";
// import reCaptcha from "../../assets/shipping_payment_icon/reCaptcha.svg";
// import forwardBlue from "../../assets/shipping_payment_icon/forward-blue-Arrow.png";
// import MobileIcon from "../../assets/shipping_payment_icon/Mobile.svg";
import addIcon from "../../assets/icons/sp-add.svg";
import dropDown from "../../assets/shipping_payment_icon/Dropdown Arrow.svg";
// import Paypal from "../../assets/shipping_payment_icon/Paypal.svg";
// import amex from "../../assets/shipping_payment_icon/amex.svg";
// import Secure1 from "../../assets/shipping_payment_icon/Secure1.svg";
// import EditModal from '../shippingpayment/edit_modal';
import EditModal from "../../components/shippingpayment/edit_modal";

class Savedaddress2 extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: 'home',
          payOption: 'payonline',
          addressOption: 'home',
          deleteVisible: false,
          editVisible: false,
          mobileNumber: "+91 ",
          form: { message: "" },
          firstAdd: '',
          enablePinCodeButton: false,
          pincode: { pin: "" },
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
          mobileNumber: e.target.value
        })
      }
    
      handleChangeInput = event => {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);
    
        this.setState({
          form: {
            message
          }
        });
      };
    
      onValueChange = (e) => {
        const { value, maxLength } = event.target;
        const pin = value.slice(0, maxLength);
        console.log("this", e.target.value)
        this.setState({
          //   inputvalue: e.target.value,
          pincode: {
            pin
          },
          //   colorWhite: '#fff'
        })
        let typesValue = e.target.value;
        if (typesValue.length > 5) {
          this.setState({
            enablePinCodeButton: true
          })
        } else {
          this.setState({
            enablePinCodeButton: false
          })
        }
      }
    render() {
        return (
            <React.Fragment>
      
            <div style={{ backgroundColor: "#fdf0e7" }}>
              <div className="container" style={{ paddingTop: "1%" }}>
                <div className="rowrow">
                  <div className="col-md-7 sp-pr-75 sp-mb-20">
                    <div className="suscard Rectangle-9">
                      <div className="head-spp ">
                        <div className="sp-card-title">Saved Addresses</div>
                      </div>
                      <div className="card outer-layer">
                        <div className={this.state.addressOption === "home" ? "card inner inner-layer current-add hvr-crd" : "card inner inner-layer hvr-crd"}>
                          <div className="rowrow">
                            <div className="col-1"></div>
                            <div className="col-md-12 IconBarMehAlam">
                              <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "home") }}>
                                <input className="radio-custom" name="radio-group" type="radio" value="home" checked={this.state.addressOption === 'home'} />
                                {/* <label className="radio-custom-label sp-m-0"  ></label> */}
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
                                {/* <img src={MobileIcon} alt="welcome.in" className="paddingLeftCallIcon" /> */}
                                {/* <b className="b-head"> +91 9773778575</b> */}
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
                                  {/* <label htmlFor="html21" className="checkbox-label" ><span className="checkbox-label-text jp-ml-0"><span className="bill">Billing Address: <span className="font-grey">  Same as Shipping Address</span></span></span></label> */}
                                </div>
                              </div>
                            </div>
                            <div className="col-1 coldrdelEdit09"></div>
                          </div>
                        </div>
    
                        <div className={this.state.addressOption === "office" ? "card inner current-add hvr-crd" : "card inner inner-layer hvr-crd"}>
                          <div className="rowrow">
                            <div className="col-1"></div>
                            <div className="col-md-12 IconBarMehAlam">
                              <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "office") }}>
                                <input className="radio-custom" name="radio-group" type="radio" value="office" checked={this.state.addressOption === 'office'} />
                                {/* <label className="radio-custom-label sp-m-0"  ></label> */}
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
                                {/* <img
                                  src={MobileIcon}
                                  alt="welcome.in"
                                  className="paddingLeftCallIcon"
                                /> */}
                                {/* <span className="b-head"> +91 9773778575</span> */}
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
    
                        <div className={this.state.addressOption === "other" ? "card inner  current-add hvr-crd" : "card inner inner-layer hvr-crd"}>
                          <div className="rowrow">
                            <div className=""></div>
                            <div className="col-md-12 IconBarMehAlam">
                              <div className="flex-center" onClick={() => { this.handleOptionChange("addressOption", "other") }}>
                                <input className="radio-custom" name="radio-group" type="radio" value="other" checked={this.state.addressOption === 'other'} />
                                {/* <label className="radio-custom-label sp-m-0"  ></label> */}
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
                                <b className="b-head">Shahnawaz Alam </b> &nbsp;
                                {/* <img
                                  src={MobileIcon}
                                  alt="welcome.in"
                                  className="paddingLeftCallIcon"
                                /> */}
                                {/* <b className="b-head"> +91 9773778575</b> */}
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
                          <div className='a-mt-16'>
                            <input type='number' className='pincode-input a-sb-txt focusEffect w-75' value={this.state.pincode.pin} onChange={(data) => this.onValueChange(data)} maxLength="6" placeholder='Enter PIN Code' />
                            <button className={`pincode-btn a-16-txt ${(this.state.enablePinCodeButton) ? "highlight-button" : ""}`}>
                              Check  Now
                                        </button>
                          </div>
                          <div className="jp-mt-10">
                            <label className="sp-form-label">Full Name</label>
                            <input type="email" className="form-control" placeholder="" disabled={!this.state.enablePinCodeButton} />
                          </div>
                          <div className="jp-mt-10">
                            <label className="sp-form-label">Address</label>
                            <input type="text" className="form-control" placeholder=" " disabled={!this.state.enablePinCodeButton} />
                          </div>
                          <div className="jp-mt-10">
                            <label className="sp-form-label">Country</label>
                            <select className="form-control jp-form-control-select-lg" placeholder="" disabled={!this.state.enablePinCodeButton} >
                              <option>Please select Country</option>
                              <option>India</option>
                              <option>United States of America</option>
                            </select>
                          </div>
                          {/* <div className="jp-mt-10">
                            <label className="sp-form-label">Pin Code / Zip Code </label>
                            <input type="text" className="form-control" placeholder="i.e:110001" disabled={!this.state.enablePinCodeButton} />
                          </div> */}
                          <div className="jp-mt-10">
                            <label className="sp-form-label">State / Province</label>
                            <select className="form-control jp-form-control-select-lg" placeholder="" disabled={!this.state.enablePinCodeButton} >
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
                            <select className="form-control jp-form-control-select-lg" placeholder="" disabled={!this.state.enablePinCodeButton} >
                              <option>Please Select City</option>
                              <option>Bangalore</option>
                              <option>Mangalore</option>
                              <option>Mysore</option>
                              <option>Hassan</option>
                            </select>
                          </div>
                          <div className="jp-mt-10">
                            <label className="sp-form-label">Phone Number</label>
                            <input type="phone" className="form-control" placeholder=" " disabled={!this.state.enablePinCodeButton} />
                          </div>
                          <div className="jp-mt-10">
                            <label className="sp-form-label">Address Type</label>
                            <div className="rowrow p-l-5 add-type-row">
                              <div className="col-4 flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "home") }} >
                                <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="home" checked={this.state.selectedOption === 'home'}
                                />
                                <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Home</label>
                              </div>
                              <div className="col-4 flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "office") }}>
                                <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="office" checked={this.state.selectedOption === 'office'}
                                />
                                <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Office</label>
                              </div>
                              <div className="col-4 flex-center sp-plr-0" onClick={() => { this.handleOptionChange("selectedOption", "other") }}>
                                <input className="radio-custom payment-radio" name="radio-group3" type="radio" value="other" checked={this.state.selectedOption === 'other'} />
                                <label className="radio-custom-label payment-radio-label add-radio-label sp-m-0 p-t-10 p-r-5 font-12 ">Other</label>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="rowrow p-l-20">
                            <div className="checkbox-group sp-same-check shipping-border-none borderBottomNone">
                              <input type="checkbox" id="html4" />
                              <label htmlFor="html4" className="checkbox-label sp-check-label" >Billing Address will be same</label>
                            </div>
                          </div>
    
    
                          <div>
                            {/* <section className="accordion1 sp-m-b-15"> */}
                            {/* <input type="checkbox" name="collapse4" id="handle2" /> */}
                            <div className="mt-4 mb-3" htmlFor="handle2">
                              {" "}
                              <b className="bBillingTag font-size-18">Add a Billing Address</b>
                              <img
                                src={dropDown}
                                alt="welcom.in"
                                className="DropdownAction"
                              />
                            </div>
                            <div>
                                <h4 className="shipping-label">Pin Code / Zip Code </h4>
                                <input
                                  type="email"
                                  className="skform-control563 inputformHeight w-100"
                                  id="exampleInputEmail1"
                                  placeholder=" "
                                />
                              </div>
                            <div className='mt-3'>
                              {/* <div className="mb-3">
                                <label className="sp-form-label">Pin Code</label>
                                <input type='number' className='skform-control563 inputformHeight'
                                  value={this.state.pincode.pin} onChange={(data) => this.onValueChange(data)} maxLength="6" />
                              </div> */}
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
                </div>
              </div>
            </div>
        
          </React.Fragment>
           
        )
    }
}

export default Savedaddress2