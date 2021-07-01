import React, { Component } from 'react'

class MyBagPriceDetails extends Component {
    render() {
        return (
            <div>
                <h4 className="text-grey mt-30 m-txt mb-2">Price Details</h4>
                <div className="card mb-24 br-d">
                    <div className="row mt-20">
                        <div className="col-6">
                            <div className="text-grey">Sub-Total</div>
                        </div>
                        <div className="col-6">
                            <div className="float-right sb-txt">Rs. 9288</div>
                        </div>
                    </div>
                    <hr className="border-bottem-dotted" />
                    <div className="row mt-3 mb-2">
                        <div className="col-6">
                            <div className="text-grey">Coupon Discount</div>
                        </div>
                        <div className="col-6">
                            <div className="float-right text-blue sb-txt font-12"><strong>APPLY COUPON</strong></div>
                        </div>
                    </div>
                    <hr className="border-bottem-dotted" />


                    <div className="row mt-3 mb-2">
                        <div className="col-6">
                            <div className="text-grey">Shipping Charges</div>
                        </div>
                        <div className="col-6">
                            <div className="float-right text-green sb-txt font-12"><strong>FREE</strong></div>
                        </div>
                    </div>
                    <hr className="border-bottem-dotted" />

                    <div className="row mt-3 mb-16">
                        <div className="col-6">
                            <div className="text-grey">Payable Amount</div>
                        </div>
                        <div className="col-6">
                            <div className="float-right font-size-18 sb-txt"><strong>Rs. 9288</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBagPriceDetails
