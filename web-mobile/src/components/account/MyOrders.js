import React, { Component } from 'react'
import "../../assets/css/myOrders.css";
import close from '../../assets/Jaypore Assets/01 Icons/03 Listing/close.svg'
import SearchBlackLogo from '../switch_currency/switch_currency_Icon/Search_black.svg'
import YellowImage from './images/yellow.png';
import tick from './my-order-icons/tick.svg'
import cross from './my-order-icons/cross.svg'
import orderPlaced from './my-order-icons/order-placed.svg';
import orderDelivered from './my-order-icons/order-delivered.svg';
import readyToShip from './my-order-icons/ready-to-ship.svg';
import shipped from './my-order-icons/shipped.svg';
import returnInitiated from './my-order-icons/return-initiated.svg';
import returnPickedUp from './my-order-icons/return-pickedup.svg';
import receivedAtWarehouse from './my-order-icons/received-at-warehouse.svg';
import returnAccepted from './my-order-icons/return-accepted.svg';
import { Link } from 'react-router-dom'
import Footer from '../common/footer/footer'

export class MyOrders extends Component {

    goToMyOrder = () => {
        this.props.history.push("");
    }

    goToItemCancellation = () => {
        this.props.history.push("/myAccount/itemCancellation");
    }

    goToReturnItem = () => {
        this.props.history.push("/myAccount/returnItem");
    }

