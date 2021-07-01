import React, { Component } from "react";
import JayporeLogo from "../../../assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg";
import Lock from "../../../assets/01 Icons/01 Login Signup/Lock.svg";
import CheckedImage from "../../../assets/01 Icons/05 My Bag/tick_my_bag.svg"
import UnCheckedImage from "../../../assets/01 Icons/05 My Bag/untick_myShip.svg"
import './mybag_header.css';
export default class MyBagHeader extends Component {
  render() {
    return (
      <div>
        <div className="mybagHeader bg-white">
          <div className="logoDivColumn">
            <a className="" href="/home_main">
              <img width="152px" height="25px" src={JayporeLogo} alt="icon" />
            </a>
          </div>
          <div className="float-left" style={{ marginLeft: '220px' }}>
            <div className="color-red" style={{ float: 'left' }}>
              <img className="hdr-mybag-checked" src={CheckedImage} alt="checked"></img>
              MY BAG</div>
            <div style={{ width: '100px', float: 'left', marginTop: '-29px', borderBottom: '1px dotted #F5E3D8', marginLeft: '16px', marginRight: '15px' }} >&nbsp;</div>
            <div className="color-grey" style={{ float: 'left' }}>
              <img className="hdr-mybag-checked" src={UnCheckedImage} alt="unchecked"></img>
              SHIPPING & PAYMENT</div>
          </div>
          <div className="float-right">
            <img className="p-r-5 p-b-5" src={Lock} alt="asas" />
            <a className="a-colr-42">100% SECURE</a>
          </div>
        </div>
      </div>
    );
  }
}
