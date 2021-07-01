import React, { Component } from "react"; 
import ReactDOM from 'react-dom'
import ApplyCoupon from "../../../assets/01 Icons/05 My Bag/coupon_icon.svg";
import ApplyCoupon2 from "../../../assets/01 Icons/05 My Bag/offer_icon_2.svg";
import Close from "../../../assets/01 Icons/05 My Bag/Close.svg";
class ApplyCouponModal extends Component {

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
    let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_cont);
    if (e.target.value === "") {
      continue_button_dom.style.backgroundColor = "#babcbf";
    } else {
      continue_button_dom.style.backgroundColor = "#BB4225";
    }
  }

  render() {
    let rows = [0, 1]
    return (
      <div>
        <div className="apply-credits-outer-div">
          {/* <div className="modal-content"> */}
          <div className="apply-cre-hdr">
            <div className="" >
              <img src={ApplyCoupon} alt="apply" />
              <span className="text-green p-l-20 txt-app-cre a-m-txt font-16">Apply Coupon </span>
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
                <div className="f-c-black-apply m-b-8 a-m-txt font-16 a-colr-61">Enter Coupon Code</div>
                <input type='text' className='mybag-modal-input a-sb-txt a-14-txt pl-2 caretColor-bb' onChange={(data) => this.onValueChange(data)} style={{
                  width: '70%', marginRight: 0, borderRight: 0, borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }} />
                <button className='pincode-btn  a-sb-txt a-14-txt' ref="login_cont"
                 style={{ width: '30%', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                  Apply
                                                     </button>
              </div>
            </div>
            {rows.map((i) => {
              let hideDivOne = true
              if (i === 0) {
                hideDivOne = false
              }
              return <div className={hideDivOne ? 'm-t-24' : ''}>
                <hr style={{ border: '1px solid #F5E3D8' }} />
                <div className={hideDivOne ? 'd-none' : 'row'} style={{ paddingTop: '24px', paddingBottom: '16px' }}>
                  <div className="text-grey regular col-6 a-m-txt a-16-txt a-colr-61">Applicable On Your Cart</div>
                  <div className="sb-txt col-6" style={{ textAlign: 'right' }}>
                  <a className="w3-btn m-r-5" href="">
                      <span className="w3-hide-small a-sb-txt a-12-txt a-colr-21">&lt; PREVIOUS</span>
                    </a>
                    <a className="w3-btn " href="">
                      <span className="w3-hide-small a-sb-txt a-12-txt a-colr-21">NEXT &gt;</span>
                    </a>
                  </div>
                </div>
                <div className={hideDivOne ? 'row' : 'd-none'} style={{ paddingTop: '24px', paddingBottom: '16px' }}>
                  <div className="text-grey regular col-6 a-m-txt a-16-txt a-colr-61">Currently Running Online</div>
                  <div className="sb-txt col-6" style={{ textAlign: 'right' }}>
                    <a className="w3-btn m-r-5" href="">
                      <span className="w3-hide-small a-sb-txt a-12-txt a-colr-21">&lt; PREVIOUS</span>
                    </a>
                    <a className="w3-btn " href="">
                      <span className="w3-hide-small a-sb-txt a-12-txt a-colr-21">NEXT &gt;</span>
                    </a>
                  </div>
                </div>
                <div className="row" style={{ textAlign: 'center' }}>
                  <div className="text-grey regular col-6">
                    <div className="card-Modal-Applycoupon f-c-black ">
                      <div>
                        <img src={ApplyCoupon2} height="30" width="30" alt="" />
                      </div>
                      <div className="f-c-marron a-sb-txt a-16-txt">JAYPORE20</div>
                      <div className="p-t-b-4 a-m-txt a-12-txt a-colr-21">
                        Get 10% Off on purchase above
                    </div>
                      <div className="p-t-b-4 a-m-txt a-12-txt a-colr-21">Rs. 1000</div>
                      <div className="p-t-b-4 a-sb-txt a-12-txt ">
                        <button className="button-Apply-Green ">APPLY</button>
                      </div>
                    </div>
                  </div>
                  <div className="sb-txt col-6">
                    <div className="card-Modal-Applycoupon f-c-black ">
                      <div>
                        <img src={ApplyCoupon2} height="30" width="30" alt="" />
                      </div>
                      <div className="f-c-marron a-sb-txt a-16-txt">JAYPORE20</div>
                      <div className="p-t-b-4 a-m-txt a-12-txt a-colr-21">
                        Get 10% Off on purchase above
                    </div>
                      <div className="p-t-b-4 a-m-txt a-12-txt a-colr-21">Rs. 1000</div>
                      <div className="p-t-b-4 a-sb-txt a-12-txt ">
                        <button className="button-Apply-Green ">APPLY</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div >
    );
  }
}

export default ApplyCouponModal;
