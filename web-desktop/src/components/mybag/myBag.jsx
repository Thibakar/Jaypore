import React from "react";
import MyBagHeader from "./mybagheader/myBag_header";
import MyBagCard from "./mybagcard/myBag_card";
import LastVeiwedCard from "./mybagcard/LastVeiwed_card";
import OptionsCard from "./mybagcard/options_card";
import Footer from "../shared/footer/footer";
import './mybag_style.css'
import { BaseComponent } from "../common/BaseComponent";

export default class MyBag extends BaseComponent {
  render() {
    return (
      <div className="bg-pink">
        <MyBagHeader />
        <div className="p-t-24">
          <div className="container" >
            <div style={{ clear: "both" }}></div>
            <div className="row" >
              <div className="bag-orders col-8">
                <div style={{ borderRadius: '3px' }}>
                  <div style={{ backgroundColor: 'white', border: '1px solid orange', borderRadius: '5px' }}>
                    <div style={{ padding: '16px' }}>
                      <div className="f-c-orange regular font-18">
                        Soldout items have been removed from your bag
                      </div>
                      <div className="login-text-blue semiBold p-t-16 ">
                        OK, GOT IT
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" card-Mybag" style={{ marginTop: '17px' }}>
                  <label className="a-20-txt semiBold font-18" style={{ lineHeight: '60px', paddingLeft: '24px', paddingBottom: '20px' }}>
                    My Bag <span className="f-s-14">(4 items)</span>
                  </label>
                </div>
                <MyBagCard />
              </div>
              <div className="order-summary col-4">
                <OptionsCard props={this.props} />
              </div>
              <button
                className="wishlist-btn font-13 a-sb-txt m-t-30 m-b-30"
                type="button"
              >
                ADD MORE FROM WISHLIST
                  </button>
            </div>
          </div>
          <div className="bg-white" style={{ paddingTop: '56px' }}>
            <div className="p-b-40" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
              <div className="m-t-10 m-b-16">
                <span className="a-sb-txt a-24-txt">Last Viewed Items</span>
              </div>
              <LastVeiwedCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
