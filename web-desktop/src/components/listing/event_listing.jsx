import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryListingCard from "./listingcards/categoryListing_card";

import Header from "../shared/header/header";
import CategoryListingCard2 from "./listingcards/categoryListing_card2";
import Footer from "../shared/footer/footer";
import NewArrivalCard from "../productdetails/productdetailscards/newArrival_card";
import ShopAllCurationsCard from "../productdetails/productdetailscards/shopAllCurations_card";
import EventListingHeader from "./listingheader/eventListing_header";
import Filter from "./filter";
import "../../assets/css/filter.css";
import "../../assets/css/listing.css";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";


class EventListing extends BaseComponent {
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
            <Header props={this.props} />
          </div>

          <div className="">
          
            <EventListingHeader />
          </div>

          <div className="container cl-pl-10">
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
                  <div>
                    <CategoryListingCard2
                      onClickItem={() => this.goProductDetails()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className=" new-arrival event-listing-special-card">
              <div className="container">
                <h5 className=" m-t-20 ">New Arrivals in Apparels</h5>
                <div>
                  <NewArrivalCard />
                </div>
              </div>
            </div>


            {/**************************most popular*************************** */}

            <div className=" most-arrival event-listing-special-card">

              <div className=" container m-t-30 ">
                <h5 className=" m-t-20 ">New Arrivals in Jewelry</h5>
                <NewArrivalCard />
              </div>
            </div>


            {/**************************Shop All Curations*************************** */}

            <div className=" most-arrival event-listing-special-card cl-mb-0">
              <div className=" container m-t-30 ">
                <h5 className=" m-t-20 ">Shop More Events</h5>
                <ShopAllCurationsCard />
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

export default EventListing;
