import React, { Component } from 'react'
import ApplyCoupon from '../../assets/Jaypore Assets/01 Icons/04 PDP/apply_coupon_icon.svg'
import BlueDownArrow from '../../assets/PDP/down_arrow_blue.svg'
class PdpAvailablePromos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            promosHeading: "Promo Codes",
            bankofferHeading: "Bank Offer",
            emiOptionsHeading: "EMI Options Available",
            toggleavail:false

        }
    }

    toggleavailpromo=()=>{
        console.log(this.state.toggleavail)
        this.setState({
            toggleavail:!this.state.toggleavail
        })
    }

    render() {
        return (
            <div >
                <section className="accordion" >
                    <input type="checkbox" name="collapse2" id="AvailablePromos" />
                    <label className="text-blue bg-white font-size-14 p-0 mt-24 m-txt font-16"
                    onClick={()=>this.toggleavailpromo()}
                        htmlFor="AvailablePromos">Available Promos 
                        <img src={BlueDownArrow} alt="" className={this.state.toggleavail?"ml-2":'ml-2 rot-180'} /></label>
                    <div className="content change-bg-pdp pl-0">
                        <div className='p-16'>
                        <h3 className="mb-16"><strong>{this.state.promosHeading}</strong></h3>

                        <div className="main">
                            <div className="wrapper">
                                <div className="image-container">
                                <div className="promosSection">
                                        <p className="mt-0 mb-0 font-16 text-white"><strong>JAYPORE20</strong></p>
                                        <p className="mt-0 font-size-12 text-white text-center">Get 10% Off on purchase above Rs. 1000</p>
                                    </div>
                                    <div className="promosSection">
                                        <p className="mt-0 mb-0 font-16 text-white"><strong>JAYPORE20</strong></p>
                                        <p className="mt-0 font-size-12 text-white text-center">Get 10% Off on purchase above Rs. 1000</p>
                                    </div>
                                    <div className="promosSection">
                                        <p className="mt-0 mb-0 font-16 text-white"><strong>JAYPORE20</strong></p>
                                        <p className="mt-0 font-size-12 text-white text-center">Get 10% Off on purchase above Rs. 1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="mt-16 mb-16"><strong>{this.state.bankofferHeading}</strong></h3>
                        <div className="row ml-1  pt-3 bankOfferSection">
                            <div className="col-1 pl-0">
                                <img src={ApplyCoupon} alt="" className="" />
                            </div>
                            <div className="col-11 promo-bank">
                                <div className='sb-txt font-14'>Rs. 200 off on using ICICI Bank Debit Card</div>
                                <div className='font-12'>* Rs. 200 OFF on orders above Rs.1000</div>
                                <div className='dotted-green-line'></div>
                                <div className='font-12'>* Lorem Ipsum dolor sit amet, consectetur adipiscing elit</div>
                                <div className='font-12'>* Lorem Ipsum dolor sit amet, consectetur</div>

                            </div>
                        </div>

                        <div className="mt-24 mb-16 font-16 sb-txt">{this.state.emiOptionsHeading} 
                        <span className="text-blue float-right mr-4 font-12">VIEW PLAN</span></div>
                        <div className='font-12 colr-61'>EMI starts from Rs. 499</div>
                    </div>
                    </div>
                </section>
                {/* <h3 className="text-blue">Available Promos V</h3> */}
            </div>
        )
    }
}

export default PdpAvailablePromos
