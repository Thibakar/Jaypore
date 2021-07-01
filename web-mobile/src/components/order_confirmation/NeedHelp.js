import React, { Component } from "react";
import close from "../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg";
import call from "../../assets/Jaypore Assets/01 Icons/07 Order Confirmation/Call.svg";
import email from "../../assets/Jaypore Assets/01 Icons/07 Order Confirmation/Email.svg";

export class NeedHelp extends Component {
  render() {
    return (
      <div>
        <div className="back-color-pink right-center height-100vh">
          <div className="a-height-56 row-bwt-div  white-back-color p-13">
            <img
              src={close}
              alt=""
              width="24px"
              height="24px"
              className="a-icon-back"
              onClick={() => this.props.history.goBack()}
            />
          </div>
          <div className="a-p-16 a-cardOrder left-align">
            <h3 className="a-mb-8 m-txt">Incase you need any help</h3>
            <p className="sub-sub-heading-txt a-line-h mb-0">
              Our customer experience experts would love you hear and resolve
              your query in no time.
            </p>
            <h5 className="sub-sub-heading-txt a-mt-24  mb-0">
              <b>Connect via Call</b>
            </h5>
            <button className="a-btn-white a-p-12 btn-radius left-align row-div-start a-mt-8">
              <img src={call} alt="" />
              <h4 className="a-ml-24 black-color a-mt-8">011 6529 7673</h4>
            </button>

            <h5 className="sub-sub-heading-txt a-mt-24  mb-0">
              <b>Connect via Email</b>
            </h5>
            <button className="a-btn-white a-p-12 btn-radius left-align row-div-start a-mt-8">
              <img src={email} alt="" />
              <h4 className="a-ml-24 black-color a-mt-8">hello@jaypore.com</h4>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NeedHelp;
