import React, { Component } from "react";
import callicon from "../../../assets/01 Icons/07 Order Confirmation/Call.svg";
import msgicon from "../../../assets/01 Icons/07 Order Confirmation/Email.svg";
import uparrow from "../../../assets/images/rightarrow.png";

// import "../orderConfirmation.css";
import tick from "../../../assets/01 Icons/07 Order Confirmation/Order Confirmation.svg";
import ItemPurchasedCard from "./itemPurchased_card";
class OrderConfirmationCard extends Component {

  constructor(props){
    super(props)
    this.state={
      isShow:false,
    }
  }

  toggleShow=()=>{
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    return (
      <div>
        <div className="order-confirmation bg-white b-r-3 text-center jp-card-border">
          <div className="text-center ">
            <img className="m-t-16" src={tick} alt="order-confi" />
            <div className="a-m-txt a-24-txt m-t-16 m-b-16"> Thank you for your order</div>
            <div className="bg-pink order-container">
              <div className="a-16-txt a-sb-txt a-colr-21">Order ID :12345</div>
              <div className="a-mt-8 a-m-txt a-14-txt a-colr-21">Payment Reference :<span className="a-sb-txt">12345</span></div>
              <div className="a-mt-8 a-m-txt a-14-txt a-colr-21">Amount Paid :<span className="a-sb-txt">Rs. 9288</span></div>
            </div>
            <div className="p-t-24 a-sb-txt a-14-txt a-colr-21">Paid Online</div>
            <div className="p-t-16 a-r-txt a-14-txt a-colr-75">
              Your order will be shipped to:
            </div>
            <div className="m-l-r-25 p-t-8 a-r-txt a-14-txt a-colr-21">
              Flat - 207, Hill View Appartment, Mehta Chowk, Mehrauli, New
              Delhi, 121003 India
            </div>
          </div>
          <div className={this.state.isShow?" item-purchased-container jp-ta-left p-t-16":'d-none'}>
            <ItemPurchasedCard />
          </div>
          <div className="p-t-21 p-b-21 cu-ptr" onClick={()=>this.toggleShow()}>
            <div className="login-text-blue a-12-txt a-sb-txt" href="" >{this.state.isShow?"SHOW LESS":"SHOW MORE"} 
            <span>
            <img className={this.state.isShow?" show-less-arrow d-in-blk":'a-rot--90 a-ml-8 d-in-blk'} src={uparrow} alt="uparrow" />
            </span>
            </div>
          </div>
        </div>


        <div className="text-center p-t-16 p-b-24 a-16-txt">
          <div className="oc-mb-5 oc-contact-color a-colr-61"> We've sent the invoice of this order to </div>
          <div className="oc-email-color a-sb-txt a-colr-42">shahnawaz@jaypore.com</div>
        </div>

        <div className="bg-white " style={{ borderRadius: '5px' }}>
          <div className=" text-center p-t-32 p-b-32 a-colr-42 a-m-txt a-14-txt" >
            <div className="a-24-txt m-b-8">Incase you need any help</div>
            <div className="a-r-txt a-14-txt a-colr-75">
              Our customer experience experts would love you hear and resolve
              your query in no time
            </div>
            <div className="m-t-16">
              {" "}
              <img src={callicon} alt="call-btn" />
            </div>
            <div className="m-t-8">Connect via Call</div>
            <div className="a-24-txt m-t-12">+91 730 529 7673</div>
            <div className="m-t-24">
              <img src={msgicon} alt="call-btn" />
            </div>
            <div className="m-t-8">Connect via Email</div>
            <div className="a-24-txt m-t-12">hello@jaypore.com</div>
          </div>
        </div>

        {/* <div class="card" id="cardsizeD es">
					<div class="card-body" id="shiftalighment">
                        
					<img src="/home/trisys/shoppingwebsite/images/Order Confirmation.svg" style="width:14%" class="jkl"/>
               		 <h3><b class="designing01">Thank you for your order</b></h3>
               		 <div class="card" id="cardDesr" style="background-color: #fefaf7;">
                    <h5><strong>Order ID : 12345 </strong></h5>
                    <h5 style="font-size: 15px;font-weight: bold;"> Payment Reference : 12345</h5>
                    <p style="font-size: 15px;">Amount Paid: <b>Rs. 9288</b></p>

                </div>

                <p></p>
                <h4><b class="fontsixc">Paid Online</b></h4>
                <p class="colormargin"> Your order will be shipped to :</p>
                <p class="color001"> Flat -207, Hill view Apartment, Mehta Chowk, Mehrauli, New Delhi, 121003 India</p>
</div>
</div> */}
      </div>
    );
  }
}

export default OrderConfirmationCard;
