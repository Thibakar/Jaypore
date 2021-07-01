import React, { Component } from "react";
import Modal from "react-modal";
import { BaseComponent } from "../common/BaseComponent";
// import "../components/shared/header/header.css";



class BasicModal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      subTitle: "asdfasd",
      heading: "",
      title: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("this");
    return {
      isVisible: props.visible,
      heading: props.heading,
      title: props.title,
      subTitle: props.subTitle
    };
  }

  render() {
    return (
      <Modal isOpen={this.state.isVisible} style={{border: "none !important"}}>
      
          
                  <form className="loading-form ">
                   
                    <div className="">
                      <h6 className="">
                        An Email Verification Link has been successfully sent to
                      </h6>
                      <h6 className="">
                        <strong>email id of the person</strong>
                      </h6>
                    </div>
                  </form>
              
      
      </Modal>
    );
  }
}

export default BasicModal;
