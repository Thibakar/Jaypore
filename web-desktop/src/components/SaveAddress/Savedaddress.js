import React, { Component } from "react";
// import RadioIcon from "../../assets/shipping_payment_icon/Radio - Empty.svg";
// import MobileIcon from "../../assets/shipping_payment_icon/Mobile.svg";
// import DeleteIcon from "../../assets/shipping_payment_icon/Delete.svg";
// import EditIcon from "../../assets/shipping_payment_icon/Edit.svg";
// import CheckboxIcon from "../../assets/shipping_payment_icon/checkbox Selected.svg";
// import dropDown from "../../assets/shipping_payment_icon/Dropdown Arrow.svg";
// import MoneyIconcircle from "../../assets/shipping_payment_icon/moneyIconcircle.png";
// import RadioIconsvg from "../../assets/shipping_payment_icon/Radio - Selected.svg";
// import Paypal from "../../assets/shipping_payment_icon/Paypal.svg";
// import Secure1 from "../../assets/shipping_payment_icon/Secure1.svg";
// import amex from "../../assets/shipping_payment_icon/amex.svg";
// import visacard from "../../assets/shipping_payment_icon/visa card.svg";
// import Mastercard from "../../assets/shipping_payment_icon/Mastercard card.svg";
// import DHL from "../../assets/shipping_payment_icon/DHL.svg";
// import Fedex from "../../assets/shipping_payment_icon/Fedex.svg";
// import tickimghio from "../../assets/shipping_payment_icon/tickimghio.png";
// import visamaster from "../../assets/shipping_payment_icon/visa-master cvv.svg";
// import reCaptcha from "../../assets/shipping_payment_icon/reCaptcha.svg";
// import forwardBlue from "../../assets/shipping_payment_icon/forward-blue-Arrow.png";
// import addIcon from "../../assets/icons/sp-add.svg";
import "../../assets/css/shipping-payment.css";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import MyBagHeader from "../mybag/mybagheader/myBag_header";
// import EditModal from "./edit_modal";
// import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";
// import DeleteModel from "./delete_modal";
import img1 from "../../assets/shipping_payment_icon/Dropdown Arrow.svg";
import radiobutton from "../../assets/01 Icons/01 Login Signup/Radio - Empty.svg";
// import EditModal from '../shippingpayment/edit_modal';

export default class Savedaddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SavedAddressForm: [
        {
          name: "Full Name",
          address: "Address",
          country: "Country",
          pincode: "Pin code/ Zip code",
          state: "State/Province",
          location: "City",
          number: "Phone Number",
          type: "Address Type",
          type1: "Home",
          type2: "Office",
          type3: "Other"
        }
      ]
    };
  }
  savedAddress = () => {
    NavUtil.saveAddressitem();
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
        </div>
        <div>
          {this.state.SavedAddressForm.map(i => (
            <div class="desktop-savedaddress-div1">
              <br />
              <br />
              <b class="desktop-saved">We are waiting for your address</b>
              <br />
              <br />
              <a class="desktop-sa1-text1">
                You have not saved any address earlier.
              </a>
              <div class="desktop-grid-container">
                <div class="desktop-grid-item1">
                  <span class="desktop-sa1-text2">Add a New Address</span>
                </div>
                <div class="desktop-grid-item2">
                  <span class="desktop-sa1-text3">{i.name}</span>
                  <br />
                  <input type="desktop-address-input1" />
                </div>
                <div class="desktop-grid-item3">
                  <span class="desktop-sa1-text3">{i.address}</span>
                  <br />
                  <input type="desktop-address-input2" />
                </div>
                <div class="desktop-grid-item4">
                  <span class="desktop-sa1-text3">{i.country}</span>
                  <br />
                  <img class="desktop-icon-zoom-in1" src={img1} alt="img"></img>
                  <input type="desktop-address-input1" />
                </div>
                <div class="desktop-grid-item5">
                  <span class="desktop-sa1-text3">{i.pincode}</span>
                  <br />
                  <input type="desktop-address-input1" />
                </div>
                <div class="desktop-grid-item6">
                  <span class="desktop-sa1-text3">{i.state}</span>
                  <br />
                  <img class="desktop-icon-zoom-in2" src={img1} alt="img"></img>
                  <input type="desktop-address-input1" />
                </div>
                <div class="desktop-grid-item7">
                  <span class="desktop-sa1-text3">{i.location}</span>
                  <br />
                  <img class="desktop-icon-zoom-in3" src={img1} alt="img"></img>
                  <input type="desktop-address-input1" />
                </div>
                <div class="desktop-grid-item8">
                  <span class="desktop-sa1-text3">{i.number}</span>
                  <br />
                  <input type="desktop-address-input1" placeholder=" +91" />
                </div>
                <div class="desktop-grid-item9">
                  <a class="desktop-sa1-text6">{i.type}</a>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div class="desktop-sa-divb" style={{ float: "left" }}>
                      <img src={radiobutton} alt="img"></img>
                      <span class="desktop-sa1-text4">&nbsp;{i.type1}</span>
                    </div>
                    <div class="desktop-sa-divb">
                      <img src={radiobutton} alt="img"></img>
                      <a class="desktop-sa1-text4">&nbsp;{i.type2}</a>
                    </div>
                    <div class="desktop-sa-divb">
                      <img src={radiobutton} alt="img"></img>
                      <a class="desktop-sa1-text5">&nbsp;{i.type3}</a>
                    </div>
                  </div>
                  <br />
                  <p class="desktop-address-button">
                    <button
                      onClick={() => this.savedAddress()}
                      className="desktop-sa1-text7"
                    >
                      Save This Address{" "}
                    </button>
                  </p>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
