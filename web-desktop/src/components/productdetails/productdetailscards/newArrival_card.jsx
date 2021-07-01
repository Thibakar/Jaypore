import React, { Component } from 'react';
import "react-multi-carousel/lib/styles.css";
import { Carousel } from 'react-responsive-carousel';
import Wishlist from '../../../assets/01 Icons/02 Home Page/Wishlist.svg'
import save from '../../../assets/01 Icons/02 Home Page/Save Collection.svg'
import { NavUtil } from '../../common/navutil';


class NewArrivalCard extends Component {

  componentDidMount() {
    console.log("okokok", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <NewArrivalView />


      </React.Fragment>
    );
  }
}


export default NewArrivalCard;



function NewArrivalView() {
  return (
    <div className="smallCardsArrowAlignment">
      <Carousel
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop={true}
        className='a-width-full itemCard  new_arrival carousel-slider-Newarrival'
      >
        <div className='a-row a-back-white a-sp-bwt ' >
          <ItemCard h='24.5%' saveFlag={false} />
          <ItemCard h='24.5%' saveFlag={false} />
          <ItemCard h='24.5%' saveFlag={false} />
          <ItemCard h='24.5%' saveFlag={false} />
        </div>
        <div className='a-row a-back-white a-sp-bwt'>
          <ItemCard h='24.5%' saveFlag={false} />
          <ItemCard h='24.5%' saveFlag={false} />
          <ItemCard h='24.5%' saveFlag={false} />
          <ItemCard h='24.5%' saveFlag={false} />

        </div>
      </Carousel>
    </div>
  )
}

function ItemCard(props) {
  let showSave = true;
  if (props.saveFlag !== undefined) {
    showSave = props.saveFlag
  }
  return (
    <div className='a-txt-left s-ml-0 s-mr-0 hm-mb-40 cu-ptr' style={{ width: props.h, }} onClick={NavUtil.goToProductDetails}>
      <div className='a-rel'>
        <img src='https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg'
          width='300px' alt="newcard-images" />
        <img src={Wishlist} className='a-abs'
          style={{ top: 8, bottom: 'auto', left: 'auto', right: 8, width: '30px' }}
          alt="newcard-images"
        />
        <img src={save} className={showSave ? 'a-abs' : 'd-none'}
          style={{ top: 'auto', bottom: 8, left: 'auto', right: 8, width: '14px' }}
          alt="newcard-images"
        />
      </div>
      <div className='a-txt-left'>
        <div className=" a-mt-8 a-14-txt a-mb-0 semiBold font-color-212121 cl-ml-0">THE RIGHT CUT</div>
        <div className="a-14-txt a-mt-0 a-mb-0 font-color-616161 wordSpacing lineHeight-1 a-r-txt hm-subtitle">Olive Bottom Handloom...</div>

        <div className=" a-14-txt a-mt-0 a-mb-0 font-color-212121 semiBold">Rs. 2290</div>

        <div className="a-mt-8 font-14 a-r-txt a-colr-61">XS, S, M, L, XL</div>
      </div>
    </div>
  )
}