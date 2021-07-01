import React, { Component } from "react";
// import "./myOrder.css/MyorderPageOne.css";
// import "./myOrder.css/anuragFinal.css";
import ItemCancelationModel from '../myorder/itemCancelationModel'
import ItemReturnModel from '../myorder/itemReturnModel'
import Search11 from "../../assets/01 Icons/11 My Order/2020-01-30Search.png";
import call11 from "../../assets/01 Icons/07 Order Confirmation/Call.svg";
import email11 from "../../assets/01 Icons/07 Order Confirmation/Email.svg";
import orderplaced from "../../assets/01 Icons/11 My Order/Order Placed.svg";
import readytoship from "../../assets/01 Icons/11 My Order/Ready To Ship.svg";
import shipped from "../../assets/01 Icons/11 My Order/Shipped.svg";
import orderdelivered from "../../assets/01 Icons/11 My Order/Order Delivered.svg";

import returninitiated from "../../assets/01 Icons/11 My Order/Return Initiated.svg";
import oreturnpickedup from "../../assets/01 Icons/11 My Order/Return Picked-up.svg";
import atwarehouse from "../../assets/01 Icons/11 My Order/Received at warehouse.svg";
import returnaccepted from "../../assets/01 Icons/11 My Order/Return Accepted.svg";
import dropdwn from "../../assets/01 Icons/11 My Order/2020-01-30.png";
import OderPlaced from '../../assets/01 Icons/11 My Order/Order Placed.svg'
import ReadToShip from '../../assets/01 Icons/11 My Order/Ready To Ship.svg'
import Shipped from '../../assets/01 Icons/11 My Order/Shipped.svg'
import OrderDelivered from '../../assets/01 Icons/11 My Order/Order Delivered.svg'

import tick from '../../assets/icons/tick.svg'
import cross from '../../assets/icons/cross.svg'
import orderPlaced from '../../assets/icons/order-placed.svg';
import orderDelivered from '../../assets/icons/order-delivered.svg';
import readyToShip from '../../assets/icons/status-ready-to-ship.svg';
//import shipped from '../../assets/icons/shipped.svg';
import returnInitiated from '../../assets/icons/return-initiated.svg';
import returnPickedUp from '../../assets/icons/return-pickedup.svg';
import receivedAtWarehouse from '../../assets/icons/received-at-warehouse.svg';
import returnAccepted from '../../assets/icons/return-accepted.svg';
import { NavUtil } from "../common/navutil";
import Godown from "../../assets/icons/thin-arrowheads-pointing-down.svg"

