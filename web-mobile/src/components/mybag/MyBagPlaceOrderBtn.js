import React from 'react'
import { Link } from 'react-router-dom'


function MyBagPlaceOrderBtn() {
    return (
        <div>
            <div className="col-12">
                <div className="row mt-4">
                    <div className="col-5 text-center">
                        <div className="text-grey m-txt font-12">Total Amount</div>
                        <div className='sb-txt'>Rs.9288</div>
                    </div>
                    <div className="col-7">
                        <Link to={{ pathname: '/shipingPayment', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                            <button className='place-Order-btn m-txt font-16'>
                                Place Order
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBagPlaceOrderBtn
