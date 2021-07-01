import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CardLast from '../common/homePageCard'
import DownArrow from '../../assets/Jaypore Assets/01 Icons/01 Login Signup/Dropdown Arrow.svg'
import ApplyCoupan from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Apply Coupon.svg'
import RedeemEGiftCard from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Redeem E-Gift Card.svg'
import ApplyCredits from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Apply Credits.svg'
import OrderConfirmationImg from '../../assets/Jaypore Assets/01 Icons/07 Order Confirmation/Order Confirmation.svg'
import MyBagCoupanCard from './MyBagCoupanCard'
import MyBagApplyBtn from './MyBagApplyBtn'
import ShopToAvailBtn from './ShopToAvailBtn'



class MyBagOptions extends Component {

    constructor(props){
        super(props)
        this.state={
            isapply:false
        }
    }

    toggle_apply=()=>{
        console.log(this.state.isapply)
        this.setState({
            isapply:!this.state.isapply
        })
    }
    onChangeInput = (event) => {
        let continue_button_dom = ReactDOM.findDOMNode(this.refs.login_continue)
        if (event.target.value ==='') {
            continue_button_dom.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom.style.backgroundColor = '#BB4225'
        }
    }
    onChangeInput1 = (event) => {
        let continue_button_dom1 = ReactDOM.findDOMNode(this.refs.login_continue1)
        if (event.target.value ==='') {
            continue_button_dom1.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom1.style.backgroundColor = '#BB4225'
        }
    }
    onChangeInput2 = (event) => {
        let continue_button_dom2 = ReactDOM.findDOMNode(this.refs.login_continue2)
        if (event.target.value ==='') {
            continue_button_dom2.style.backgroundColor = '#babcbf'
        }
        else {
            continue_button_dom2.style.backgroundColor = '#BB4225'
        }
    }
    

