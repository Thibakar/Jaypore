import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import ItemCard from "../homepagecards/item_card";
import { NavUtil } from '../../common/navutil';


export default class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemdata: [
        {
          item_url: 'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/m/smoapjj10000656-2_2.jpg',
          item_name: 'The Right cut',
          item_price: '2999',
          item_des: 'Olive Button-down Handloom'
        }, 
        {
          item_url: 'https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg',
          item_name: 'The Right cut',
          item_price: '2999',
          item_des: 'Olive Button-down Handloom'
        }, {
          item_url: 'https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg',
          item_name: 'The Right cut',
          item_price: '2999',
          item_des: 'Olive Button-down Handloom'
        }, {
          item_url: 'https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg',
          item_name: 'The Right cut',
          item_price: '2999',
          item_des: 'Olive Button-down Handloom'
        }, {
          item_url: 'https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg',
          item_name: 'The Right cut',
          item_price: '2999',
          item_des: 'Olive Button-down Handloom'
        }, {
          item_url: 'https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg',
          item_name: 'The Right cut',
          item_price: '2999',
          item_des: 'Olive Button-down Handloom'
        }
      ]
    };
  }
  render() {
    return (
      <div style={{ padding: -4 }} className='half-container a-mt-8 smallCardsArrowAlignment'>
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
          className="itemCard curation_carousal"
          id="smallCarousel"
        >
          <div className="a-back-white">
            <div className="a-row a-sp-bwt a-back-white">
              <div><ItemCard /></div>
              <div className="curation_smallthumbmid">
                <ItemCard />
              </div>
              <div><ItemCard /></div>
            </div>
          </div>
          <div className="a-back-white">
            <div className="a-row a-sp-bwt a-back-white">
              <div><ItemCard /></div>
              <div className="curation_smallthumbmid">
                <ItemCard />
              </div>
              <div><ItemCard /></div>
            </div>
          </div>
        </Carousel>
        <div className="margin-top-24 margin-bottom-48">
          <button className="a-view-btn a-radius a-m-txt" onClick={NavUtil.goToCategoryListing}>
          View All
          </button>
        </div>
      </div>
    );
  }
}