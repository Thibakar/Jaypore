import React, { Component } from 'react'
import "../../assets/css/termandcondition.css";
import chatIcon89 from "../../assets/shipping_payment_icon/chatJaypore.svg";
import emailJaypore from "../../assets/shipping_payment_icon/emailJaypore.svg";
import corpofficeadd from "../../assets/shipping_payment_icon/corp_office.svg";
import storeaddressOf from "../../assets/shipping_payment_icon/store_addressff.svg";
import plusIconImg from "../../assets/shipping_payment_icon/plus_imges.svg";
import minuIconImg from "../../assets/shipping_payment_icon/minus.svg";
import Footer from "../shared/footer/footer";
import Header from "../shared/header/header";
import MenuComponent from "../shippingpayment/menustaticcontent";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export class ContacttUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleshowMoreslip: false,
            toggleemailshow: false,
            togglechatshow: false,
            togglestoreaddresshow: false
        }
    }
    chatshow = () => {
        console.log("adding design")
        this.setState({
            togglechatshow: true,
            toggleemailshow: false,
            toggleshowMoreslip:false,
            togglestoreaddresshow:false
        })

    };

    chatshow1 = () => {
        console.log("adding design")
        this.setState({
            togglechatshow: false,
            toggleemailshow: false,
            toggleshowMoreslip:false,
            togglestoreaddresshow:false
        })

    };
    
    emailshow = () => {
        console.log("adding design")
        this.setState({
            toggleemailshow: true,
            toggleshowMoreslip:false,
            togglechatshow: false,
            togglestoreaddresshow:false

        })

    };
    emailshow1 = () =>{
        console.log("adding design")
        this.setState({
            toggleemailshow: false,
            toggleshowMoreslip:false,
            togglechatshow: false,
            togglestoreaddresshow:false
    })
};

    showMoreslip = () => {
        console.log("addingdesign")
        this.setState({
            toggleshowMoreslip: true,
            togglechatshow: false,
            togglestoreaddresshow:false,
            toggleemailshow:false

        })
    };
    showMoreslip1 = () => {
        console.log("addingdesign")
        this.setState({
            toggleshowMoreslip: false,
            togglechatshow: false,
            togglestoreaddresshow:false,
            toggleemailshow:false

        })
    };
    
    storeaddresshow = () => {
        console.log("adding design")
        this.setState({
            togglestoreaddresshow: true,
            togglechatshow: false,
            toggleemailshow: false,
            toggleshowMoreslip:false,
        })

    };
    storeaddresshow1 = () => {
        console.log("adding design")
        this.setState({
            togglestoreaddresshow: false,
            togglechatshow: false,
            toggleemailshow: false,
            toggleshowMoreslip:false,
        })

    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <div className="container">
                        <div className="contact_us_content">
                            <div className="row">
                                <div className="col-md-2">
                                    <MenuComponent />
                                </div>
                                <div className="col-md-10" id="rectangledivsection">
                                    <div className="contactusPolicysinJayporesection">
                                        <h5 className="contactusSectionTitleJaypore">Contact Us</h5>
                                        <p className="crazycustomer">We are crazy about our customers, suppliers and other well-wishers, and want to give you as many ways to get in touch as possible.</p>
                                        <hr className="stylehrcontact"></hr>
                                        <Accordion>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <div className="row d-flex" id="termConditionsImgdflex">

                                                            <div className="chatpanelchatIcon">

                                                                <div className="chaticon">
                                                                    <img src={chatIcon89} alt="chatIcon" />
                                                                </div>

                                                            </div>
                                                            <div className="chatsectionpanel">

                                                                <div className="emaileditor">
                                                                    <h5 className="chatsectionp">Chat</h5>
                                                                </div>
                                                            </div>
                                                            <div  onClick={this.chatshow} className="plus-op-ic-np-t">
                                                                {this.state.togglechatshow == false &&

                                                                    // <img src={minuIconImg} alt="minusicon" className="chatIconSectionImg" />
                                                                    // :
                                                                    <img src={plusIconImg} alt="plusicon-img" className="chlpIconSectionImg" />
                                                                }

                                                            </div>
                                                            <div  onClick={this.chatshow1} className="plus-op-ic-np-t">
                                                                {this.state.togglechatshow == true &&

                                                                    <img src={minuIconImg} alt="minusicon" className="chatIconSectionImg" />
                                                                    
                                                                    // <img src={plusIconImg} alt="plusicon-img" className="chlpIconSectionImg" />
                                                                }

                                                            </div>
                                                        </div>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className={this.state.togglechatshow ? "" : "d-none"}>
                                                        <p className="contactUsAtEmail">
                                                            Chating section
                                                          </p>
                                                          <p>Helllo Jaypore Team this chat section is pending</p>
                                                    </div>
                                                    <hr className="stylehrcontact12"></hr>

                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            {/* Here I need to add hr style if it required */}
                                            {/* {()?<hr className="stylehrcontact"></hr>:null} */}
                                            <hr className="stylehrcontact"></hr>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <div className="row d-flex" id="termConditionsImgdflex">

                                                            <div className="chatpanelchatIcon">

                                                                <div className="chaticon">
                                                                    <img src={emailJaypore} alt="chatIcon" />
                                                                </div>

                                                            </div>
                                                            <div className="chatsectionpanel">

                                                                <div className="emaileditor">
                                                                    <h5 className="chatsectionp">Email</h5>
                                                                </div>
                                                            </div>
                                                            <div  onClick={this.emailshow}>
                                                                {this.state.toggleemailshow==false &&
                                                                    <img src={plusIconImg} alt="plusicon-img" className="chaImtIconSectionImg" />
                                                                                                                                    }
                                                                </div>

                                                                 <div  onClick={this.emailshow1}>
                                                                {this.state.toggleemailshow==true &&
                                                                   <img src={minuIconImg} alt="minusicon" className="chatIconSectionImg" />

                                                                }

                                                            </div>
                                                        </div>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className={this.state.toggleemailshow ? "" : "d-none"}>
                                                        <div className="mailbodyjaypore">
                                                            <h5 className="suggestionjustwant"> Got a question about an order, a suggestion, or just want to know what's the latest of Jaypore ?</h5>
                                                            <p className="contactUsAtEmail">Contact us at
                                                            <a href="mailto:hello@jaypore.com" className="he-e-mai-si-devep"> hello@jaypore.com</a>
                                                            </p>
                                                            <h5 className="suggestionjustwant"> Interested in telling our story ? We are always game!</h5>
                                                            <p className="contactUsAtEmail"> For any press queries, we are available at  <span><a href="mailto:press@jaypore.com" className="he-e-mai-si-devep" > press@jaypore.com</a></span></p>
                                                            <h5 className="suggestionjustwant"> Want to partner with Jaypore, or have an absolutely amazing idea for us?</h5>
                                                            <p className="contactUsAtEmail"> We are all ears! For all business related queries, reach out at <a href="mailto:b2b@jaypore.com" className="he-e-mai-si-devep">b2b@jaypore.com</a></p>
                                                            <h5 className="suggestionjustwant"> Oh and for anything, we mean absolutely anything , we are always a line away on social media!</h5>
                                                            <p className="contactUsAtEmail">Say hi on twitter and instagram @ jaypore and on FB at facebook.com/Jaypore</p>
                                                        </div>
                                                    </div>
                                                    <hr className="stylehrcontact12"></hr>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <hr className="stylehrcontact"></hr>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <div className="row d-flex" id="termConditionsImgdflex">
                                                            <div className="chatpanelchatIcon">
                                                                <div className="chaticon">
                                                                    <img src={corpofficeadd} alt="chatIcon" />
                                                                </div>
                                                            </div>
                                                            <div className="chatsectionpanel">
                                                                <div className="emaileditor">
                                                                    <h5 className="chatsectionp">Corporate office address</h5>
                                                                </div>
                                                            </div>
                                                            <div id="myID3" onClick={this.showMoreslip}>
                                                                {this.state.toggleshowMoreslip==false && 
                                                                 <img src={plusIconImg} alt="plusicon-img" className="styIconSectionImg" />

                                                                                                                                  }
                                                                    </div>
                                                                    <div id="myID3" onClick={this.showMoreslip1}>
                                                                    {this.state.toggleshowMoreslip==true && 
                                                                      <img src={minuIconImg} alt="minusicon" className="storeIconSectionImg" />
                                         
                                                                                                             
                                                                }
                                                            </div>
                                                        </div>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className={this.state.toggleshowMoreslip ? "" : "d-none"}>
                                                        <div className="corporatebodyjaypore">
                                                            <h5 className="suggestionjustwant"> Corporate office address:</h5>
                                                            <address className="noidaDelhiJay">
                                                                N1, N Block Market, Greater Kailash I | New Delhi 110048, India
                                                                Ph: +91-730-5297673(+91 730 JAYPORE)
                                                                9:30Am to 7:00PM IST, Mon to Sat
                                                          </address>
                                                        </div>
                                                    </div>
                                                    <hr className="stylehrcontact12"></hr>
                                                </AccordionItemPanel>
                                                <hr className="stylehrcontact"></hr>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        <div className="row d-flex" id="termConditionsImgdflex">
                                                            <div className="chatpanelchatIcon">
                                                                <div className="chaticon">
                                                                    <img src={storeaddressOf} alt="chatIcon" />
                                                                </div>
                                                            </div>
                                                            <div className="chatsectionpanel">

                                                                <div className="emaileditor">
                                                                    <h5 className="chatsectionp">Store Address</h5>
                                                                </div>
                                                            </div>
                                                            <div id="myID4" onClick={this.storeaddresshow}>
                                                                {this.state.togglestoreaddresshow==false &&
                                                                     <img src={plusIconImg} alt="plusicon-img" className="pl-aillastIconSectionImg" />
                                                                                                                                       }
                                                                    
                                                                    </div>
                                                                    <div id="myID4" onClick={this.storeaddresshow1}>
                                                                      {this.state.togglestoreaddresshow==true &&
                                                                        <img src={minuIconImg} alt="minusicon" className="maillastIconSectionImg" />

                                                                      }
                                                                   
                                                                

                                                                      </div>
                                                                  </div>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className={this.state.togglestoreaddresshow ? "" : "d-none"}>
                                                        <p className="contactUsAtEmail">B-64, Okhla Industrial Area, Phase -1 | New Delhi 110020, India</p>
                                                        <p className="contactUsAtEmail"> Ph: +91-11-49123886</p>
                                                        <p className="contactUsAtEmail">10:30AM to 8:30PM IST, Mon to Sat</p>
                                                        <hr className="stylehrcontact12"></hr>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-standardx">
                    <Footer />
                </div>
            </React.Fragment>
        )

    }
}

export default ContacttUs