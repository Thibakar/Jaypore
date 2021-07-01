import React, { Component } from "react";
import shopLook from "../../assets/01 Icons/01 Login Signup/Bag.svg";
import share from "../../assets/01 Icons/04 PDP/Share.svg";
import email from "../../assets/01 Icons/04 PDP/Email.svg";
import facebook from "../../assets/01 Icons/04 PDP/Facebook.svg";
import twitter from "../../assets/01 Icons/04 PDP/Twitter.svg";
import messenger from "../../assets/01 Icons/04 PDP/Send.svg";
import copylink from "../../assets/01 Icons/04 PDP/Copy.svg";
import rightarrow from "../../assets/images/rightarrow.png";
import ProductRelatedCard from "./productdetailscards/productRelated_card";
import NewArrivalCard from "./productdetailscards/newArrival_card";
import ShopAllCurationsCard from "./productdetailscards/shopAllCurations_card";
import favicon from "../../assets/01 Icons/02 Home Page/Wishlist.svg";
import { Link } from "react-router-dom";
import Completelookcard from "./productdetailscards/completeLook_card";
import Header from "../shared/header/header";
import ProductRelatedCard1 from "./productdetailscards/productRelated_card1";
import ProductRelatedCard2 from "./productdetailscards/productRelated_card2";
import ProductRelatedCard3 from "./productdetailscards/productRelated_card3";
import circularImageIcon from "../../assets/images/percentage_green.svg";
import Footer from "../shared/footer/footer";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [
        {
          // img:
          //   "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/e/t/etkjwj60040804-1_1.jpg",
          // img1:
          //   "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/e/t/etkjwj60040804-2_1.jpg",
          // img2:
          //   "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/e/t/etkjwj60040804-3_1.jpg",
          // img3:
          //   "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/e/t/etkjwj60040804-1_1.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container category-list">
          <div className="product-details  m-b-20">
            <div className="row p-l-30">
              <div className="col-md-6">
                {this.state.productDetails.map(i => (
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        className="product-images  "
                        src="https://cdn-3.jjshouse.com/upimg/jjshouse/o400/fc/5d/5f57ea571deb7eade3d1079fce88fc5d.jpg"
                        alt="producet-detail-imagess"
                      />
                      <img
                        className="product-images  "
                        src="https://cdn-1.jjshouse.com/upimg/jjshouse/o400/5d/ef/882198049c8ed5783509e7ac70ae5def.jpg"
                        alt="producet-detail-imagess"
                      />
                      <img
                        className="product-images  "
                        src="https://cdn-1.jjshouse.com/upimg/jjshouse/o400/5d/ef/882198049c8ed5783509e7ac70ae5def.jpg"
                        alt="producet-detail-imagess"
                      />
                      <img
                        className="product-images  "
                        src="https://cdn-3.jjshouse.com/upimg/jjshouse/o400/fc/5d/5f57ea571deb7eade3d1079fce88fc5d.jpg"
                        alt="pduct-images"
                      />
                    </div>
                    <div className="col-md-8">
                      <img
                        className="product-fav-icon"
                        src={favicon}
                        alt="favicon"
                      />
                      <button className="shop-look" type="button">
                        <img
                          className="p-l-10 "
                          src={shopLook}
                          alt="shopthislook"
                        />
                        Shop this Look
                      </button>
                      <img
                        className="product-view-images"
                        src="https://static.jaypore.com/media/catalog/product/r/a/radapj40014673-4_3.jpg"
                        alt="producet-detail-imagess"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <div className="m-l-30 m-r-30">
                  <ul class="breadcrumb">
                    <li>
                      <a href="#">Home /</a>
                    </li>
                    <li>
                      <a href="#">Clothing /</a>
                    </li>
                    <li>
                      <a href="#">Women /</a>
                    </li>
                    <li>
                      <a href="#">The Ikat Closest Top /</a>
                    </li>
                    <li>
                      <a href="#">All by The Ikat Closest  /</a>
                    </li>
                  </ul>
                  <div className="product-name ">
                    <h4 className="product-name">THE IKAT CLOSET</h4>
                    <h2 className="product-color">
                      Ivory-Grey Handloom Ikat Cotton Top
                    </h2>
                    <h5 className="product-title">A Woven Legacy</h5>
                    <div className="row p-l-15">
                    <h3 className="product-price"><b>Rs. 1990</b></h3>
                    <p className=" p-l-10 product-price-offer">Rs. 1990</p>
                    <span className=" mt-10 offer-label"> 30% OFF</span>
                    </div>
                   
                    <hr className="pdphrttag" />
                  </div>
                  <div className="select-size">
                    <h5>Select Size</h5>
                    <div className="row p-l-15">
                      <button className="size-btn" type="button">
                        S
                      </button>
                      <button className="size-btn" type="button">
                        M
                      </button>
                      <button className="size-btn" type="button">
                        L
                      </button>
                      <button className="size-btn" type="button">
                        XL
                      </button>
                      <a className=" size-link text-blue" href="">
                        SIZE CHART
                      </a>
                    </div>
                    <div className="row p-l-15">
                      <p className="">Size not available ?</p>
                      <span>
                        <Link to="/">
                          <p className="text-blue p-l-10 ">
                            View similar products
                          </p>
                        </Link>
                      </span>
                    </div>
                    <hr className="pdphrttag"/>
                  </div>
                  <div className="color-option ">
                    <h5> Color Option</h5>
                    <div className="row p-l-15 p-b-10">
                      <button
                        className="product-color-btn bg-pink"
                        type="button"
                      />
                      <button
                        className="product-color-btn bg-yellow"
                        type="button"
                      />
                      <button
                        className="product-color-btn bg-red"
                        type="button"
                      />
                      <button
                        className="product-color-btn bg-grey"
                        type="button"
                      />
                    </div>
                    <hr className="pdphrttag"/>
                  </div>
                  <div className="delivery-date">
                    <h5>Check Delivery Date & COD option</h5>
                    <div className=" row m-t-20 m-b-20">
                    <div class="skmkform-group090">
                     <input type="email" class="pdppform-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter PIN Code " />

                       </div>
                      <button className="checknow-btn" type="button">
                        Check Now
                      </button> 

                     
                    </div>
                  </div>
                  <hr className="pdphrttag"/>
                  {/***********************accordion************ */}

                  <div className="p-t-10 p-b-20">
                    <div>
                    <label for="check">Available Promos</label>
                    <img className="right-arrow-accordion" src={rightarrow} alt="right-arrow"/>


                    <input id="check" type="checkbox" />

                    <div class="test" >
                    <h4 className="promocodeklti01"> Promo Code</h4>
                      <div className="row rwpdfg">
                        <div className="col-6">
                        <button class="blok678details">
                            <b className="JAYPORE20">JAYPORE20</b>            
                          <p>Get 10% Off on purchase  above Rs. 1000</p>
                           </button>
                          
                           
                        </div>
                        <div className="col-6">
                        <button class="blok678detailscx">
                            <b className="JAYPORE20"> JAYPORE20</b>            
                          <p style={{fontSize: '14'}}> Get 10% Off on purchase  above Rs. 1000</p>
                           </button>
                     
                        </div>

                      </div>
                      <h4 className="anbankOffers">Bank Offers</h4>
                      <div className="card" id="linewtheight67pdp"style={{ backgroundColor:'rgba(205, 232, 206, 0.38)'}}>
                        <div className="row">
                      <div className="col-1">
                      <img src={circularImageIcon} alt="welcomfile.in" className="welcomesvgpdp"/>

                      </div>
                      <div className="col-11 greenCorpdgparagraph">
                          <h6> <b>RS. 200 off on using ICICI Bank Debit Card</b></h6>
                               <p> * RS. 200 OFF on orders above Rs.1000</p>
                               <hr className="heroicstyle"></hr>
                               <h6><b>Terms & Conditions</b></h6>
                               <p>*Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                               <p>*Lorem ipsum dolar sit amet, consectetur adipiscing elit</p>

                       </div>
                      </div>
                      </div>
                    </div>
                    </div>
                    <div className="m-t-30">
                    <img className="right-arrow-accordion1 arrturn98" src={rightarrow} alt="right-arrow"/>
                    <hr className="pdphrttaghjj"/>
                    <label for="check1">Product details</label>

                    <input id="check1" type="checkbox" />

                    <div class="test"  >
                     

                     





                    </div>
                    </div>
                  </div>

                  {/***************************** */}

                  <div className=" social-icon m-t-20 m-b-20">
                    <div className="row">
                      <img className="p-l-15" src={share} alt="share-icon" />
                      <p className="p-l-10 p-t-10">
                        Share this item with friends
                      </p>
                    </div>

                    <div className="row m-t-20 p-l-15">
                      <div className="col-md-2">
                        <img
                          className="social-icon p-r-30"
                          src={email}
                          alt="emailicon"
                        />
                        <p className="font-12">Email</p>
                      </div>
                      <div className="col-md-2">
                        <img
                          className="social-icon p-r-30"
                          src={facebook}
                          alt="emailicon"
                        />
                        <p className="font-12">Share</p>
                      </div>
                      <div className="col-md-2">
                        <img
                          className="social-icon p-r-30"
                          src={twitter}
                          alt="emailicon"
                        />
                        <p className="font-12">Tweet</p>
                      </div>
                      <div className="col-md-2">
                        <img
                          className="social-icon p-r-30"
                          src={messenger}
                          alt="emailicon"
                        />
                        <p className="font-12">Send</p>
                      </div>
                      <div className="col-md-2">
                        <img
                          className="social-icon p-r30"
                          src={copylink}
                          alt="emailicon"
                        />
                        <p className="font-12">Copy Link</p>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                    <hr className="pdphrttag"/>
                  </div>
                  <div className=" complete-look m-t-20 m-b-20">
                    <p className="text-bold"> Complete The Look</p>
                    <div className="m-t-50">
                      <Completelookcard />
                    </div>

                    {/* <hr className=""/> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="You-might-also-like m-t-30 m-b-30">
              <h2 className="text-center">YOU MIGHT ALSO LIKE</h2>
              <div class="related-card">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                    <ProductRelatedCard />
                    </div>
                    <div className="col-md-2">
                  <ProductRelatedCard1/>
                  </div>
                  <div className="col-md-4">
                    <ProductRelatedCard2/>
                  </div>
                 <div className="col-md-3">
                 <ProductRelatedCard3/>
                 </div>
                  </div>
                  

                  <div>
                    <button type="button" className="load-more-btn">
                      load more products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" division m-t-10 bg-pink"></div>

        {/*********** New Arrivals******************** */}
        <div className=" new-arrival">
          <h4 className=" m-t-50 text-center">NEW ARRIVALS</h4>
          <div className="container">
            <div>
            <NewArrivalCard/>
            </div>
          </div>
        </div>

        <div className=" division m-t-10 bg-pink"></div>

        {/**************************most popular*************************** */}

        <div className=" most-arrival">
          <h4 className=" m-t-50 text-center">MOST POPULAR</h4>
          <div className=" container m-t-30 ">
         <NewArrivalCard/>
          </div>
        </div>

        <div className=" division m-t-10 bg-pink"></div>

        {/**************************Shop All Curations*************************** */}

        <div className=" most-arrival">
          <h4 className=" m-t-50 text-center">SHOP ALL CURATION</h4>
          <div className=" container m-t-30 ">
            <ShopAllCurationsCard />
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
