import React, { Component } from "react";
import ReactDOM from "react-dom"
import ApplyCredits from "../../../assets/01 Icons/11 My Order/rupees_apply.svg";
import Close from "../../../assets/01 Icons/05 My Bag/Close.svg";

export default class ApplyCredit extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputvalue: ""
    }
  }

  onValueChange = (e) => {
    console.log("this" ,e.target.value)
    this.setState({
      inputvalue: e.target.value
    })
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.applyCredit);
    if (e.target.value === "") {
      continue_button_dom.style.backgroundColor = "#babcbf";
    } else {
      continue_button_dom.style.backgroundColor = "#BB4225";
    }
  }
  render() {
    return (
      <div>
        <div className="m-t-310"></div>
        <div className="apply-credits-outer-div">
          <div className="apply-cre-hdr">
            <div className="" >
              <img src={ApplyCredits} alt="apply" />
              <span className="text-green p-l-20 txt-app-cre a-m-txt font-16">Apply Credits </span>
            </div>
            <div className="">
              <a href="#modal-close" title="Close" class="modal-close">
                <img className="" src={Close} height="16" width="16" alt="" />
              </a>
            </div>
          </div>
          <div style={{ padding: '24px' }}>
            <div className="p-b-16">
              <div style={{ margin: 'auto' }}>
                <div className="f-c-black-apply m-b-8 a-m-txt font-16 a-colr-61">Enter Credit</div>
                <input type='text' className='mybag-modal-input a-sb-txt a-14-txt pl-2 caretColor-bb' onChange={(data) => this.onValueChange(data)} style={{
                  width: '70%', marginRight: 0, borderRight: 0, borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }} />
                <button className='pincode-btn  a-sb-txt a-14-txt' ref="applyCredit" style={{ width: '30%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                  Apply
                                                     </button>
              </div>
            </div>

            <div className="m-b-8">
              <div className="a-m-txt a-14-txt" style={{ color: '#EB3840' }}>
                Exceeding Credit Limit
          </div>
            </div>
            <div className="font-14">
              <span className="txt-color-b-g regular a-colr-75"></span> Available Credit Balance: <span className="a-sb-txt a-colr-21"> 5000 </span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
