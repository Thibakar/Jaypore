import React, { Component } from 'react'
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'
import Empty from '../../assets/01 Icons/11 My Order/Empty.svg'
import { BaseComponent } from '../common/BaseComponent'

export class MyorderEmptyCart extends BaseComponent {
    render() {
        return (
            <div>
                <Header props={this.props} />

                <div id="as_body_empt">
                    <div className="container as_cont_empt">
                        <div id="as_header_empt">
                            <div className="row">
                                <div className="col-sm-5">
                                    <p id="as_header_text_empt">
                                        All Orders

                    </p>
                                </div>
                                <div className="col-sm-5">

                                </div>
                            </div>
                        </div>
                        <div id="as_empty">
                            <div className="as_empty_svg">
                                <img src={Empty} />
                            </div>
                            <div className="as_ff">
                                <p>
                                    Uh oh! It's Empty
                </p>
                            </div>
                            <div className="as_text_2">
                                <p>
                                    You have not placed any orders
                </p>
                            </div>
                            <div className="as_start_shop">
                                <button className="btn btn-outline as_cancel_order_empt as_cancled">Start Shopping</button>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default MyorderEmptyCart
