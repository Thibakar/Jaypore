import React, { Component } from "react";
import RightArrow from "../../../assets/01 Icons/05 My Bag/right_arrow_red.svg";
import ApplyCoupon from "../../../assets/01 Icons/05 My Bag/Apply Coupon.svg";
import ApplyCredits from "../../../assets/01 Icons/05 My Bag/Apply Credits.svg";
import Egift from "../../../assets/01 Icons/05 My Bag/Redeem E-Gift Card.svg";
import ApplyCouponModal from "../mybagmodals/applyCoupon_modal";
// import "../../../assets/css/Modal.css";
import RedeemGiftModal from "../mybagmodals/redeemGift_modal";
import ApplyCredit from "../mybagmodals/applyCredit";
import { NavUtil } from "../../common/navutil";

export default class OptionsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goShipping = () => {
    NavUtil.goToShippingPayment()
  };
  render() {
    return (
      <React.Fragment>
        <div >
          <div className="card-Options bg-color-fffaf7">
            <div className="m-txt a-14-txt medium p-b-12">Options</div>
            <a href="#open-modal1">
              <div className="input-flex-Options" style={{ padding: '0px 16px', height: '56px' }}>
                <div className='' style={{ margin: 'auto 0' }}>
                  <img
                    src={ApplyCoupon}
                    height="32px"
                    width="32px"
                    alt=""
                  />
                </div>
                <div style={{ color: 'black', margin: 'auto auto auto 12px' }} className="regular ">Apply Coupon</div>
                <div className='' style={{ margin: 'auto 0' }}>
                  <img
                    src={RightArrow}
                    width='8px'
                    height='12px'
                    alt="right-arrow"
                  />
                </div>
              </div>
            </a>
            {/*******************************modal************************************ */}
            <div id="open-modal1" className="modal-window-option">
              <ApplyCouponModal />
            </div>
            <a href="#open-modal2">
              <div className="input-flex-Options" style={{ padding: '0px 16px', height: '56px' }}>
                <div className='' style={{ margin: 'auto 0' }}>
                  <img
                    src={Egift}
                    height="32px"
                    width="32px"
                    alt=""
                  />
                </div>
                <div style={{ color: 'black', margin: 'auto auto auto 12px' }} className="regular ">Redeem E-gift Card</div>
                <div className='' style={{ margin: 'auto 0' }}>
                  <img
                    src={RightArrow}
                    width='8px'
                    height='12px'
                    alt="right-arrow"
                  />
                </div>
              </div>
            </a>
            {/* ******************************Modal**************************************** */}

            <div id="open-modal2" class="modal-window-option">
              <RedeemGiftModal />
            </div>
            <a href="#open-modal3">
              <div className="input-flex-Options" style={{ padding: '0px 16px', height: '56px' }}>
                <div className='' style={{ margin: 'auto 0' }}>
                  <img
                    src={ApplyCredits}
                    height="32px"
                    width="32px"
                    alt=""
                  />
                </div>
                <div style={{ color: 'black', margin: 'auto auto auto 12px' }} className="regular ">Apply Credits</div>
                <div className='' style={{ margin: 'auto 0' }}>
                  <img
                    src={RightArrow}
                    width='8px'
                    height='12px'
                    alt="right-arrow"
                  />
                </div>
              </div>
            </a>
            {/* ******************************Modal**************************************** */}
            <div id="open-modal3" class="modal-window-option">
              <ApplyCredit />
            </div>
          </div>
        </div>

        <div className="p-t-20">

          <div className='payment-summary-head'>
            <div className="a-18-txt semiBold" style={{ padding: '20px 24px' }}>
              Payment Summary
              </div>
          </div>
          <div className=" card-Options ">
            <div className="row" style={{ borderBottom: '1px dotted #fff0e7', paddingBottom: '16px' }}>
              <div className="text-grey regular col-6"> Sub - Total</div>
              <div className="sb-txt col-6" style={{ textAlign: 'right' }}>Rs. 9299</div>
            </div>

            <div className="row" style={{ borderBottom: '1px dotted #fff0e7', paddingBottom: '16px', paddingTop: '14px' }}>
              <div className="text-grey regular col-7"> Coupon Discount</div>
              <div className="sb-txt col-5" style={{ textAlign: 'right' }}>
                <button className="button-remove a-11-txt medium login-text-blue as_mrgn_chng" style={{ float: 'unset', width: 'unset', padding: '0px 5px' }}>EDIT</button>
                <span className="text-green as_btn_spn_1 font-12 a-sb-txt">
                  -Rs. 700
                    </span>
              </div>
            </div>

            <div className="row" style={{ borderBottom: '1px dotted #fff0e7', paddingBottom: '16px', paddingTop: '14px' }}>
              <div className="text-grey regular col-6"> Credits Applied</div>
              <div className="sb-txt col-6" style={{ textAlign: 'right' }}>
                <button className="button-remove a-11-txt medium login-text-blue as_mrgn_chng" style={{ float: 'unset', width: 'unset', padding: '0px 5px' }}>EDIT  </button>
                <span className="text-green as_btn_spn_1 font-12 a-sb-txt">
                  -Rs. 1000
                    </span></div>
            </div>

            <div className="row" style={{ borderBottom: '1px dotted #fff0e7', paddingBottom: '16px', paddingTop: '14px' }}>
              <div className="text-grey regular col-7"> Shipping Charges</div>
              <div className="sb-txt col-5" style={{ textAlign: 'right' }}>
                <span
                  className="text-green font-12 a-sb-txt">
                  FREE
                  </span>
              </div>
            </div>

            <div className="row" style={{ borderBottom: '1px dotted #fff0e7', paddingBottom: '16px', paddingTop: '14px' }}>
              <div className="text-grey regular col-6"> Gift Wrap</div>
              <div className="sb-txt col-6" style={{ textAlign: 'right' }}>
                <span className="a-sb-txt" style={{ color: '#EB3840' }}>
                  +Rs. 50
                  </span>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: '21px', paddingTop: '14px' }}>
              <div className="text-grey regular col-6"> Payable Amount</div>
              <div className="sb-txt col-6" style={{ textAlign: 'right' }}>Rs. 8338</div>
            </div>

            <div>
              <button
                className="place-order-btn"
                type="button"
                onClick={() => this.goShipping()}>
                Place Order
                </button>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