    render() {
        return (
            <div>
                <div className="m-txt grey-color mb-2">Options</div>
                <div className="">
                    <section className="accordion">
                        <input type="checkbox" name="collapse1" id="section1" />
                        <label htmlFor="section1" className="bg-white p-10 jaypore-border border-radius"
                         onClick={()=>this.toggle_apply()}
                         ><img alt="" src={ApplyCoupan} />
                            <span className="ml-4 r-txt"> Apply Coupon<span className="float-right brandcolor-txt">
                                <img alt="" className={this.state.isapply?'rot-180 wt-13':'wt-13'} src={DownArrow} /></span>
                            </span>
                        </label>
                        <div className="content bg-white m-0">

                            <div>
                                <div className="text-grey mb-8 m-txt">Available On Your Cart</div>
                                <div className="main">
                                    <div className="wrapper">
                                        <div className="image-container mt--10">
                                            <div className="myBagimage ml-3">
                                                <div className=" bg-lightGreen height-250">
                                                    <div className="text-center mt-4">
                                                        <img src={OrderConfirmationImg} alt="" className="myBagCoupanImages" />
                                                        <p className="text-green font-size-12 m-txt mt-3 mb-0">Rs.700 discount</p>
                                                        <p className="text-green font-size-12 m-txt">applied</p>
                                                        <div className="col-12 text-center mt-5 top--20">
                                                            <button className="font-11 bg-white width-50 pl-2 pt-1 pb-1 ml-2 text-center text-blue border-radius m-txt"><strong>REMOVE</strong></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4">
                                                        <MyBagCoupanCard />
                                                        <MyBagApplyBtn />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4">
                                                        <MyBagCoupanCard />
                                                        <MyBagApplyBtn />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4">
                                                        <MyBagCoupanCard />
                                                        <MyBagApplyBtn />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4">
                                                        <MyBagCoupanCard />
                                                        <MyBagApplyBtn />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="jaypore-bottom-border" />
                            <div>
                                <div className="text-grey mb-8 mt-16 m-txt">Currently Running</div>
                                <div className="main">
                                    <div className="wrapper">
                                        <div className="image-container mt--10">
                                            <div className="myBagimage ml-3">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4 pb-4">
                                                        <MyBagCoupanCard />
                                                        <ShopToAvailBtn />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4 pb-4">
                                                        <MyBagCoupanCard />
                                                        <ShopToAvailBtn />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4 pb-4">
                                                        <MyBagCoupanCard />
                                                        <ShopToAvailBtn />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="myBagimage">
                                                <div className="coupanBorder height-250">
                                                    <div className="text-center mt-4 pb-4">
                                                        <MyBagCoupanCard />
                                                        <ShopToAvailBtn />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-grey m-txt">or Enter Coupon Code</div>
                            <div className="d-flex">
                                <div className="col-8 pr-0 pl-0 p-t-10">
                                    <input type="text" className="enterCreditBtn mt-0"   onChange={(e) => this.onChangeInput1(e)} />
                                </div>
                                <div className="col-4 pl-0 pr-0 p-t-10">
                                    <button type="button" className="apply-btn-grey sb-txt" style={{ background: '#BABCBF' }}
                                     ref='login_continue1' id='login_continue1'
                                    >Apply</button>
                                </div>
                            </div>
                            {/* <h3 className="text-grey mt-3">Available Credit Balance: <strong>5000</strong></h3> */}

                        </div>
                    </section>
                    <section className="accordion">
                        <input type="checkbox" name="collapse1" id="section2" />
                        <label htmlFor="section2" className="bg-white p-10 jaypore-border border-radius"
                         onClick={()=>this.toggle_apply()}
                        >
                            <img src={RedeemEGiftCard} alt="" />
                            <span className="ml-4 r-txt">Redeem E-gift Card<span className="float-right brandcolor-txt">
                                <img  className={this.state.isapply?'rot-180 wt-13':'wt-13'} alt="" src={DownArrow} /></span></span></label>
                        <div className="content bg-white"
                        
                        >
                            <h4 className="text-grey"><strong>Enter E-gift card Code</strong></h4>
                            <div className="d-flex">
                                <div className="col-8 pr-0 pl-0">
                                    <input type="text" className="enterCreditBtn mt-0"   onChange={(e) => this.onChangeInput2(e)}></input>
                                </div>
                                <div className="col-4 pl-0 pr-0">
                                    <button type="button"  className="apply-btn-grey sb-txt" style={{ background: '#BABCBF' }}
                                    
                                    ref='login_continue2' id='login_continue2'
                                    >Redeem</button>
                                </div>
                            </div>
                            <div className="text-green mt-3">Credit worth <span className="sb-txt">Rs.2000</span> has been added to your account</div>
                            <div className="text-blue mt-3 m-txt">TAP HERE TO APPLY CREDITS</div>
                        </div>
                    </section>
                    <section className="accordion mb-3">
                        <input type="checkbox" name="collapse1" id="section3" />
                        <label htmlFor="section3" className="bg-white p-10 jaypore-border border-radius"
                         onClick={()=>this.toggle_apply()}
                        >
                            <img src={ApplyCredits} alt="" /><span className="ml-4 r-txt">Apply Credits <span className="float-right brandcolor-txt">
                                <img  className={this.state.isapply?'rot-180 wt-13':'wt-13'} src={DownArrow} alt="" /></span></span></label>
                        <div className="content bg-white">
                            <div className="text-grey m-txt">Enter Credit</div>
                            <div className="d-flex">
                                <div className="col-8 pr-0 pl-0">
                                    <input type="text" className="enterCreditBtn mt-0"
                                    onChange={(e) => this.onChangeInput(e)}
                                    ></input>
                                </div>
                                <div className="col-4 pl-0 pr-0">
                                    <button type="button"  id='login_continue' className="apply-btn-grey sb-txt" style={{ background: '#BABCBF' }}
                                    ref='login_continue'
                                    >Apply</button>
                                </div>
                            </div>
                            <div className="text-grey mt-3">Available Credit Balance: <span className="text-black sb-txt">5000</span></div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default MyBagOptions
