import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ListingHeader from "./listingheader/listing_header";
import CategoryListCarouselCard from "./listingcards/categoryList_carouselCard";
import checkIcon from "../../assets/01 Icons/03 Listing/Checkbox Empty.svg";
import filtericon from "../../assets/01 Icons/03 Listing/Filter.svg";
import BrandModal from "./listingheader/brand_modal";
import Header from "../shared/header/header";
import dropright from "../../assets/images/rightarrow.png";
import CategoryListingCard3 from "./listingcards/categoryListing_card3";
import Footer from "../shared/footer/footer";
import Filter from "../listing/filter"
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

export default class categoryListing2 extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: ""
    };
  }
  goProductDetails = () => {
    NavUtil.goToProductDetails()
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Header props={this.props} />
        </div>
        <div className="">
          <ListingHeader threeClass={true} />
        </div>
        <div className="bg-light-pink">
          <div className="m-b-10"></div>

          <div className="container m-t-75">
            <div className="row">
              <div className="col-md-3">
                <Filter />

              </div>
              <div className="col-md-9">
                <div>
                  <CategoryListingCard3
                    onClickItem1={() => this.goProductDetails()}
                  />
                </div>
                {/***************************************Fashion stylist********************* */}
                <div className=" bg-pink fashonStylePadding">
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

                {/* <div>
                      <CategoryListingCard />
                    </div> */}
                {/************************fashion lover*************************** */}


                <div>
                  <div className="m-t-20 margin-left--7">
                    <CategoryListingCard3
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>
                </div>

                {/***************************best selling dresses********************** */}



                <div className="bg-pink margin fashonStylePadding">
                  <h3 className="m-l-10 text-red a-18-txt text-color-bb4225 medium">
                    Best Selling Dresses
                  </h3>
                  <div className="m-l-12 m-b-20">
                    <div>
                      <CategoryListCarouselCard />
                    </div>
                  </div>
                </div>

                <div className="m-t-20 margin-left--7">
                  <CategoryListingCard3
                    onClickItem={() => this.goProductDetails()}
                  />
                </div>
                {/************************ new arriavals***************************************** */}



                <div className="m-t-20 margin-left--7">
                  <CategoryListingCard3
                    onClickItem={() => this.goProductDetails()}
                  />
                </div>

                {/**********************fast seling out***********************************************************/}



                <div className="bg-pink margin fashonStylePadding">
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

                {/* ***********************again categorylist****************** */}

                <div className="m-t-19 margin-left--7 m-t-10">
                  <CategoryListingCard3
                    onClickItem={() => this.goProductDetails()}
                  />
                </div>
                {/**********************load button************************* */}
                <div className="p-b-10">
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
        <div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
