import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../shared/header/header";
import CategorySpecialCard1 from "./listingcards/category_special_card1";
import CategorySpecialCard2 from "./listingcards/category_special_card2";
import Footer from "../shared/footer/footer";
import Filter from "../listing/filter"
import SpecialHeader from "./listingheader/special_header";
import { BaseComponent } from "../common/BaseComponent";
import { NavUtil } from "../common/navutil";

class CategoryListingSpecial extends BaseComponent {
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
         <SpecialHeader />
        </div>
        <div className="bg-light-pink">
          <div className="container m-t-75 cl-pl-20">
            <div className="row">
              <div className="col-md-3 p-filter">
              <Filter/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 cl-col-md-6">
                    <CategorySpecialCard1  onClickItem={() => this.goProductDetails()}/>
                    <CategorySpecialCard2  onClickItem={() => this.goProductDetails()} />
                    <CategorySpecialCard1  onClickItem={() => this.goProductDetails()}/>
                  </div>
                  <div className="col-md-6 cl-col-md-6">
                    <CategorySpecialCard2  onClickItem={() => this.goProductDetails()} />
                    <CategorySpecialCard1  onClickItem={() => this.goProductDetails()}/>
                    <CategorySpecialCard2  onClickItem={() => this.goProductDetails()} />
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

export default CategoryListingSpecial;
