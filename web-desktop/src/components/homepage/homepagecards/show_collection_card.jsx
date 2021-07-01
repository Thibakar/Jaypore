import React, { Component } from 'react';
import Show from "../../../assets/01 Icons/02 Home Page/Show Collection.svg";
import save from "../../../assets/01 Icons/02 Home Page/Save Collection.svg";
import CollectionModal from './collection_modal';
import { NavUtil } from '../../common/navutil';

export default class ShowCollectionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="a-rel mostRecentCard cu-ptr" onClick={NavUtil.goToCategoryListing}>
        <img className="mostRecentImages" src='https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj10000438-1_3.jpg' width="100%" height="100%" alt="home-images" />
        <a onClick={(event) => {
          console.log("this")
          event.stopPropagation() }} href="#collections"><img src={Show} className="a-abs showIcon" style={{ top: 12, right: 12 }} alt="home-images" /></a>
        <div id="collections" className="modal-window">
          <CollectionModal />
        </div>
        <div className="a-abs a-banner-event-content a-p-16">
          <div style={{ float: "left", width: "80%" }}>
            <h5 className="a-color-white a-24-txt a-mt-0 a-mb-0  curation_productTitle">Khadi Crush</h5>
            <h5 className="a-color-white a-12-txt a-mt-0 a-mb-0 lineHeight-1 curation_text">
              Hand-dyed khadi separates to take from work to wine
              </h5>
          </div>
          <div className="saveIconBlock">
            <img src={save} className="saveIconSize" alt="home-images" />
          </div>
        </div>
      </div>
    );
  }
}

