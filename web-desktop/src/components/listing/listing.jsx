import React, { Component } from "react";
// import { Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ListingHeader from "./listingHeader/listingHeader";
import CategoryListingCard from "./listingCards/categoryListingCard";
import CategoryListCarouselCard from "./listingCards/categoryListCarouselCard";
import arrow from "../../assets/01 Icons/02 Home Page/Forward.svg";
import checkIcon from "../../assets/01 Icons/03 Listing/Checkbox Empty.svg";
import filtericon from "../../assets/01 Icons/03 Listing/Filter.svg";
import BrandModal from "./listingHeader/brandModal";
import Header from "../shared/header/header";
import dropright from "../../assets/images/rightarrow.png"
import CategoryListingCard2 from "./listingCards/categoryListingCard2";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

class Listing extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: ""
    };
  }

  submit = () => {
    console.log("this :::")
    NavUtil.goToLoginPassword()
  };





  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
        </div>

        <div className="bg-light-pink">
          <div className=" m-b-20  ">
            <div className=" p-t-25  p-b-25  p-l-r-15 ">
              <div className="container bg-darkpink">
                <div className="offer-container ">
                  <div className="text-center">
                    <h3 className=" offer-title1 text-white">
                      Fitting Finishing Touches
                    </h3>
                    <h2 className=" offer-title2 text-white">
                      Buy 2, Get Flat 20% OFF
                    </h2>
                    <p className=" offer-content text-orange">
                      Splurge on statement making Jewellery, bold brocade bags and
                      daintily embellished footwear for sparkly evenings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-t-24">
            <ListingHeader />
          </div>

          <div className="m-t-20">
            <div className="container">
              <Carousel
                // showIndicators={true}
                // showThumbs={true}
                // showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
              >
                <div>
                  <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/27012020_Bestseller_Bestselling_slider.jpg" alt="banner-images" />
                </div>
                <div>
                  <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200114IHA006_IHA_NewDitsy_6_MTO_Slider.jpg" alt="banner-images" />
                </div>
                <div>
                  <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/220120RIT012_Label_Ritu_Kumar_MTO_SliderUU.jpg" alt="banner-images" />
                </div>
                <div>
                  <img src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200121CUR100_Festive_Dupatta_slider.jpg" alt="banner-images" />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="container m-t-75">
            <div className="row">
              <div className="col-md-3 p-filter">
                <section class="accordion bg-pink ">

                  <input type="checkbox" name="collapse1" id="handle1" />
                  <h2 class="handle ">
                    <label className="bg-pink" for="handle1">

                      <p className="p-l-25 filter-top">   <img className="category-filter-icon_1"
                        src={filtericon}
                        alt="filter-icon"
                      />Refine Results</p>
                    </label>
                  </h2>
                  <div class="content bg-white p-b-10">
                    <div className="">
                      <section class="accordion bg-pink  ">
                        <input type="checkbox" name="collapse2" id="handle2" />
                        <h2 class="handle ">
                          <label className="bg-pink" for="handle2">
                            <p className="filter-head">SIZE<span className="minus">-</span></p>
                          </label>
                        </h2>
                        <div class="content bg-white">
                          <div className="row filter-container">
                            {" "}
                            <img
                              className="listing-check"
                              src={checkIcon}
                              alt="checkbox"
                            />{" "}
                            <p className="p-t-18">
                              L <span className="text-grey">(1136)</span>
                            </p>
                          </div>

                          <div className="row filter-container">
                            {" "}
                            <img
                              className="listing-check"
                              src={checkIcon}
                              alt="checkbox"
                            />{" "}
                            <p className="p-t-18">
                              M <span className="text-grey">(521)</span>
                            </p>
                          </div>
                          <div className="row filter-container">
                            {" "}
                            <img
                              className="listing-check"
                              src={checkIcon}
                              alt="checkbox"
                            />{" "}
                            <p className="p-t-18">
                              S <span className="text-grey">(430)</span>
                            </p>
                          </div>

                          <div className="row filter-container ">
                            {" "}
                            <img
                              className="listing-check"
                              src={checkIcon}
                              alt="checkbox"
                            />{" "}
                            <p className="p-t-18">
                              XL <span className="text-grey">(376)</span>
                            </p>
                          </div>
                          <div className="row filter-container">
                            {" "}
                            <img
                              className="listing-check"
                              src={checkIcon}
                              alt="checkbox"
                            />{" "}
                            <p className="p-t-18">
                              XS <span className="text-grey">(216)</span>
                            </p>
                          </div>
                          <div className="row filter-container">
                            {" "}
                            <img
                              className="listing-check"
                              src={checkIcon}
                              alt="checkbox"
                            />{" "}
                            <p className="p-t-18">
                              XXL <span className="text-grey">(191)</span>
                            </p>
                          </div>

                        </div>
                      </section>
                    </div>
                    <div>
                      <section class="accordion bg-pink m-t-50 border-radius">
                        <input type="checkbox" name="collapse3" id="handle3" />
                        <h2 class="handle ">
                          <label className="bg-pink" for="handle3">
                            <p className="filter-head">COLOR <span className="minus">-</span></p>
                          </label>
                        </h2>

                        <div class="content bg-white">
                          <div className="p-t-30">
                            <button
                              className="color-btn bg-white"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-grey"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-blue"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-black"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-violet"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-green"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-red"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-whitesmoke"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-purple"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-black"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-yellow"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-pink"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-black"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-yellow"
                              type="button"
                            ></button>
                            <button
                              className="color-btn bg-pink"
                              type="button"
                            ></button>
                          </div>
                        </div>
                      </section>
                    </div>
                    <section class="accordion bg-pink m-t-50 border-radius">
                      <input type="checkbox" name="collapse4" id="handle4" />
                      <h2 class="handle ">
                        <label className="bg-pink" for="handle4">
                          <p className="filter-head">CATEGORY <span className="minus">-</span></p>
                        </label>
                      </h2>
                      <div class="content bg-white">
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Woven Sarees <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Printed Sarees<span className="text-grey">(532)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Embroidered Sarees<span className="text-grey">(191)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Sarees<span className="text-grey">(160)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Special Sarees <span className="text-grey">(99)</span>
                          </p>
                        </div>


                      </div>
                    </section>
                    <section class="accordion bg-pink  m-t-50 border-radius">
                      <input type="checkbox" name="collapse5" id="handle5" />
                      <h2 class="handle ">
                        <label className="bg-pink" for="handle5">
                          <p className="filter-head">BRANDS <span className="minus">-</span></p>
                        </label>
                      </h2>
                      <div class="content bg-white">
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Aavaran<span className="text-grey">(22)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Abraham and Thakore <span className="text-grey">(11)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Addoz <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Adelmo by Divya Kedia  <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Abraham and Thakore<span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Addoz <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Addoz <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Adelmo by Divya Kedia  <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Abraham and Thakore<span className="text-grey">(430)</span>
                          </p>
                        </div>

                        <div className="row filter-container">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Addoz <span className="text-grey">(430)</span>
                          </p>
                        </div>
                        <div className="row filter-container padding-link">
                          {" "}

                          <a
                            className="text-blue text-center"
                            href="#open-modal"
                          >
                            +100 more brands
                          </a>


                        </div>

                        {/*********************************modal**********************************************/}

                        <div id="open-modal" class="modal-window">
                          {/* <div>
    <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
    <h1>CSS Modal</h1>
    <div>The quick brown fox jumped over the lazy dog.</div>
  </div> */}
                          <BrandModal />
                        </div>
                        {/****************************************** */}
                      </div>
                    </section>
                    <section class="accordion bg-pink m-t-50 p-b-30 border-radius">
                      <input type="checkbox" name="collapse6" id="handle6" />
                      <h2 class="handle ">
                        <label className="bg-pink" for="handle6">
                          <p className="filter-head">SHIPPING <span className="minus">-</span></p>
                        </label>
                      </h2>
                      <div class="content bg-white ">
                        <div className="row filter-container ">
                          {" "}
                          <img
                            className="listing-check"
                            src={checkIcon}
                            alt="checkbox"
                          />{" "}
                          <p className="p-t-18">
                            Aavaran<span className="text-grey">(22)</span>
                          </p>
                        </div>
                      </div>

                    </section>
                  </div>
                </section>
              </div>
              <div className="col-md-9">
                <div >
                  <CategoryListingCard onClickItem={() => this.submit()} />
                </div>
                {/***************************************Fashion stylist********************* */}
                <div className="bg-pink margin fashonStylePadding">
                  <h3 className="m-l-20  p-t-20   text-red a-18-txt">
                    Today's Pick By Our Fashion Stylist
                  </h3>
                  <div className="m-l-12 m-b-20 m-t-24">
                    <CategoryListCarouselCard />
                  </div>
                </div>

                {/* <div>
                  <CategoryListingCard />
                </div> */}
                {/************************fashion lover*************************** */}

                <div className=" bg-white m-t-10  margin">
                  <div className=" p-l-30 p-r-30 p-t-6 p-b-20">
                    <div class="row">
                      <div class="coll1">
                        <h2 className="text-red">
                          {" "}
                          Fashion Lovers like you are buying these Dresses right
                          now.
                        </h2>
                        <p>
                          We have hand picked all the Sarees which has been in
                          demand from last 2 days
                        </p>
                        <a className="browse" href="">
                          {" "}
                          Browse Them Now
                          <img className="drop-right" src={dropright} alt="dropright" />
                        </a>
                      </div>
                      <div class="coll2">
                        <div className="fashion-lover-container">
                          <img
                            className="fashion-lover-img"
                            src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                            alt="fashion-lover"
                          />
                          <img
                            className="fashion-lover-img"
                            src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                            alt="fashion-lover"
                          />
                          <img
                            className="fashion-lover-img"
                            src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                            alt="fashion-lover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="m-t-20">
                    <CategoryListingCard2 />
                  </div>
                </div>

                {/***************************best selling dresses********************** */}

                <div className="bg-pink  margin ">
                  <h3 className="m-l-20  p-t-20   text-red">
                    Best Selling Dresses
                  </h3>
                  <div className="m-l-12 m-b-20 m-t-24">
                    <CategoryListCarouselCard />
                  </div>
                </div>
                <div className="m-t-10">
                  <CategoryListingCard2 />
                </div>
                {/************************ new arriavals***************************************** */}

                <div className="bg-pink margin ">
                  <h3 className="m-l-20  p-t-20   text-red">
                    New Arrivals
                  </h3>
                  <div className="m-l-12 m-b-20 m-t-24">
                    <CategoryListCarouselCard />
                  </div>
                </div>
                <div className="m-t-10">
                  <CategoryListingCard2 />
                </div>
                {/**********************fast seling out***********************************************************/}

                <div className="bg-pink  margin ">
                  <h3 className="m-l-20  p-t-20   text-red">
                    Fast Selling Out
                  </h3>
                  <div className="m-l-12 m-b-20 m-t-24">
                    <CategoryListCarouselCard />
                  </div>
                </div>
                {/*******************collouge images card******************** */}
                <div>
                  <div class="m-t-9 m-b-30 margin margin-top-30">
                    <div class="row">
                      <div class="column-coluge1  ">
                        <div className="bg-pink p-b-50 coleuge-margin1">
                          <div className=" colegue-padding">
                            <div className="card-division bg-white">
                              <img
                                className="colegue-card-img"
                                src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                                alt="colegue-imagess"
                              />
                            </div>
                          </div>
                          <div className="text-center m-t-24">
                            <h4 className="colegue-text-padding text-jaypore-clr">
                              These Dresses are too good to be ready to ship
                            </h4>

                            <div>
                              <a className="browse" href="">
                                {" "}
                          Browse Them Now
                          <img className="drop-right" src={dropright} alt="dropright" />
                              </a>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="column-coluge2 ">
                        <div className="bg-pink p-b-50 coleuge-margin2 ">
                          <div className="  colegue-padding ">
                            <div className="card-division bg-white">
                              <img
                                className="colegue-card-img"
                                src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                                alt="colegue-images"
                              />
                            </div>
                          </div>
                          <div className="text-center m-t-24 ">
                            <h4 className="colegue-text-padding text-jaypore-clr">
                              Here are some curation for Dress lovers.You might
                              just love them{" "}
                            </h4>

                            <div>
                              <a className="browse" href="">
                                {" "}
                          Browse Them Now
                          <img className="drop-right" src={dropright} alt="dropright" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ***********************again categorylist****************** */}

                <div className="m-t-19">
                  <CategoryListingCard2 />
                </div>
                {/**********************load button************************* */}
                <div>
                  <button className="load-more-btn" type="button">
                    {" "}
                    Load more products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Listing;
