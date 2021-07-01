import React from "react";
import "../../assets/css/listing.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ListingHeader from "./listingheader/listing_header";
import CategoryListingCard from "./listingcards/categoryListing_card";
import CategoryListCarouselCard from "./listingcards/categoryList_carouselCard";
import Header from "../shared/header/header";
import dropright from "../../assets/images/rightarrow.png";
import clCardImgLeft from "../../assets/images/cl-card-img-left.svg";
import clCardImgRight from "../../assets/images/cl-card-img-right.svg";
import clCardSpl from "../../assets/images/cl-spl-card-image.svg";
import CategoryListingCard2 from "./listingcards/categoryListing_card2";
import Footer from "../shared/footer/footer";
import Filter from "../listing/filter"
import "../../assets/css/filter.css";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

class CategoryListing extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      categoryCarouselImages: [
        {
          imgUrl: "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/27012020_Bestseller_Bestselling_slider.jpg"
        },
        {
          imgUrl: "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200114IHA006_IHA_NewDitsy_6_MTO_Slider.jpg"
        },
        {
          imgUrl: "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/220120RIT012_Label_Ritu_Kumar_MTO_SliderUU.jpg"
        },
        {
          imgUrl: "https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200121CUR100_Festive_Dupatta_slider.jpg"
        },
      ]
    };
  }
  goProductDetails = () => {
    NavUtil.goToProductDetails()
  };
  render() {
    return (
      <React.Fragment>
        <div className="bg-light-pink">
          <div>
            <Header props={this.props} />
          </div>
          <div className="">
            <ListingHeader fourClass={true} />
          </div>
          {/*********offer-container**************/}
          <div className="container p-t-20 p-b-10">
            <div className=" offer-container  ">
              <div className="  text-center bg-darkpink p-t-30 p-b-30">
                <h3 className="   offer-title1 text-white">
                  Fitting Finishing Touches
                </h3>
                <h2 className=" offer-title2 text-white">
                  Buy 2, Get Flat 20% OFF
                </h2>
                <p className="text-darkred offer-content">
                  Splurge on statement making Jewellery, bold brocade bags and
                  daintily embellished footwear for sparkly evenings
                </p>
              </div>
            </div>
          </div>


          <div className="container">
            {/**************************************************/}
            <div className="m-t-10">
              <Carousel
                showIndicators={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
              >
                {this.state.categoryCarouselImages.map(i => (
                  <div>
                    <img src={i.imgUrl} className="banner-images" />
                  </div>
                ))}

              </Carousel>
            </div>

            <div className=" ">
              <div className="row m-t-10">
                <div className="col-md-3 ">
                  <Filter />
                </div>
                <div className="col-md-9">
                  <div>
                    <CategoryListingCard
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>
                  {/***************************************Fashion stylist********************* */}
                  <div className="">
                    <div className="bg-pink margin fashonStylePadding cl-special-corousel-div cl-ml--15">
                      <h3 className="m-l-10 text-red a-18-txt text-color-bb4225 medium">
                        Today's Pick By Our Fashion Stylist
                    </h3>
                      <div className="m-l-12 m-b-20">
                        <div>
                          <CategoryListCarouselCard
                            onClickItem={() => this.goProductDetails()}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/************************fashion lover*************************** */}

                  <div className=" bg-white m-t-10  margin cl-ml--15">
                    <div className=" p-l-30 p-r-30 p-t-6 p-b-20">
                      <div className="row">
                        <div className="coll1">
                          <h2 className="cl-spl-title-color">
                            {" "}
                            Fashion Lovers like you are buying these Dresses
                            right now.
                          </h2>
                          <p className="txt-jp-black">
                            We have hand picked all the Sarees which has been in
                            demand from last 2 days
                          </p>
                          <a className="browse" href="">
                            {" "}
                            Browse Them Now
                            <img
                              className="drop-right"
                              src={dropright}
                              alt="dropright"
                            />
                          </a>
                        </div>
                        <div className="coll2">
                          <div className="fashion-lover-container">
                            <img
                              className="fashion-lover-img"
                              src={clCardSpl}
                              alt="fashion-lover"
                            />
                            {/* <img
                              className="fashion-lover-img"
                              src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                              alt="fashion-lover"
                            />
                            <img
                              className="fashion-lover-img"
                              src="https://static.jaypore.com/media/events/307X363/200107LAD017_LAD_LADAKH_SHAWLS_moodshot.jpg"
                              alt="fashion-lover"
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="m-t-20 ">
                      <CategoryListingCard2
                        onClickItem={() => this.goProductDetails()}
                      />
                    </div>
                  </div>

                  {/***************************best selling dresses********************** */}

                  {/* <div className="bg-pink  margin Best Selling Dresses">
                  <h3 className="m-l-20  p-t-20   text-red">
                    Best Selling Dresses
                  </h3>
                  <div className="m-l-12 m-b-20">
                    <CategoryListCarouselCard />
                  </div>
                </div>
                <div className="m-t-10">
                  <CategoryListingCard2 />
                </div> */}

                  <div className="bg-pink margin fashonStylePadding cl-special-corousel-div cl-ml--15">
                    <h3 className="m-l-10 text-red font-16 text-color-bb4225 medium">

                      Best Selling Dresses
                    </h3>
                    <div className="m-l-12 m-b-20">
                      <div>
                        <CategoryListCarouselCard />
                      </div>
                    </div>
                  </div>

                  <div className="m-t-20 ">
                    <CategoryListingCard2
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>

                  <div className="bg-pink margin fashonStylePadding cl-special-corousel-div cl-ml--15">
                    <h3 className="m-l-10 text-red font-16 text-color-bb4225 medium">
                      New Arrivals
                    </h3>
                    <div className="m-l-12 m-b-20">
                      <div>
                        <CategoryListCarouselCard />
                      </div>
                    </div>
                  </div>

                  <div className="m-t-20 ">
                    <CategoryListingCard2
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>
                  <div className="bg-pink margin fashonStylePadding cl-special-corousel-div cl-ml--15">
                    <h3 className="m-l-10 text-red a-18-txt text-color-bb4225 medium">
                      Fast Selling Out
                    </h3>
                    <div className="m-l-12 m-b-20">
                      <div>
                        <CategoryListCarouselCard />
                      </div>
                    </div>
                  </div>

                  {/*******************collouge images card******************** */}
                  <div>
                    <div className="m-t-9 m-b-30 margin m-t-10 cl-ml--15">
                      <div className="row">
                        <div className="column-coluge1  ribbon-position-relative">
                          <div className="bg-pink p-b-50 coleuge-margin1 padding-bottom-50">
                            <div className=" colegue-padding">
                              <div className="card-division">
                                <img
                                  className="colegue-card-img colegue-card-img-2 "
                                  src={clCardImgLeft}
                                  alt="colegue-imagess"
                                />
                              </div>
                            </div>
                            <div className="text-center m-t-24">
                              <h4 className="colegue-text-padding text-jaypore-clr a-18-txt">
                                These Dresses are too good to be ready to ship
                              </h4>

                              <div>
                                <a className="browse a-14-txt" href="">
                                  {" "}
                                  Browse Them Now
                                  <img
                                    className="drop-right img-v-align"
                                    src={dropright}
                                    alt="dropright"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                          <span class="greenRibbon semiBold">READY TO SHIP</span>
                        </div>

                        <div className="column-coluge2  ribbon-position-relative">
                          <div className="bg-pink p-b-50 coleuge-margin1">
                            <div className=" colegue-padding">
                              <div className="card-division">
                                <img
                                  className="colegue-card-img colegue-card-img-2"
                                  src={clCardImgRight}
                                  alt="colegue-imagess"
                                />
                              </div>
                            </div>
                            <div className="text-center m-t-24">
                              <h4 className="colegue-text-padding text-jaypore-clr a-18-txt">
                                Here are some curation for Dress lovers. You
                                might just love them.
                              </h4>

                              <div>
                                <a className="browse a-14-txt" href="">
                                  {" "}
                                  Browse Them Now
                                  <img
                                    className="drop-right img-v-align"
                                    src={dropright}
                                    alt="dropright"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        <span class="redRibbon semiBold">CURATIONS</span>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ***********************again categorylist****************** */}

                  <div className="m-t-19">
                    <CategoryListingCard2
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>
                  {/**********************load button************************* */}
                  <div className="cl-ml--15 m-t-b-20-45">
                    <button
                      className="load-more-btn a-14-txt medium"
                      type="button"
                    >
                      {" "}
                      Load more products 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryListing;
