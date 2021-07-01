import React, { Component } from 'react'
import CloseIcon from '../../assets/shipping_payment_icon/Close.svg'
import Modal from 'react-modal'
import dropDown from "../../assets/shipping_payment_icon/Dropdown Arrow.svg";
import RadioIcon from "../../assets/shipping_payment_icon/Radio - Empty.svg";
import { BaseComponent } from '../common/BaseComponent';

// import "../../assets/css/shipping-payment.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },

  content: {
    marginTop: '10px',
    marginBottom: 'auto',
    left: '27%',
    right: '30%',
    // bottom: '1%',
    width: '680px',
    padding: 0,
    overflow: 'scroll',
    backgroundColor: 'rgba(255,255,255,255)',

  }
};


export default class EditModal extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      isVisible: props.visible,

    }
  }


  closeModal = () => {
    console.log("this")
    this.props.toggleVisible();
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isVisible}
        style={customStyles} >

        <div className="edit-box-modal">
          <div className="crdImgPaymentOptty shippingCustomPadding shippingPaymentEditHeaderSticky font-size-16">Edit Address
              <img src={CloseIcon}
              className='close-icon-edit'
              alt="brandcheck" onClick={() => this.closeModal()} />
          </div>
          <div className='a-p-16 shippingCustomPadding'>
            <div>
              <label className="shipping-label">Full Name</label>
              <input
                type="email"
                className="skform-control563 inputformHeight w-100"
                id="exampleInputEmail1"
                placeholder=""
              />
            </div>
            <div>
              <label className="shipping-label">Address</label>
              {/* <input
                type="email"
                className="skform-control563sp"
                id="exampleInputEmail1"
                placeholder=" "
              /> */}
              <textarea className="skform-control563sp" />
            </div>
            <div>
              <label className="shipping-label">Country</label>
              <select className="form-control jp-form-control-select-lg mb-3" placeholder="" >
                <option>India</option>
                <option>United States of America</option>
              </select>

            </div>
            <div>
              <label className="shipping-label">Pin Code / Zip code</label>
              <input
                type="email"
                className="skform-control563 inputformHeight w-100"
                id="exampleInputEmail1"
                placeholder=" "
              />
            </div>{" "}
            <div>
              <label className="shipping-label">State / Province</label>
              <select className="form-control jp-form-control-select-lg mb-3" placeholder="" >
                <option>Andhra Pradesh</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
              </select>
            </div>
            <div>
              <label className="shipping-label">City</label>
              <select className="form-control jp-form-control-select-lg mb-3" placeholder="" >
                <option>Please Select City</option>
                <option>Bangalore</option>
                <option>Mangalore</option>
                <option>Mysore</option>
                <option>Hassan</option>
              </select>
            </div>
            <div>
              <label className="shipping-label">Phone Number</label>
              <input
                type="email"
                className="skform-control563 inputformHeight w-100"
                id="exampleInputEmail1"
                value="+91 9773123432"
                placeholder=" "
              />
            </div>
            <div>
              <label className="shipping-label mt-3 mb-2">Address type</label>

              <div className="row p-l-5">
                <img
                  src={RadioIcon}
                  alt="welcom.in"
                  className="paddingIcon"
                />
                <p className="pstyleHome">Home</p>
                <img
                  src={RadioIcon}
                  alt="welcom.in"
                  className="paddingIcon"
                />
                <p className="pstyleHome"> Office</p>
                <img
                  src={RadioIcon}
                  alt="welcom.in"
                  className="paddingIcon"
                />
                <p className="pstyleHome">Others</p>
              </div>
            </div>
            {/* <hr className="hstyLe51"></hr>
            <div className="row p-l-20">
              <label className="container1">
                {" "}
                <div className="bill-address a-14-txt d-in-blk">Billing address will be same</div>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div> */}


            <div className="badgsavechanges">
              <button className="block0190">Save Changes</button>
            </div>
          </div>
        </div>


      </Modal>
    )
  }
}

