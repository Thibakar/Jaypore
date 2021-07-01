import React from "react";
// import img from "../../assets/01 Icons/01 Login Signup/jaypore.png";
// import img1 from "../../assets/01 Icons/01 Login Signup/Dropdown Arrow.svg";
// import img2 from "../../assets/01 Icons/01 Login Signup/Sale.svg";
// import img3 from "../../assets/01 Icons/01 Login Signup/Search.svg";
// import img4 from "../../assets/01 Icons/01 Login Signup/bag.png";
// import img5 from "../../assets/01 Icons/01 Login Signup/hambutton.png";
import share from "../../assets/01 Icons/01 Login Signup/Share_Orange.svg";
import twitter from "../../assets/01 Icons/04 PDP/Twitter.svg";
import email from "../../assets/01 Icons/04 PDP/Email.svg";
import copy from "../../assets/01 Icons/04 PDP/Copy.svg";
import send from "../../assets/01 Icons/04 PDP/Send.svg";
import facebook from "../../assets/01 Icons/04 PDP/Facebook.svg";
// import img7 from "../../assets/01 Icons/01 Login Signup/earrings.jpg";
// import img8 from "../../assets/01 Icons/01 Login Signup/Facebook.svg";
// import img9 from "../../assets/shipping_payment_icon/Fedex.svg";
// import img12 from "../../assets/01 Icons/01 Login Signup/Twitter.svg";
// import img13 from "../../assets/01 Icons/01 Login Signup/jaypore.png";
// import img17 from "../../assets/01 Icons/01 Login Signup/payu.svg";
// import img18 from "../../assets/01 Icons/01 Login Signup/Razorpay.svg";
// import img20 from "../../assets/01 Icons/01 Login Signup/Twitter.svg";
// import img21 from "../../assets/01 Icons/01 Login Signup/payu.svg";
// import img27 from "../../assets/01 Icons/01 Login Signup/pi.png";
// import img28 from "../../assets/01 Icons/01 Login Signup/Aramex.svg";
// import img29 from "../../assets/01 Icons/01 Login Signup/BrainTree.svg";
import Header from "../../components/shared/header/header";
// import Footer from "../shared/footer/footer";
import "../../assets/css/referearn.css";
class Referearn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReferEarnText: [
        {
          heading: "Invite Your Friends",
          text1: "with invite code",
          buttontext: "SHAHNAWAZ01",
          text2:
            "Invite your friends. They get Rs. 500 off. You get a Rs. 750 promo code on theit first purchase",
          text3: "",
          text4: "Refer your friends using:",
          email: "Email",
          share: "Share",
          tweet: "Tweet",
          send: "Send",
          link: "Copy Link",
          heading1: "How it Works?",
          text5: "Invite your friends by sharing your referral code.",
          text6:
            "When your friend signs up,we will give them Rs.500 off their first order on Jaypore.",
          text7:
            "Once your friend shops on Jaypore,you get Rs.750 off every sucessful referal.And you can get earn up to Rs.7,5000.",
          heading2: "Terms & Conditions",
          text8:
            "You can refer as many people.For each sucessful referral we will give you a Rs. 750 off code.Codes cannot be clubbed and can be on seperate orders.",
          text9: "You can avail up to 100 such codes.",
          text10:
            "Your friend can use your code to get Rs.500 off on their first purchase.This can be used only on orders of Rs.1500 and above.",
          text11:
            "You will receive Rs.750 code 10 days after the product purchased by your friend is delivered.This can be used only on orders of Rs.3,000 and above.",
          text12:
            "This code is only applicable if your friend is a new Jaypore customer.",
          dot: ".",
          tooltiptext: "Click to copy referral code"
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
        <div className="referandearn-main-container">
          {this.state.ReferEarnText.map(i => (
            <React.Fragment>
              <div class="desktop-referearn-div">
                <div class="desktop-re-text1">{i.heading}</div>
                <div class="desktop-re-text2">{i.text1}</div>
                <div className="referandearnbutton-stl">
                  <button class="invitecode_button tooltip">
                    <p class="desktop-re-text3">{i.buttontext}</p>
                    <span class="tooltiptext">{i.tooltiptext}</span>
                    <img class="desktop-re-image1" src={share} alt="img"></img>
                  </button>
                </div>
                <div className="promocode-text">
                  <p class="desktop-re-text4">{i.text2}</p>
                </div>
              </div>

              <div class="nej-container">
                <div class="nej-centered-div">
                  <div class="desktop-re-text6">{i.text4}</div>
                  <div className="referandearn-social-icon">
                    <img class="desktop-re-image2" src={email} alt="img"></img>
                    <img
                      class="desktop-re-image3"
                      src={facebook}
                      alt="img"
                    ></img>
                    <img
                      class="desktop-re-image3"
                      src={twitter}
                      alt="img"
                    ></img>
                    <img class="desktop-re-image3" src={send} alt="img"></img>
                    <img class="desktop-re-image3" src={copy} alt="img"></img>
                  </div>
                  <div className="referandearn-social-icon">
                    <div class="desktop-text-referearn">{i.email}</div>
                    <div class="desktop-text-referearn">{i.share}</div>
                    <div class="desktop-text-referearn">{i.tweet}</div>
                    <div class="desktop-text-referearn">{i.send}</div>
                    <div class="desktop-text-referearn">{i.link}</div>
                  </div>
                </div>
              </div>
              <div class="desktop-referearn-div2">
                <div class="desktop-re-text7">{i.heading1}</div>
                <li class="desktop-referearn-text9">{i.text5}</li>
                <li class="desktop-referearn-text9">{i.text6}</li>
                <li class="desktop-referearn-text9">{i.text7}</li>
                <div class="desktop-re-text7">{i.heading2}</div>
                <li class="desktop-referearn-text9">{i.text8}</li>
                <li class="desktop-referearn-text9">{i.text9}</li>
                <li class="desktop-referearn-text9">{i.text10}</li>
                <li class="desktop-referearn-text9">{i.text11}</li>
                <li class="desktop-referearn-text9">{i.text12}</li>

                <div class="desktop-re-div"></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Referearn;
