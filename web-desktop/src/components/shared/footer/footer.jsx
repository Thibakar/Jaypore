import React, { Component } from "react";
import japorelogo from "../../../assets/01 Icons/08 Header & Footer/jaypore_logo_retina.svg";
import facebook from "../../../assets/01 Icons/08 Header & Footer/Facebook.svg";
import instagram from "../../../assets/01 Icons/08 Header & Footer/Instagram.svg";
import pinterest from "../../../assets/01 Icons/08 Header & Footer/Pinterest.svg";
import twitter from "../../../assets/01 Icons/08 Header & Footer/Twitter.svg";
import aramax from "../../../assets/01 Icons/08 Header & Footer/Aramex.svg";
import fedex from "../../../assets/01 Icons/08 Header & Footer/FedEx.svg";
import ups from "../../../assets/01 Icons/08 Header & Footer/UPS.svg";
import payu from "../../../assets/01 Icons/08 Header & Footer/PayU.svg";
import braintree from "../../../assets/01 Icons/08 Header & Footer/BrainTree.svg";
import razorpay from "../../../assets/01 Icons/08 Header & Footer/RazorPay.svg";
import '../../../assets/css/termandcondition.css';
// import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableSearchButton:false,
      depatmentlink: [
        {
          name: "Clothing",
          slash: "/"
        },
        {
          name: " Jewellery",
          slash: "/"
        },
        {
          name: "Accessories",
          slash: "/"
        },
        {
          name: "Home & Decor",
          slash: "/"
        },
        {
          name: "Gifts & More",
          slash: "/"
        },
        {
          name: "Jaypore Label"
        }
      ],
      popularlink:[
        {
          name: "Potli",
          slash: "/"
        },
        {
          name: "Nose Pins",
          slash: "/"
        },
        {
          name: "Chokers",
          slash: "/"
        },
        {
          name: "Tie  And Dye",
          slash: "/"
        },
        {
          name: "Embroidered Kurta",
          slash: "/"
        },
        {
          name: "Zari",
          slash: "/"
        },
        {
          name: "Ruby",
          slash: "/"
        },
        {
          name: "Runners"
        }
      ],
      link: [
        {
          name: "About us ",
          slash: "/aboutUs"
        },
        {
          name: "Contact Us",
          slash: "/contactUs"
        },
        {
          name: "Shipping",
          slash: "/shippingpolicy"
        },
        {
          name: "Returns",
          slash: "/returnopt"
        },
        {
          name: "Help",
          slash: "/helpcontent"
        },
        {
          name: "Terms",
          slash: "/term"
        },
        {
          name: "Privacy",
          slash:"/privacy"
        },
        {
          name: "Career",
          slash: "/careers"
        },       
        {
          name: "Archive",
          slash:"/archivecontent"
        },
        {
          name: "Blog",
          slash:"/blogs"
        }
      ]
    };
  }

  onValueChange = (e) => {
    console.log("this" ,e.target.value)
    this.setState({
      inputvalue: e.target.value, 
      colorWhite: '#fff'
    })
    let typesValue = e.target.value;
    if(typesValue.length>1){
      this.setState({
        enableSearchButton: true
      })
    }else{
      this.setState({
        enableSearchButton: false
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-black text-white">
          <div className="container">
            <div className="footer-container pb-85">
              <div className='footer-top-row-col-container'>
              <div className="row footer-row-width">
                <div className="col-md-10">
                  <div className="deparments">
                    <h4>
                      <p className='department-txt'>DEPARTMENTS</p>
                    </h4>
                    <div className="row department-link">
                      {this.state.depatmentlink.map(i => (
                        <div className="font-14 a-r-txt m-r-10 div-link">
                          <a className='cu-ptr dept-link' href='#'>{i.name}</a>
                          <span className="p-l-10">{i.slash}</span>
                          {/* <span className="p-l-10">/</span> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


               
                <div className="col-md-10 marginTop-52">
                  <h4>
                    <p className='department-txt'>POPULAR SEARCHES</p>
                  </h4>
                  <div className="row department-link">
                    {this.state.popularlink.map(i => (
                      <div className="font-14 a-r-txt m-r-10 div-link">
                        <a className='cu-ptr dept-link' href='#'> {i.name}</a>
                        <span className="p-l-10">{i.slash}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-2"></div>


                {/* <div className="col-md-2">
                  <p className="p-l-6 font-13">Follow us on</p>
                  <div className="social-icon">
                    <img
                      className="p-l-5 as_pl_1"
                      src={facebook}
                      alt="footer-log"
                    />
                    <img
                      className="p-l-5 as_pl_2"
                      src={instagram}
                      alt="footer-log"
                    />
                    <img
                      className="p-l-5 as_pl_3"
                      src={pinterest}
                      alt="footer-log"
                    />
                    <img
                      className="p-l-5 as_pl_4"
                      src={twitter}
                      alt="footer-log"
                    />
                  </div>
                </div> */}
              </div>

              <div className="top-column">
                  <p className="p-l-6 font-13">Follow us on</p>
                  <div className="social-icon">
                    <img
                      className="p-l-5 as_pl_1 cu-ptr"
                      src={facebook}
                      alt="footer-log"
                    />
                    <img
                      className="p-l-5 as_pl_2 cu-ptr"
                      src={instagram}
                      alt="footer-log"
                    />
                    <img
                      className="p-l-5 as_pl_3 cu-ptr"
                      src={pinterest}
                      alt="footer-log"
                    />
                    <img
                      className="p-l-5 as_pl_4 cu-ptr"
                      src={twitter}
                      alt="footer-log"
                    />
                  </div>
                </div> 
              </div>




              {/* <div className="row">
                <div className="col-md-10  p-t-13">
                  <h4>
                    <b>POPULAR SEARCHES</b>
                  </h4>
                  <div className="row department-link">
                    {this.state.popularlink.map(i => (
                      <div className="fon-13 m-r-10">
                        {i.name}
                        <span className="p-l-10">{i.slash}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div> */}


              <div className="shippingDetails pb-85">
                <div className="marginTop-85">
                  <div className="row">
                    <div className="col-md-3">
                      <p className="txt14-fmly">
                        Free* and Fast Shipping Worldwide{" "}
                      </p>
                      <img
                        className=" amax p-l-5"
                        src={aramax}
                        alt="footer-log"
                      />
                      <img
                        className=" fedex p-l-5"
                        src={fedex}
                        alt="footer-log"
                      />
                      <img className=" ups  p-l-5" src={ups} alt="footer-log" />
                    </div>
                    <div className="col-md-6">
                      <p className="txt14-fmly">
                        Secure Payment and Cash On Delivery{" "}
                      </p>
                      <img
                        className=" payu-padding-left payu"
                        src={payu}
                        alt="footer-log"
                      />
                      <img
                        className=" braintree p-l-5"
                        src={braintree}
                        alt="footer-log"
                      />
                      <img
                        className=" razorpay p-l-5"
                        src={razorpay}
                        alt="footer-log"
                      />
                    </div>
                    <div className="col-md-3">
                      <div className="question">
                        <p className="txt14-fmly">Questions?</p>
                        <p className="txt14-fmly">
                          Mail us at{" "}
                          <span>
                            <a href="">hello@jaypore.com</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="as_float-middle marginTop-85 pb-85">
                <div className="row ">
                  {this.state.link.map(i => (
                    <div className=" txt14-fmly m-r-35 as_m-r-35 cu-ptr linkColorChange textcolorfmkl"> {<a  style={{color:"white"}}href={i.slash}>{i.name}</a> }</div>
                  ))}
                </div>
              </div>


              <div>
                <div className="text-center marginTop-85">
                  <img src={japorelogo} alt="footer-log" />
                  <p className="font16-famly-wrk-r">
                    We've hand-picked these products for you!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="subscribe bg-black as_subscribe-container">
            
                <div className="a-row justify-content-center align-items-center ">
                  <p className="txt14-fmly m-t-10 mb-0" >
                    Hey! Get the latest Jaypore news, delivered weekly
                  </p>
                  <input
                    className="email-textbox"
                    type="text"
                    placeholder="Email Address"
                    onChange={(data) => this.onValueChange(data)}
                  />
                  <button className={`font-12 sub  ${(this.state.enableSearchButton)?"highlight-button":""}`} type="button">
                    Subscribe
                  </button>
                </div>
              </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
