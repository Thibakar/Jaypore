import React from "react";
// import img from '../../assets/01 Icons/01 Login Signup/jaypore.png'
// import img1 from '../../assets/01 Icons/01 Login Signup/Dropdown Arrow.svg';
// import img2 from '../../assets/01 Icons/01 Login Signup/Sale.svg';
// import img3 from '../../assets/01 Icons/01 Login Signup/Search.svg'
// import img4 from '../../assets/01 Icons/01 Login Signup/Bag.svg'
// import img5 from '../../assets/01 Icons/01 Login Signup/hambutton.png';
// import img6 from '../../assets/01 Icons/01 Login Signup/Facebook.svg'
// import img7 from '../../assets/images/earrings.jpg';
// import img8 from '../../assets/01 Icons/01 Login Signup/Facebook.svg'
// import img9 from '../../assets/shipping_payment_icon/Fedex.svg'
// import img12 from '../../assets/01 Icons/01 Login Signup/Instagram.svg'
// import img13 from '../../assets/01 Icons/01 Login Signup/jaypore.png'
// import img17 from '../../assets/01 Icons/01 Login Signup/payu.svg'
// import img18 from '../../assets/01 Icons/01 Login Signup/RazorPay.svg'
// import img20 from '../../assets/01 Icons/01 Login Signup/Twitter.svg'
// import img21 from '../../assets/01 Icons/01 Login Signup/ups.svg'
// import img27 from '../../assets/01 Icons/01 Login Signup/pi.png'
// import img28 from '../../assets/01 Icons/01 Login Signup/aramex.svg'
// import img29 from '../../assets/01 Icons/01 Login Signup/BrainTree.svg';
import Header from "../shared/header/header";
// import Footer from "../shared/footer/footer";
import "../../assets/css/JayporeCredits.css";
class Jayporecredits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: true,
      RecentItemsData: [
        {
          firstheadjaypore: {
            availablecredit: "Available Credit",
            totalcreditreceived: "Total Credit Received",
            price: " Rs. 15000",
            Credits: "My Credits",
            creditsummary: "Credit Summary",
            creditcardcheckouttime:
              "You can apply your credits at the time of checkout."
          },
          jayporecreditbodyheader: {
            Receivedon: " Received on", //header section
            Expiredon: " Expired On", //header section
            Details: "Details", //header section
            Amount: "Amount" //header section
          },
          jayporecreditbodyheaderdata: {
            date13April18: " Apr 13 2018",
            date13April19: "Apr 13 2019",
            date28March17: "March 28 2017",
            date28may2018: "May 28 2018",
            Refundpoints: " Refunds Points",
            GiftVoucher: "Gift Voucher",
            price500: "Rs. 500",
            price617: " Rs. 617",
            date13April18: " Apr 13 2018",
            GiftVoucher: "Gift Voucher"
          },
          jayporecreditbodyheaderdata: {
            date13April18: " Apr 13 2018",
            date13April19: "Apr 13 2019",
            date28March17: "March 28 2017",
            date28may2018: "May 28 2018",
            Refundpoints: " Refunds Points",
            GiftVoucher: "Gift Voucher",
            price500: "Rs. 500",
            price617: " Rs. 617"
          },
          jayporecreditbodyheaderdata: {
            date13April18: " Apr 13 2018",
            date13April19: "Apr 13 2019",
            date28March17: "March 28 2017",
            date28may2018: "May 28 2018",
            Refundpoints: " Refunds Points",
            GiftVoucher: "Gift Voucher",
            price500: "Rs. 500",
            price617: " Rs. 617"
          },

          jayporecreditprenextdata: {
            previous: "PREVIOUS",
            next: "NEXT"
          },

          secondtheadjaypore: {
            creditused: "Credit Used",
            credithere: "Here is your used credit details."
          },

          jayporecreditbodyheadersecond: {
            amount: "Amount",
            usedon: "Used On",
            Orderno: "Order No."
          },

          jayporecreditbodyheaderdatatwo: {
            orderserielA: "200318396",
            orderserialB: "200122943",
            orderserialC: "200122944",
            orderserialD: "200122945",
            orderserialE: "200122946",
            dec202017: "Dec 20 2017",
            jun152016: "Jun 15 2016",
            price500: "Rs. 500",
            price617: " Rs. 617"
          }
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
        </div>
        <div className="jaypore-credit-main">
          {this.state.RecentItemsData.map(i => (
            <div className="desktop-jc-div1">
              <div>
                <div className="vnpcontainer desktop-jc-div2">
                  <label className="nplabel1">
                    {i.firstheadjaypore.Credits}
                  </label>
                </div>
              </div>
              <div>
                <div className="vnpbody desktop-jc-div3">
                  <div className="desktop-middlecontainder-jayporecredit">
                    <div className="desktop-jc-div4">
                      <div id="nprectangle">
                        <div className="vnpcontent">
                          <div className="jaypore-credit-received-expire-details-amount-wrapper">
                            <span className="npcred1 jc-text1">
                              {i.firstheadjaypore.availablecredit}
                            </span>
                            <span className="npcred2 jc-text2">
                              {i.firstheadjaypore.totalcreditreceived}
                            </span>
                          </div>
                          <div className="jaypore-credit-received-expire-details-amount-wrapper">
                            <span className="npcred3">
                              {i.firstheadjaypore.price}
                            </span>
                            <span className="npcred4">
                              {i.firstheadjaypore.price}
                            </span>
                          </div>

                          <div className="jaypore-credit-received-expire-details-amount-wrapper">
                            <div className="nphead1">
                              {i.firstheadjaypore.creditsummary}
                            </div>
                            <div className="nppar1">
                              {i.firstheadjaypore.creditcardcheckouttime}
                            </div>
                          </div>
                          <div className="npll1"></div>

                          <span className="nppar2">
                            {i.jayporecreditbodyheader.Receivedon}
                          </span>
                          <span className="nppar3">
                            {i.jayporecreditbodyheader.Expiredon}
                          </span>
                          <span className="nppar3">
                            {i.jayporecreditbodyheader.Details}
                          </span>
                          <span className="nppar3">
                            {i.jayporecreditbodyheader.Amount}
                          </span>
                          <div className="npll1"></div>

                          <span className="nppar4">
                            {i.jayporecreditbodyheaderdata.date13April18}
                          </span>
                          <span className="nppar4">
                            {i.jayporecreditbodyheaderdata.date13April18}
                          </span>
                          <span className="nppar4">
                            {i.jayporecreditbodyheaderdata.Refundpoints}
                          </span>
                          <span className="nppar4">
                            {i.jayporecreditbodyheaderdata.price500}
                          </span>
                          <div className="npll1"></div>

                          <span className="npcap1">
                            &lt; {i.jayporecreditprenextdata.previous}
                          </span>
                          <span className="nprecb">1</span>
                          <span className="nprecb1">2</span>
                          <span className="nprecb1">3</span>
                          <span className="nprecb1">4</span>
                          <span className="nprecb1">5</span>
                          <span className="npcap2">
                            {i.jayporecreditprenextdata.next} &gt;
                          </span>
                        </div>
                      </div>
                      <div id="nprectangle">
                        <div className="vnpcontent">
                          <span className="nphead2">{i.CreditUsed}</span>

                          <span className="nppar1">{i.CreditDetails}</span>
                          <div className="npll1"></div>
                          <span className="nprw1">{i.Amount}</span>
                          <span className="nprw2">{i.usedon}</span>
                          <span className="nprw3">{i.orderno}</span>
                          <div className="npll1"></div>
                          <span className="nprw4">{i.price617}</span>
                          <span className="nprw5">{i.date20dec2017}</span>
                          <span className="nprw6">{i.orderserielA}</span>
                          <div className="npll1"></div>
                          <span className="nprw4">{i.price500}</span>
                          <span className="nprw5">{i.date15jun2016}</span>
                          <span className="nprw6">{i.orderserialB}</span>
                          <div className="npll1"></div>
                          <span className="nprw4">{i.price500}</span>
                          <span className="nprw5">{i.date15jun2016}</span>
                          <span className="nprw6">{i.orderserialC}</span>

                          <div className="npll1"></div>
                          <span className="jc-text3">{i.price500}</span>
                          <span className="nprw5">{i.date15jun2016}</span>
                          <span className="nprw6">{i.orderserialD}</span>
                          <div className="npll1"></div>
                          <span className="nprw4">{i.price500}</span>
                          <span className="nprw5">{i.date15jun2016}</span>
                          <span className="nprw6">{i.orderserialE}</span>
                          <div className="npll1"></div>
                          <span className="npcap1">&lt; {i.Previous}</span>
                          <span className="nprecb">1</span>
                          <span className="nprecb1">2</span>
                          <span className="nprecb1">3</span>
                          <span className="nprecb1">4</span>
                          <span className="nprecb1">5</span>
                          <span className="npcap2">{i.Next} &gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Jayporecredits;