    render() {
        return (

            <div className='container-div back-color-pink'>
                <div className='myorders-header row-div-start white-back-color p-13 '>
                    <img alt="" src={close} width='24px' height='24px' className='a-icon-padding'
                        onClick={() => this.props.history.goBack()}
                    />
                    <div className='MyAccount-header m-txt font-16'>My Orders</div>
                    <div className='header-needHelp sb-txt font-12'>Need Help?</div>
                </div>
                <div className="input-group search-currency-box-div search-group margin-top-60">
                    <div className="form-group has-search">
                        <img src={SearchBlackLogo} alt="" className='search-logo-prepend form-control-feedback'></img>
                        {/* <span className="fa fa-search form-control-feedback"></span> */}
                        <input type="text" className="form-control search-input" placeholder="Search" />
                    </div>
                    <div className="input-group-append">
                        <span className="input-group-text searchButton m-txt font-14" style={{ borderColor: '#b9432c', padding: 0, paddingLeft: '12px' }}>
                            Search
                        </span>
                    </div>
                </div>
                <div className='allOrder '>
                    <div className='a-mb-0 m-txt font-16 grey-color'>All Orders</div>
                    <div className='orderDetailCard' style={{ marginTop: 3 }}>
                        <div className='orderDetailsBlock'>
                            <div className='a-mb-0 sb-txt font-16' >Order Details</div>
                            <div>
                                <div className="margin-top-bottom-5"><span className="order-detail-label">Order Number:</span> <span className="m-txt">JEM0080</span></div>
                                <div className="order-detail-label margin-top-bottom-5">Placed on Monday, 22.10.2018</div>
                                <div className="margin-top-bottom-5">Rs 30,000 / 3 items</div>
                            </div>
                            <div>
                                <div className="margin-top-10-bottom-5 m-txt">Ship To: Shahnawaz Alam</div>
                                <div className="margin-top-bottom-5 order-address">Flat - 207, Hill View Apartment, Mehta</div>
                                <div className="margin-top-bottom-5 order-address">chowk, Mehrauli, New Delhi, 121003 India</div>
                            </div>
                        </div>
                        <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <div className="mt-0 product-title-text m-txt">Yellow Block - printed cotton Crop Top</div>
                                <div className="product-category-text margin-top-bottom-5 sb-txt font-12 grey-color">Silkwaves</div>
                                <div className="margin-top-bottom-5 a-txt-14"><span className="product-desc-label grey-color">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1590</div>
                                <div className="margin-top-bottom-5 m-txt"><span className="product-desc-label grey-color">SKU:</span> SLWAPJ20006929</div>
                            </div>
                        </div>
                        <div className="steps">
                            <div className='m-b-15 m-txt'>Product Status</div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderPlaced} alt="tick" /><span className="step-title-text sb-txt">Order Placed</span></div>
                                </div>
                            </div>
                            <div className="step ">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={readyToShip} alt="tick" /><span className="step-title-text">Ready To Ship</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={shipped} alt="tick" /><span className="step-title-text">Shipped</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderDelivered} alt="tick" /><span className="step-title-text">Order Delivered</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            <input type="button" onClick={this.goToItemCancellation} className="form-control cancel-button a-txt-15" placeholder="Search" value="Cancel this item"/>
                        </div>
                        <div className='save-borader' style={{}}></div>
                        {/* <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div> */}
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Corner Copper Planter with Lacquer Coating</h5>
                                <div className="product-category-text margin-top-bottom-5">COPPRE</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1500</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> COPHOJ80056266</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderPlaced} alt="tick" /><span className="step-title-text">Order Placed</span></div>
                                </div>
                            </div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={readyToShip} alt="tick" /><span className="step-title-text">Ready To Ship</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={shipped} alt="tick" /><span className="step-title-text">Shipped</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderDelivered} alt="tick" /><span className="step-title-text">Order Delivered</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                        <input type="button" onClick={this.goToItemCancellation} className="form-control cancel-button a-txt-15" placeholder="Search" value="Cancel this item"/>
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Corner Copper Planter with Lacquer Coating</h5>
                                <div className="product-category-text margin-top-bottom-5">Silkwaves</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1590</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> SLWAPJ020006929</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderPlaced} alt="tick" /><span className="step-title-text">Order Placed</span></div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={readyToShip} alt="tick" /><span className="step-title-text">Ready To Ship</span></div>
                                </div>
                            </div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={shipped} alt="tick" /><span className="step-title-text">Shipped</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Shipped Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Shipment</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle "></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderDelivered} alt="tick" /><span className="step-title-text">Order Delivered</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                        <input type="button" onClick={this.goToReturnItem} className="form-control cancel-button a-txt-15" placeholder="Search" value="Return this item"/>
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Yellow Ombre Cotton Shrug with Gathers</h5>
                                <div className="product-category-text margin-top-bottom-5">Anan</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 795</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> SLWAPJ020006926</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderPlaced} alt="tick" /><span className="step-title-text">Order Placed</span></div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={readyToShip} alt="tick" /><span className="step-title-text">Ready To Ship</span></div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={shipped} alt="tick" /><span className="step-title-text">Shipped</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Shipped Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Shipment</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderDelivered} alt="tick" /><span className="step-title-text">Order Delivered</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                        <input type="button" onClick={this.goToReturnItem} className="form-control cancel-button a-txt-15" placeholder="Search" value="Return this item"/>
                        </div>
                    </div>
                    <div className='orderDetailCard' style={{ marginTop: 15 }}>
                        <div className='orderDetailsBlock'>
                            <h4 className='a-mb-0'><b>Order Details</b></h4>
                            <div>
                                <div className="margin-top-bottom-5"><span className="order-detail-label">Order Number:</span> <b className="">JEM0080</b></div>
                                <div className="order-detail-label margin-top-bottom-5">Placed on Monday, 22.10.2018</div>
                                <div className="margin-top-bottom-5">Rs 30,000 / 3 items</div>
                            </div>
                            <div>
                                <div className="margin-top-10-bottom-5"><b>Ship To: Shahnawaz Alam</b></div>
                                <div className="margin-top-bottom-5 order-address">Flat - 207, Hill View Apartment, Mehta</div>
                                <div className="margin-top-bottom-5 order-address">chowk, Mehrauli, New Delhi, 121003 India</div>
                            </div>
                        </div>
                        <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Yellow Block - printed cotton Crop Top</h5>
                                <div className="product-category-text margin-top-bottom-5">Silkwaves</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1590</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> SLWAPJ20006929</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderPlaced} alt="tick" /><span className="step-title-text">Order Placed</span></div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={readyToShip} alt="tick" /><span className="step-title-text">Ready To Ship</span></div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={shipped} alt="tick" /><span className="step-title-text">Shipped</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Shipped Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Shipment</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={orderDelivered} alt="tick" /><span className="step-title-text">Order Delivered</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            <input type="button" className="form-control no-return-button el-txt" value="This item can no longer be returned" />
                        </div>
                        <div className='save-borader' style={{}}></div>
                        {/* <div className='save-borader' style={{ marginTop: 14, marginLeft: -16, marginRight: -16 }}></div> */}
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Corner Copper Planter with Lacquer Coating</h5>
                                <div className="product-category-text margin-top-bottom-5">Adaa</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 3500</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> COPHOJ80056266</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnInitiated} alt="tick" /><span className="step-title-text">Return Initiated</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnPickedUp} alt="tick" /><span className="step-title-text">Return Picked-Up</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={receivedAtWarehouse} alt="tick" /><span className="step-title-text">Received at warehouse</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnAccepted} alt="tick" /><span className="step-title-text">Return Accepted</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            {/* <input type="button" className="form-control cancel-button" placeholder="Search" value="Return this item"/> */}
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Confluence Crystals from Swarovski Amrapali Baroque...</h5>
                                <div className="product-category-text margin-top-bottom-5">Confluence</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 4990</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> SLWAPJ020006929</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnInitiated} alt="tick" /><span className="step-title-text">Return Initiated</span></div>
                                </div>
                            </div>
                            <div className="step  step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnPickedUp} alt="tick" /><span className="step-title-text">Return Picked-Up</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Picked-up Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Pick-up</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={receivedAtWarehouse} alt="tick" /><span className="step-title-text">Received at warehouse</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnAccepted} alt="tick" /><span className="step-title-text">Return Accepted</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            {/* <input type="button" className="form-control cancel-button" placeholder="Search" value="Return this item"/> */}
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Peach-Blue Khari-printed Cotton Kurta with Pockets</h5>
                                <div className="product-category-text margin-top-bottom-5">Anan</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1095</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> COPHOJ80056266</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnInitiated} alt="tick" /><span className="step-title-text">Return Initiated</span></div>
                                </div>
                            </div>
                            <div className="step  step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnPickedUp} alt="tick" /><span className="step-title-text">Return Picked-Up</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Picked-up Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Pick-up</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={receivedAtWarehouse} alt="tick" /><span className="step-title-text">Received at warehouse</span></div>
                                </div>
                            </div>
                            <div className="step">
                                <div>
                                    <div className="circle"></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnAccepted} alt="tick" /><span className="step-title-text">Return Accepted</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            {/* <input type="button" className="form-control cancel-button" placeholder="Search" value="Return this item"/> */}
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Peach-Blue Khari-printed Cotton Kurta with Pockets</h5>
                                <div className="product-category-text margin-top-bottom-5">Anan</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1095</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> COPHOJ80056266</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnInitiated} alt="tick" /><span className="step-title-text">Return Initiated</span></div>
                                </div>
                            </div>
                            <div className="step  step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnPickedUp} alt="tick" /><span className="step-title-text">Return Picked-Up</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Picked-up Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Pick-up</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={receivedAtWarehouse} alt="tick" /><span className="step-title-text">Received at warehouse</span></div>
                                </div>
                            </div>
                            <div className="step step-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnAccepted} alt="tick" /><span className="step-title-text">Return Accepted</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            {/* <input type="button" className="form-control cancel-button" placeholder="Search" value="Return this item"/> */}
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Peach-Blue Khari-printed Cotton Kurta with Pockets</h5>
                                <div className="product-category-text margin-top-bottom-5">Anan</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1095</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> COPHOJ80056266</div>
                            </div>
                        </div>
                        <div className="steps">
                            <h4 className='m-b-15'><b>Product Status</b></h4>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnInitiated} alt="tick" /><span className="step-title-text">Return Initiated</span></div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnPickedUp} alt="tick" /><span className="step-title-text">Return Picked-Up</span></div>
                                    <div className="step-content margin-top-10">
                                        <div className="font-13"><span className="product-desc-label">Picked-up Via:</span><span> <b>DHL</b></span></div>
                                        <div className="font-13"><span className="product-desc-label">Tracking Number:</span><span> <b>12345</b></span></div>
                                        <div className="font-13 margin-top-10"><Link to="#" className="track-shipment-link">Track Pick-up</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="step step-active next-active">
                                <div>
                                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={receivedAtWarehouse} alt="tick" /><span className="step-title-text">Received at warehouse</span></div>
                                </div>
                            </div>
                            <div className="step step-error">
                                <div>
                                    <div className="circle"><img className="step-icon" src={cross} alt="tick" /></div>
                                </div>
                                <div>
                                    <div className="step-title"><img className="step-titlce-icon" src={returnAccepted} alt="tick" /><span className="step-title-text">Return Accepted</span></div>
                                    <div className="step-content margin-top-10 ">
                                        <div className="font-13"><span className="product-desc-label">Need further assitance?</span></div>
                                        <div className="font-13  margin-top-10"><Link to="#" className="track-shipment-link">Click Here for help?</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cancelBlock">
                            {/* <input type="button" className="form-control cancelled-button" placeholder="Search" value="Cancelled"/> */}
                        </div>
                        <div className='save-borader' ></div>
                        <div className="media">
                            <img className="orderImage" src={YellowImage} alt="Genericplaceholderimage" />
                            <div className="media-body orderInfo">
                                <h5 className="mt-0 product-title-text m-txt">Yellow Block - printed cotton Crop Top</h5>
                                <div className="product-category-text margin-top-bottom-5">Silkwaves</div>
                                <div className="font-12 margin-top-bottom-5 a-txt-14"><span className="product-desc-label ">Size:</span><span> M</span><span className="product-desc-label padding-left-3">Qty:</span><span> 1</span></div>
                                <div className="margin-top-bottom-5 m-txt">Rs. 1590</div>
                                <div className="font-12 margin-top-bottom-5"><span className="product-desc-label">SKU:</span> SLWAPJ20006929</div>
                            </div>
                        </div>
                        <div className="cancelledBlock">
                            <input type="button" className="form-control cancelled-button" placeholder="Search" value="Cancelled" />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MyOrders
