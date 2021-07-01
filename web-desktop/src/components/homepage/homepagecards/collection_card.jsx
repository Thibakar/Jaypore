import React, { Component } from 'react';
import save from "../../../assets/01 Icons/02 Home Page/Save Collection.svg";
import ItemView from './item_view'
import { NavUtil } from '../../common/navutil';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};


export default class CollectionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: 'Stately Silver',
        description: 'Necklaces with bold gemstone beads and silver pendants',
        imgUrl: 'https://www.jaypore.com/media/events/171118RJJ051_RJJ_Jewels_India_banner.jpg',

      }
    };
  }
  render() {
    return (
      <div >
        <div className="a-rel cu-ptr" style={{ width: "100%", height: 'auto' }} onClick={NavUtil.goToCategoryListing}>
          <img
            src={this.state.data.imgUrl}
            width="100%"
            height="100%"
            alt="home-images"
          />
          <div className="a-abs a-banner-event-content a-p-16 a-txt-left">
            <h5 className="a-color-white a-24-txt a-mt-0 a-mb-0 curation_productTitle">
              {this.state.data.title}
            </h5>
            <div className="a-row a-sp-bwt a-mt-8">
              <h5 className="a-color-white a-14-txt a-mt-0 a-mb-0 curation_productdisc">
                {this.state.data.description}
              </h5>
              <img src={save} alt="home-images" />
            </div>
          </div>
        </div>
        <ItemView />
      </div>
    );
  }
}
