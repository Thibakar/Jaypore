import React, { Component } from "react";
import OrderConfirmationCard from "./orderconfirmationcards/orderConfirmation_card";

import YouMightLikeCard from "./orderconfirmationcards/youMightLike_card";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer"
import '../../assets/css/order-confirmation.css'
import { BaseComponent } from "../common/BaseComponent";

class OrderConfirmation extends BaseComponent {
  render() {
    return (
      <React.Fragment>
        <Header props={this.props} />
        <div className="bg-pink order-confirmation b-r-3">
          <div className="container">
            <div className="row p-t-16">
              <div className=" col-md-4 oc-pr-10">
                <OrderConfirmationCard />
              </div>
              <div className="col-md-8 oc-mb-10 oc-pl-10">
                <div className=" p-l-24 p-r-24 bg-white b-r-3 jp-card-border you-may-like-parent-card">
                  <p className=" text-bold a-m-txt a-24-txt a-colr-42 m-t-16 m-b-16">You might also like</p>
                  <div className="">
                    <YouMightLikeCard />
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

export default OrderConfirmation;
