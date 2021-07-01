import React from "react";

import Header from '../shared/header/header'
import Footer from '../shared/footer/footer';
import TermsAndConditions from "../My_Coupons/termsAndConditions";
import "../../assets/css/mycopouns.css";

export default class Mycoupons extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      color:true,
      RecentItemsData: [
        {
          couponcode: "Coupon Code",
          Code: "U23I1LQ",
          ExpireDate: "Expires on: 12 Jan 2019",
          codevalue: "Coupon Value",
          price: "Rs. 250",
          Redemption: "Redemption Status",
          Status: "Active"
        },
        {
          couponcode: "Coupon Code",
          Code: "2QUZAS",
          codevalue: "Coupon Value",
          price: "Rs. 300",
          Redemption: "Redemption Status",
          Status: "Expired"
        },
        {
          couponcode: "Coupon Code",
          Code: "UAMN8",
          codevalue: "Coupon Value",
          price: "Rs. 225",
          Redemption: "Redemption Status",
          Status: "Expired"
        },
        {
          couponcode: "Coupon Code",
          Code: "JW8P4SD7",
          codevalue: "Coupon Value",
          price: "Rs. 250",
          Redemption: "Redemption Status",
          Status: "Expired"
        }

      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div class="grid">
          <div className="main-wrapper-mycoupon">
          <div className="desktop-mycoupon-main-container">
          <h1 class="desktop-coupons-text1">My Coupons</h1>
          </div>
            <hr className="desktop-mycoupoun-line-btm"/>
            <div class="desktop-mycoupon-main-wrapper">

              <div className="desktop-mycoupon-main-wrapper-contai">
                {this.state.RecentItemsData.map(i => (
                  <div className="container-for-inner-item-mycoupon">
                    <div class="column1">
                    
                      <span href="/" className="desktop-coupons-text2">
                        {i.couponcode}
                      </span>
                      <h2 class="desktop-coupons-text3">{i.Code}</h2>
                  
                      <span href="/" class="desktop-coupons-expiredate">
                        {i.ExpireDate}
                      </span>
                    </div>
                    <div className="column2">
                      <span class="desktop-coupons-codevalue">
                        {i.codevalue}
                      </span>
                   
                      <h1 className="desktop-coupouns-price">&nbsp;{i.price}</h1>
                    </div>
                    <div class="column3">
                      <span class="desktop-coupons-redemption">
                        {i.Redemption}
                      </span>
                <p className={i.Status==="Active"?'desktop-coupons-text4':"desktop-copouns-statusred"}>{i.Status}</p>     
              
                    </div>
                    <TermsAndConditions />
                
                  </div>
                  
                ))}
              </div>
              </div>
              </div>

        </div>
        <Footer/>
      </div>
    )
  }
}









