import React, { Component } from 'react';
import Wishlist from "../../../assets/01 Icons/02 Home Page/Wishlist.svg";
import save from "../../../assets/01 Icons/02 Home Page/Save Collection.svg";
import wishlist_added from '../../../assets/01 Icons/04 PDP/wishlist_added.svg'
import { NavUtil } from '../../common/navutil';

export default class ItemCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inWishist: false
    };
  }

  onWishlist = () => {
    this.setState({
      inWishist: !this.state.inWishist
    })
  }
  

  render() {

    const onClickProductImg=()=>{
      NavUtil.goToProductDetails()
    }

    return (
      <div className="a-txt-left s-ml-0 s-mr-0 cu-ptr" style={{ width: '100%' }}    >
        <div className="a-rel curation_smallthumb"  >
          <img src='https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg'
            width="200px" alt="home-images" onClick={()=>onClickProductImg()}  style={{"pointer-events": "all"}} />
          <button className="a-abs cu-ptr a-wishlist-btn"
            onClick={() => this.onWishlist()}
          >
            <img src={this.state.inWishist ? wishlist_added:Wishlist } alt="home-images"
              style={{
                width: 24
              }}
            />
          </button>
        </div>
        <div onClick={NavUtil.goToProductDetails}>
          <h5 className="a-mt-8 a-14-txt a-mb-0 semiBold font-color-212121 cl-ml-0">
            THE RIGHT CUT
          </h5>
          <p className="a-14-txt a-mt-0 a-mb-0 font-color-616161 wordSpacing lineHeight-1 a-r-txt hm-subtitle">
            Olive Buttom-down Handloom...
          </p>
          <h5 className=" a-14-txt a-mt-0 a-mb-0 font-color-212121 semiBold">
            Rs. 2290
          </h5>
        </div>
      </div>
    );
  }
}

