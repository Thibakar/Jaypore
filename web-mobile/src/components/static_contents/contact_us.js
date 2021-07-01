import React, { Component } from 'react'
import "../../assets/css/staticcontent.css";
import chatIcon from "../../assets/contact_us_icon/chaticon.svg";
import plusIcon from "../../assets/contact_us_icon/plus_imges.svg";
import minusicon from "../../assets/contact_us_icon/minusIconJay.svg";
import emailIconsvg from "../../assets/contact_us_icon/email.svg";
import corporateOfficesvg from "../../assets/contact_us_icon/corp_office.svg";
import storeaddressvg from "../../assets/contact_us_icon/store_address.svg"
import FooterPage from "../../components/common/footer/footer";
import HeaderPage from "../../components/common/header/header";


export class Contact_us extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleemailshow: false,
            togglecorporateaddress: false,
            togglestoreaddress: false,
            togglechatshow: false
        }
    }
    chatshow = () => {
        console.log("adding design")
        this.setState({
            togglechatshow: true,
            toggleemailshow:false,
            togglecorporateaddress: false,
            togglestoreaddress: false

        })

    };
    chatshow2 = () => {
        console.log("adding design")
        this.setState({
            togglechatshow:false,
            toggleemailshow:false,
            togglecorporateaddress: false,
            togglestoreaddress: false
        })

    };

    emailshow = () => {
        console.log("adding design")
        this.setState({
            toggleemailshow:true,
            togglechatshow:false,
            togglecorporateaddress: false,
            togglestoreaddress: false
        })

    };
    emailshow2 = () => {
        console.log("adding design")
        this.setState({
            toggleemailshow:false,
            togglechatshow:false,
            togglecorporateaddress: false,
            togglestoreaddress: false
        })

    };
    

    corporateaddress = () => {
        console.log("adding design")
        this.setState({
            togglecorporateaddress: true,
            toggleemailshow:false,
            togglechatshow:false,
            togglestoreaddress: false
        })

    };
    corporateaddress2 = () => {
        console.log("adding design")
        this.setState({
            togglecorporateaddress: false,
            toggleemailshow:false,
            togglechatshow:false,
            togglestoreaddress: false
        })

    };


    storeaddress = () => {
        console.log("adding design")
        this.setState({
            togglestoreaddress: true,
            togglecorporateaddress: false,
            toggleemailshow:false,
            togglechatshow:false,
        })

    };
    storeaddress2 = () => {
        console.log("adding design")
        this.setState({
            togglestoreaddress: false,
            togglecorporateaddress: false,
            toggleemailshow:false,
            togglechatshow:false,

        })

    };
   
   


    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="headerMenustyle01">
                        <div>
                            <HeaderPage />
                        </div>
                        <div className="cnt-us-st-sv-pg">
                        <div className="returns_policymain_content">
                            <h5 className="returns_policytxt">Contact Us</h5>
                            <p className="pd-btn-18mobile"> We are crazy about our customers, suppliers and other well-wishers and want to give you as many ways to get in touch as possible.</p>
                            <hr className="hzl_row_stylefile"></hr>
                            <div className="sectionof-collapsable-panel d-flex">
                                <img src={chatIcon} alt="chat-img-icon" />
                                <h5 className="chatIcon-e-pos-a"> Chat</h5>
                                <div onClick={this.chatshow}>
                                    {this.state.togglechatshow ==false &&

                                        <img src={plusIcon} alt="plus-icon-img" className="plus-icon-im-e" />
                                       
                                    }
                                    </div>
                                    <div onClick={this.chatshow2}>
                                    {this.state.togglechatshow ==true &&
                                         <img src={minusicon} alt="minus-icon-img" className="minus-icon-im-m" />
                                    }
                                  </div>
                            </div>
                            <div className={this.state.togglechatshow ? "" : "d-none"}>
                                <div className="chat-section-jaypore">
                                    <p>Here Is the Chat Section Empty</p>
                                </div>
                            </div>


                            <hr className="hzl_row_stylefile"></hr>
                            <div className="sectionof-collapsable-panel d-flex">
                                <img src={emailIconsvg} alt="chat-img-icon" />
                                <h5 className="chatIcon-e-pos-a"> Email</h5>

                                <div onClick={this.emailshow}>
                                    {this.state.toggleemailshow ==false &&
                                         <img src={plusIcon} alt="plus-icon-img" className="plus-icon-im-i" />
                                    }
                                    </div>
                                    <div onClick={this.emailshow2}>
                                    {this.state.toggleemailshow ==true &&
                                     <img src={minusicon} alt="minus-icon-img" className="minus-icon-im-p" />
                                    }
                                </div>
                            </div>
                            <div className={this.state.toggleemailshow ? "" : "d-none"}>
                                <div className="email-section-jaypore">
                                    <p className="email-p-e-pos-a">Got a question about an order, a suggestion, or just want to know what's the latest at Jaypore ?</p>
                                    <p>Contact to us <span><a href="mailto:hello@jaypore.com" target="_new" className="email-jaypore_client" > hello@jaypore.com</a></span></p>
                                    <p className="email-p-e-pos-a"> Interested in telling our story? We are always game!</p>
                                    <p> for any press queries , we are available at <span><a href="mailto:press@jaypore.com" target="_new" className="email-jaypore_client"> press@jaypore.com </a></span></p>
                                    <p className="email-p-e-pos-a"> Want to partner with Jaypore , or have an absolutely amazing idea for us ? </p>
                                    <p> We are all ears ! For all business related queries, reach out at <span><a href="mailto:b2b@jaypore.com" target="_new" className="email-jaypore_client"> b2b@jaypore.com</a></span></p>
                                </div>
                            </div>
                            <hr className="hzl_row_stylefile"></hr>
                            <div className="sectionof-collapsable-panel d-flex">
                                <img src={corporateOfficesvg} alt="chat-img-icon" />
                                <h5 className="chatIcon-e-pos-a"> Corporate office address</h5>

                                <div onClick={this.corporateaddress}>
                                    {this.state.togglecorporateaddress ==false &&

                                        <img src={plusIcon} alt="plus-icon-img" className="plus-icon-im-c" />
                                        
                                    }
                                    </div>
                                    <div onClick={this.corporateaddress2}>
                                    {this.state.togglecorporateaddress==true &&
                                    <img src={minusicon} alt="minus-icon-img" className="minus-icon-im-x" />
                                       
                                    }

                                </div>
                            </div>
                            <div className={this.state.togglecorporateaddress ? "" : "d-none"}>
                                <div className="corporate-office-section">
                                    <p className="email-p-e-pos-a"> Corporate office address</p>
                                    <p> N1, N Block Market, Greater Kailash I | New Delhi 110048, India</p>
                                    <p>Ph: +91-730-5297673 (+ 91 730 JAYPORE)</p>
                                    <p>9:30AM to 7:00PM IST, Mon to Sat</p>
                                </div>
                            </div>
                            <hr className="hzl_row_stylefile"></hr>
                            <div className="sectionof-collapsable-panel d-flex">
                                <img src={storeaddressvg} alt="chat-img-icon" />
                                <h5 className="chatIcon-e-pos-a"> Store Address</h5>

                                <div onClick={this.storeaddress}>
                                    {this.state.togglestoreaddress==false &&
                                         <img src={plusIcon} alt="plus-icon-img" className="plus-icon-im-s" />

                                    }
                                    </div>
                                    <div onClick={this.storeaddress2}>
                                    {this.state.togglestoreaddress==true &&

                                         <img src={minusicon} alt="minus-icon-img" className="minus-icon-im-y" />
                                     }

                                </div>

                            </div>
                            <div className={this.state.togglestoreaddress ? "" : "d-none"}>
                                <div className="new-Delhi-store-address-sections">
                                    <p className="email-p-e-pos-a"> New Delhi store address:</p>
                                    <p>B-64, Okhla Industrial Area, Phase - I | New Delhi 110020, India</p>
                                    <p>Ph: +91-11-49123886</p>
                                    <p> 10:30AM to 8:30PM IST , Mon to Sun</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    </div>
                    <div className="po-rl-ft-pa">
                    <FooterPage />
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Contact_us
