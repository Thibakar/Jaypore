import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wishlist from '../../assets/01 Icons/02 Home Page/Wishlist.svg'
import { NavUtil } from '../common/navutil';

export class SimilarProductCarousel extends Component {
  render() {
    return (
      <div style={{ padding: -4 }} className='half-container a-mt-8'>
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
          className="itemCard"
          id="smallCarousel"
        >
          <div className="a-back-white">
            <div className="a-row a-sp-bwt a-back-white">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
          <div className="a-back-white">
            <div className="a-row a-sp-bwt a-back-white">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default SimilarProductCarousel


function ProductItem(props) {
  return (
    <div className='similarProductPdp a-txt-left' onClick={NavUtil.goToProductDetails}>
      <div className='a-rel'>
        <img src='https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/a/saiapj40015013-1_1.jpg' />
        <img className='a-abs' src={Wishlist} style={{ top: 8, left: 'auto', right: 8, width: 20 }} />
      </div>
      <div className='a-mt-4 a-colr-21 font-12 a-sb-txt p-0'>JAYPORE</div>
      <div className='a-mt-4 a-colr-42 font-12 a-r-txt p-0 ele-short'>Grey Elasticated waist Cotton Palazzo</div>
      <div className='a-mt-4 a-colr-21 font-12 a-sb-txt p-0'>Rs. 1690</div>
      <button className='addbag-btn' onClick={(event) => {
        event.stopPropagation();
        NavUtil.goToMyBag()
      }}>
        Add to bag
            </button>
    </div>
  )
}