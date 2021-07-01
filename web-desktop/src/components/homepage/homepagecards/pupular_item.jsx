import React, { Component } from 'react';
import arrow from "../../../assets/01 Icons/01 Login Signup/Dropdown Arrow.svg";
import popularImage from '../../../assets/images/popular-image.jpg'
import popularCatIcon from '../../../assets/icons/popular-cat-icon.svg'
import { NavUtil } from '../../common/navutil';

export default class PopularItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    let items = []

    this.state.data.categories.map((item, index) => {
      items.push(
        <button className={index===(this.state.data.categories.length-1)?"hm-width-full a-row a-back-white a-p-10 a-sp-bwt hm-cat-list-item ":"hm-width-full a-row a-back-white a-p-10 a-sp-bwt hm-cat-list-item hm-border"} 
        key={index} onClick={NavUtil.goToCategoryListing}>
          <h5 className="a-14-txt medium " style={{ marginTop: 10, marginBottom: 10 }} >{item}</h5>
          <img  src={popularCatIcon} className="hm-cat-right-icon m-t-10" alt="home-images" />
        </button>
      )
    })

    return (
      <div className="a-back-white a-width-24 borderRadiusBottom d-in-blk">
        <div className="a-rel" style={{ width: "100%", height: 128 }}>
          <img
            className="borderRadiusTop"
            src={popularImage}
            width="100%"
            height="100%"
            alt="home-images"
          />
          <div className="a-abs a-banner-event-content popularCat_imageBlock a-banner-event-contentPopularCat">
            <h5 className="a-color-white a-16-txt semiBold a-mb-0 a-mtop-0 cl-ml-0">
              {this.state.data.title}
            </h5>
            <span className="a-color-white a-12-txt a-mtop-0 regular lineHeight-1">
              {this.state.data.subtitle}
            </span>
          </div>
        </div>
        {items}
        <div>

        </div>
      </div>

    );
  }
}
