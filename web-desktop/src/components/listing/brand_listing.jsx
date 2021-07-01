import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryListingCard from "./listingcards/categoryListing_card";
import Header from "../shared/header/header";
import CategoryListingCard2 from "./listingcards/categoryListing_card2";
import Footer from "../shared/footer/footer";
import Filter from "../listing/filter"
import BrandListingHeader from "./listingheader/brandListing_header";
import "../../assets/css/listing.css";
import "../../assets/css/filter.css";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

class BrandListing extends BaseComponent {
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
        <div className="bg-light-pink">
          <div>
            <Header />
          </div>

          <div>
            {/* <ListingHeader /> */}
            <BrandListingHeader />
          </div>

          <div className="container cl-pl-10">
            {/**************************************************/}
            <div className="m-t-10">
              <div>
                <img
                  className="width-100"
                  src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/27012020_Bestseller_Bestselling_slider.jpg"
                  alt="banner-images"
                />
              </div>
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
                  <div className="m-t-10 cl-ml--15">
                    <div>
                      <img
                        className="width-100"
                        src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/27012020_Bestseller_Bestselling_slider.jpg"
                        alt="banner-images"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="m-t-20 ">
                      <CategoryListingCard2
                        onClickItem={() => this.goProductDetails()}
                      />
                    </div>
                  </div>

                  <div className="m-t-10 cl-ml--15">
                    <div>
                      <img
                        className="width-100"
                        src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/27012020_Bestseller_Bestselling_slider.jpg"
                        alt="banner-images"
                      />
                    </div>
                  </div>

                  {/* ***********************again categorylist****************** */}

                  <div className="m-t-10">
                    <CategoryListingCard
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>
                  {/**********************load button************************* */}
                  {/* <div className="p-b-10 cl-ml--15">
                    <button
                      className="load-more-btn a-14-txt medium"
                      type="button"
                    >
                      {" "}
                      Load more products
                    </button>
                  </div> */}
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

export default BrandListing;