export class MyorderPageOne extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ship_visible: false,
      visible: false,
      return_visible: false
    }
  }

  toggleVisibleShipped = () => {

    this.setState({
      // visible:false,
      ship_visible: !this.state.ship_visible
    });
  };

  goToItemCancellation = () => {

    this.setState({
      visible: !this.state.visible
    });
  }

  goToMyOrder = () => {
    NavUtil.goToHome()
  }

  goToReturnItem = () => {
    this.setState({
      return_visible: !this.state.return_visible
    });
  }
  render() {


    // let trackOrder =
    //   <div className={this.state.visible?"modal-dialog as_mdl_posisn":"d-none"}>
    //     <div className="modal-content">
    //       <div className="modal-body as_modal">
    //         <div className="row">
    //           <div className="col-sm-8" id="as_product_status">
    //             Product Status
    //  </div>
    //           <div className="col-sm-3">
    //           </div>
    //         </div>
    //         <div className="as_ul_modal">

    //           <ul className="StepProgress progress-indicator as_text_bold">
    //             <li className=" completed"><span className="bubble"></span> <img className="as_icon_svg as_icon_track" src={OderPlaced} alt="placed" />Order Placed</li>
    //             <li className=""><span className="bubble"></span> <img className="as_icon_svg as_icon_track" src={ReadToShip} alt="ready" />Ready To Ship
    //        </li>
    //             <li className=""><span className="bubble"></span> <img className="as_icon_svg as_icon_track" src={Shipped} alt="shipped" />Shipped</li>
    //             <li className=""><span className="bubble"></span> <img className="as_icon_svg as_icon_track" src={OrderDelivered} alt="Delivered" />Order Delivered</li>

    //           </ul>

    //         </div>


    //       </div>
    //     </div>
    //   </div>

    let trackOrderShipped =
      <div className={this.state.ship_visible ? "modal-dialog as_mdl_posisn" : "d-none"}>
        <div className="modal-content model-content-2">
          <div className="modal-body as_modal_2 jp-p-0">
            <div className="">
              <div className="steps steps-modal">
                <div className='m-b-15 text-left jp-c-b2'>Product Status</div>
                <div className="step step-active">
                  <div>
                    <div className="circle"><img className="step-icon" src={tick} alt="tick" /></div>
                  </div>
                  <div>
                    <div className="step-title"><img className="step-titlce-icon" src={orderPlaced} alt="tick" /><span className="step-title-text sb-txt jp-c-b1">Order Placed</span></div>
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
            </div>
          </div>
        </div>
      </div>


    return (

      <div>
        <ItemCancelationModel
          goToItemCancellation={() => this.goToItemCancellation()}
          visible={this.state.visible}
        />
        <ItemReturnModel
          goToReturnItem={() => this.oToReturnItem()}
          return_visible={this.state.return_visible}
        />
        <div className="mo-parent">
          <div>
            <div className="mo-container">
              {/* <!-- header starts  --> */}
              <div className="jp-pt-15">
                <div className="row mo-card-header jp-ml-0 jp-mr-0">
                  <div className="col-sm-6">
                    <div className="mo-header-title">All Orders</div>
                  </div>
                  <div className="col-sm-6">
                    <div id="" className="mo-header-search">
                      {/*         
      <!-- <img className="as_srch" src="static/Icons/01 Login Signup/Search.svg" alt="">  --> */}
                      {/* <input
                        id=""
                        type="text"
                        className="jp-form-control"
                        placeholder="Search orders"
                      /> */}

                      <div className="input-group mb-3">
                        <input type="text" className="form-control jp-form-control jp-form-input-group jp-input-group-icon-left" placeholder="Search orders" />
                        <div className="input-group-append ">
                          <span className="input-group-text jp-btn-solid-primary">Search</span>
                        </div>
                      </div>
                      {/* <img
                        className="as_srch as_srch_icon"
                        src={Search11}
                        alt="search"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--  headers END --> */}
              <div className="mo-card-outer row  jp-ml-0 jp-mr-0">
                <div className="col-sm-12 mo-card-inner">
                  <div className="mo-card-inner2 jp-mb-20">
                    {/* <!-- order deatils starts --> */}

                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="jp-mt-20 jp-ml-10 jp-c-b1">
                            <b> Order Details </b>
                          </div>
                          <div className="jp-mt-10 jp-ml-10">
                            <span className="jp-c-g1">Order Number:</span> <span className="jp-c-b1">JEM80080</span>
                          </div>
                          <div className="jp-mt-5 jp-ml-10 jp-c-g1">Placed on Monday, 22.10.2018</div>

                          <div className="jp-c-b1 jp-mt-5 jp-ml-10 jp-mb-20">
                            Rs. 30,000 / 3 items
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="jp-mt-20 jp-ml-10 jp-c-b1">Ship To: Shahnawaz Alam</div>
                          <div className="jp-c-g1 jp-mt-5 jp-ml-10">
                            Flat - 207, Hill View Appartment, Mehta Chowk, Mehrauli,New Delhi, 121003 India
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- order details Ends -->
      <!-- 1st product info starts --> */}
                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/media/events/307X363/200114KIL030_KIL_Kilmora_Kumaon_Grameen_moodshot.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Beige Burgundy Printed Rayon Crepe
                                Kurta with Churidar
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={orderplaced} alt="ordre placed" />
                              <span className="as_btn_txt_1">Order Placed</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button">
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-outline-primary" onClick={() => this.goToItemCancellation()} >
                              Cancel this Item
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- 2nd product deatils starts --> */}
                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/j/b/jbsapj40013865-2_1.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Yellow Printed Viscose Crepe with Churidar Cotton blend
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={readytoship} alt="ordre placed" />
                              <span className="as_btn_txt_1">Ready To Ship</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button">
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-outline-primary" onClick={() => this.goToItemCancellation()} >
                              Cancel this Item
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- 3rd product detail  --> */}

                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/j/b/jbsapj40013864-2_1.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Black Floral Rayon Crepe Kurta with Churidar and Silk blend
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={shipped} alt="ordre placed" />
                              <span className="as_btn_txt_1">Shipped</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button" onClick={() => { this.toggleVisibleShipped(); }} >
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                          {trackOrderShipped}
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-outline-primary" onClick={() => this.goToReturnItem()} >
                              Return this Item
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- 4rth product detail starts --> */}


                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/c/rcaapj40013549-2.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Brown Beige Geometric Print with Rayon Crepe Kurta
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={orderdelivered} alt="ordre placed" />
                              <span className="as_btn_txt_1">Order Delivered</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button" >
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-outline-primary" onClick={() => this.goToReturnItem()} >
                              Return this Item
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="as_cancel_all_order text-center">
                      <button className="jp-btn jp-btn-outline-secondary">Cancel entire order</button>
                    </div>
                    <div className="godown-div">
                      <img src={Godown} className="as-godown-icon" alt="godown"/>
                    </div>
                  </div>
                  {/* cancel entire order section */}



                  <div className="mo-card-inner2">
                    {/* <!-- order deatils starts --> */}

                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="jp-mt-20 jp-ml-10 jp-c-b1">
                            <b> Order Details </b>
                          </div>
                          <div className="jp-mt-10 jp-ml-10">
                            <span className="jp-c-g1">Order Number:</span> <span className="jp-c-b1">JEM80080</span>
                          </div>
                          <div className="jp-mt-5 jp-ml-10 jp-c-g1">Placed on Monday, 22.10.2018</div>

                          <div className="jp-c-b1 jp-mt-5 jp-ml-10 jp-mb-20">
                            Rs. 30,000 / 3 items
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="jp-mt-20 jp-ml-10 jp-c-b1">Ship To: Shahnawaz Alam</div>
                          <div className="jp-c-g1 jp-mt-5 jp-ml-10">
                            Flat - 207, Hill View Appartment, Mehta Chowk, Mehrauli,New Delhi, 121003 India
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- order details Ends -->
      <!-- 1st product info starts --> */}
                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/c/rcaapj40013548-2.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Red Hand Knitted Wool Poncho Top Winter Wear By Umang
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={orderdelivered} alt="ordre placed" />
                              <span className="as_btn_txt_1">Order Delivered</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button">
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-warning" onClick={() => this.goToItemCancellation()} >
                              This item can no longer be returned
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- 2nd product deatils starts --> */}
                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/m/smnapj40013824-2_1.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Ivory Black Block Printed Ecovero Viscose Crop Top
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={returninitiated} alt="ordre placed" />
                              <span className="as_btn_txt_1">Return Initiated</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button">
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- 3rd product detail  --> */}

                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/i/m/imlhoj80067164-2_1.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Nickel Plated Aluminium Tumble Vase with Hammered Finish
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={oreturnpickedup} alt="ordre placed" />
                              <span className="as_btn_txt_1">Return Picked-Up</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button">
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- 4rth product detail starts --> */}


                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/a/t/atahoj80065814-2_2.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Brown Multicolored Genuine Leather Sling Bag
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={atwarehouse} alt="ordre placed" />
                              <span className="as_btn_txt_1">Received at warehouse</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button">
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/n/a/nacacb40014360-2_3.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                COLOR ME STYLISH Pink Flared Cotton Top
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-primary" >
                              <img className="jp-mr-10" src={returnaccepted} alt="ordre placed" />
                              <span className="as_btn_txt_1">Return Accepted</span>
                            </button>
                          </div>
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-link mo-track-button" >
                              TRACK ORDER
                              <img src={dropdwn} alt="listing-images"></img>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="as_order_detail_div">
                      <div className="row">
                        <div className="col-sm-8">
                          <div className="media">
                            <img
                              className="as_product_img images-fluid rounded jp-m-10"
                              src="https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/n/a/nacacb40014408-1_3.jpg"
                              alt="imagesss-loading"
                            />
                            <div className="media-body jp-mt-10">
                              <div className="jp-c-b1">
                                Brown Multicolored Genuine Leather Sling Bag
                              </div>
                              <div className="jp-c-g1 jp-mt-5">SILKWAVES</div>
                              <div className="jp-mt-5">
                                <span className="jp-c-g1">Size:</span> <span className="jp-c-b1">M</span> <span className="jp-c-g1">Qty:</span>
                                <span className="jp-c-b1"> 1</span>
                              </div>
                              <div className=" jp-mt-5 ">
                                <span className="jp-c-b1">Rs. 1590</span>
                              </div>
                              <div className=" jp-mt-5">
                                <span className="jp-c-g1">SKU :</span> <span className="jp-c-b1">COP89QW00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 text-center jp-mt-10">
                          <div className="float-right jp-mr-15">
                            <button type="button" className="jp-btn jp-btn-danger " >
                              Cancelled
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- +++++++++++++++++++++++++++++++++===================================================================++++++++++++++++++++++++++++++++++++++++++ --> */}
                </div>
              </div>
              {/* <!-- contact and help  --> */}

              <div className="bg-white jp-mt-20 jp-mb-20 jp-border jp-border-radius">
                <div className=" text-center need-help p-t-20 p-b-20">
                  <h3 className="oc-help-title-font">Incase you need any help</h3>
                  <div className="font-12 oc-mt-10 oc-help-subtitle">
                    Our customer experience experts would love you hear and resolve
                    your query in no time.
            </div>
                  <div className="oc-mt-10">
                    {" "}
                    <img src={call11} alt="call-btn" />
                  </div>
                  <div className="font-12 oc-mt-5">Connect via Call</div>
                  <h4 className="oc-mt-5">+91 730 529 7673</h4>
                  <div className="oc-mt-10">
                    <img src={email11} alt="call-btn" />
                  </div>
                  <div className="font-12 oc-mt-5">Connect via Email</div>
                  <h4 className="oc-mt-5">hello@jaypore.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyorderPageOne;
