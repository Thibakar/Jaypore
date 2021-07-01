import React, { Component } from "react";
import checkIcon from "../../../assets/01 Icons/03 Listing/Checkbox Empty.svg";
import closeIcon from "../../../assets/icons/close.svg"
import Wishlist from '../../../assets/01 Icons/02 Home Page/Wishlist.svg'
import save from '../../../assets/01 Icons/02 Home Page/Save Collection.svg'
import './css/pintrest.css'
import pintrest from './img/pintrest-logo.png';
import mainImage from './img/mainimage.png';
import pimage1 from './img/image1.png'
import pimage2 from './img/image2.png';
import pimage3 from './img/image3.png';
import pimage4 from './img/image4.png';
import pimage5 from './img/image5.png';
import pimage6 from './img/image6.png';
import pimage7 from './img/image7.png';
import pimage8 from './img/image8.png';
import pimage9 from './img/image9.png';
import pimage10 from './img/image2.png';
import pimage11 from './img/image3.png';
import pimage12 from './img/image5.png';

class PintrestModal extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="collection-modal insta-modal">
          <div className="">
            <div className="row p-card-main-parent">
              <div className="col-12">
              
                <div className="pintrest-button jp-mb-20 jp-mt-20">

                  <div className="rectangle15">
                  </div>
                  <div className="followusonpintres">
                    Follow us on Pintrest
                </div>
                  <img src={pintrest} className="fill4"
                  />
                </div>
                
              </div>
            </div>
            <div className="row  p-card-row">
              <div className="col-5 p-card-main">
              <div className="row p-card-main-parent">
                <div className="p-popup-big-card">
                  <div className="mask">
                  </div>
                  <img src={mainImage} />
                </div>
                </div>
              </div>
              <div className="col-7 p-card-parent">
                <div className="row p-card-row">
                  
                    <div className="p-popup-card-selected ">
                      <div className="mask">
                      </div>
                      <img src={pimage1} />
                    </div>
                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage2} />
                    </div>
                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage3} />
                    </div>
                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage4} />
                    </div>
                  
                  </div>
                  <div className="row p-card-row">
                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage5} />
                    </div>
                  

                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage6} />
                    </div>
                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage7} />
                    </div>
                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage8} />
                    </div>

                  
                  </div>
                  <div className="row p-card-row">

                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage9} />
                    </div>

                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage10} />
                    </div>

                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage11} />
                    </div>

                  
                    <div className="p-popup-card">
                      <div className="mask">
                      </div>
                      <img src={pimage12} />
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

export default PintrestModal;
