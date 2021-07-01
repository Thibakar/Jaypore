import React, { Component } from "react";
import closeIcon from "../../../assets/icons/close.svg"

import './css/pintrest.css'
import '../../../assets/css/instagram.css'

import instalogo1 from './img/insta-background.png'
import instalogo2 from './img/insta-icon1.png'
import instalogo3 from './img/insta-icon2.png'
import instalogo4 from './img/insta-icon3.png'

import instaMainImage from './img/instamainimage.png';

import instaselectedimage3 from './img/instaselectedimage.png'

import instasmall1 from './img/instaimage1.png';
import instasmall2 from './img/instaimage2.png';
import instasmall3 from './img/instaimage3.png'
import instasmall4 from './img/instaimage4.png'
import instasmall5 from './img/instaimage5.png'
import instasmall6 from './img/instaimage5.png'
import instasmall7 from './img/instaimage7.png'
import instasmall8 from './img/instaimage8.png'

import imageIcon from '../../../assets/icons/insta-icon1.svg'
import videoIcon from '../../../assets/icons/insta-icon2.svg'

class InstagramModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="collection-modal insta-modal">
          <div className="">
            <div className="row p-card-main-parent">
              <div className="col-12">
                <div className="instagram-button jp-mb-20 jp-mt-20">
                  <img src={instalogo1} className="rectangle15" />
                  <div className="followusoninstagr">
                    Follow us on Instagram
                    </div>
                  <div className="instagram">
                    <img src={instalogo2} className="shape2" />
                    <img src={instalogo3} className="shape11" />
                    <img src={instalogo4} className="oval" />
                  </div>
                </div>

              </div>
            </div>
            <div className="row  p-card-row">
              <div className="col-5 p-card-main">
                <div className="row p-card-main-parent">
                  <div className="insta-big-card">
                    <div className="mask">
                    </div>
                    <img src={instaMainImage} className="insta-card-image" />
                  </div>
                </div>
              </div>
              <div className="col-7 p-card-parent insta-left-50">
                <div className="row p-card-row">
                  <div className="insta-selected-card">
                    <div className="mask">
                    </div>
                    <img src={instaselectedimage3} className="insta-card-image" />
                  </div>

                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall1} className="insta-card-image" />
                  </div>

                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall2} className="insta-card-image" />
                  </div>



                </div>

                <div className="row p-card-row">
                  <div className="insta-small-card">
                    <img src={videoIcon} className="insta-video" />
                    <div className="mask">
                    </div>
                    <img src={instasmall3} className="insta-card-image" />
                  </div>
                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall4} className="insta-card-image" />
                  </div>
                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall5} className="insta-card-image" />
                  </div>



                </div>

                <div className="row p-card-row">
                  <div className="insta-selected-card">
                    <div className="mask">
                    </div>
                    <img src={instaselectedimage3} className="insta-card-image" />
                  </div>

                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall1} className="insta-card-image" />
                  </div>

                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall2} className="insta-card-image" />
                  </div>



                </div>

                <div className="row p-card-row ">
                  <div className="insta-small-card">
                    <img src={videoIcon} className="insta-video" />
                    <div className="mask">
                    </div>
                    <img src={instasmall7} className="insta-card-image" />
                  </div>
                  <div className="insta-small-card">
                    <div className="mask">
                    </div>
                    <img src={instasmall6} className="insta-card-image" />
                  </div>
                  <div className="insta-small-card ">
                    <img src={imageIcon} className="insta-image" />
                    <div className="mask">
                    </div>
                    <img src={instasmall8} className="insta-card-image" />
                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#modal-close" title="Close" className="modal-close collection-modal-close">
          <img src={closeIcon} alt="brandcheck" />
        </a>
      </React.Fragment>
    );
  }
}

export default InstagramModal;
