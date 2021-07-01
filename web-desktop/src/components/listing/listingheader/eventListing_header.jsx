import React, { Component } from "react";
import { Link } from "react-router-dom";
import flag from "../../../assets/01 Icons/05 My Bag/Saved.svg"
import savecollection from "../../../assets/icons/cl-header-bookmark.svg";

class EventListingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrice:false,
    }
  }


  togglePrice=()=>{
    this.setState({
      showPrice:!this.state.showPrice
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="topNavMain cl-shadow cl-nav">
          <div className="innerTopNav">
            <div className="container">
              <div className="menuCategoriesColumn cl-ml-0">
                <ul>
                  <div>
                    <h5 className="category-listing-header-title">An Earthy Chic Setting <span><li className="cl-bullet"></li><span className="p-t-5 p-l-10">Studio B40<li className="cl-bullet"></li><span>Sep 02-21</span></span><img className="vertical-align-middle el-icon-right cl-height-20" src={savecollection} alt="save" /></span></h5>
                    <span className="category-listing-header-subtitle">
                      Block-printed and embroidered, woven dhurrie cushion covers to refresh your spaces
                </span>
                  </div>
                </ul>
              </div>
              <div className="menuProfileColumn p-t-10">
                <ul>
                  <li>
                    <span className="font-size-14">Show</span>
                    <Link to="/CategoryListing">
                      <button className="m-l-10  link-btn  header-btn-selected" type="button">
                        4
                  </button>
                    </Link>
                    <Link to="/categoryListing2">
                      <button className="m-l-10 bg-white link-btn1  header-btn" type="button">
                        3
                  </button>
                    </Link>
                  </li>
                  <li>
                  <a href="#" className='a-rel'>
                    <div className="m-l-10 bg-white dropdown-btn select-middle cl-header-dropdown d-in-blk"
                    style={{width:138}} onClick={()=>this.togglePrice()}
                    > 
                      Price Range
                      </div>
                      <div className={this.state.showPrice?'price-range':'d-none'}>
                      <input type="range" id="price" name="price" min="0" max="1000" className='price-range-filter'/>
                      <div className='a-14-txt a-r-txt a-colr-21 a-txt-left a-mt-16 '>Rs. 696 - Rs. 20750</div>
                      <button className='apply-price a-14-txt'>Apply</button>
                      </div>
                  
                    </a>
                  </li>
                  <li>
                    <select className=" bg-white dropdown-btn  cl-header-dropdown">
                      <option value="">Relevance</option>
                      <option value="new">Newest First</option>
                      <option value="old">Oldest First</option>
                      <option value="priceLow">Price (Low to High)</option>
                      <option value="priceHigh">Price (High to Low)</option>
                      <option value="discountHigh">Discount (High to Low)</option>
                      <option value="discountLow">Discount (Low to High)</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventListingHeader;
