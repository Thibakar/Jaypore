import React, { Component } from "react";
//import ApplyCoupon from "../../../assets/01 Icons/05 My Bag/Apply Coupon.svg";
import ReactDOM from 'react-dom'
import Egift from "../../../assets/01 Icons/05 My Bag/redeem_icon.svg";
import Close from "../../../assets/01 Icons/05 My Bag/Close.svg";
export default class RedeemGiftModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputvalue: ""
    }
  }

  onValueChange = (e) => {
    console.log("this" ,e.target.value)
    this.setState({
      inputvalue: e.target.value
    })
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.redeemgift);
    if (e.target.value === "") {
      continue_button_dom.style.backgroundColor = "#babcbf";
    } else {
      continue_button_dom.style.backgroundColor = "#BB4225";
    }
  }
  
  render() {
    return (
      <div>
        <div className="m-t-310"></div>
        <div className="apply-credits-outer-div">
          <div className="apply-cre-hdr">
            <div className="" >
              <img src={Egift} alt="apply" />
              <span className="text-green p-l-20 txt-app-cre a-m-txt font-16">Redeem E-gift Card</span>
            </div>
            <div className="">
              <a href="#modal-close" title="Close" class="modal-close">
                <img className="" src={Close} height="16" width="16" alt="" />
              </a>
            </div>
          </div>
          <div style={{ padding: '24px' }}>
            <div className="p-b-16">
              <div style={{ margin: 'auto' }}>
                <div className="f-c-black-apply m-b-8 a-m-txt font-16 a-colr-61">Enter E-gift card code</div>
                <input type='text' className='mybag-modal-input a-sb-txt a-14-txt pl-2 caretColor-bb' onChange={(data) => this.onValueChange(data)} style={{
                  width: '70%', marginRight: 0, borderRight: 0, borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }} />
                <button className='pincode-btn  a-sb-txt a-14-txt' ref="redeemgift" style={{ width: '30%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                  Redeem
                                                     </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
