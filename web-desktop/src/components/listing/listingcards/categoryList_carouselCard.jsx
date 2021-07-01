import React, { Component } from "react";

import "react-multi-carousel/lib/styles.css";
import { Carousel } from 'react-responsive-carousel';
import Wishlist from '../../../assets/01 Icons/02 Home Page/Wishlist.svg'
import save from '../../../assets/01 Icons/02 Home Page/Save Collection.svg'
import { NavUtil } from '../../common/navutil';



class CategoryListCarouselCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [
        {
          imgurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwnsdecShxDajwLfvcoRIYfL_7ajxpmq0YaR9hGYKXusOoPs6o",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-500,h-662/media/catalog/product/e/k/ekyapsamcnajp70-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/h/shvsaj000070638-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },

      ]
    };
  }

  render() {
  
    return (
      <React.Fragment>
        <NewArrivalView />
      </React.Fragment>
    );
  }
}

export default CategoryListCarouselCard;


function NewArrivalView() {
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      infiniteLoop={false}
      className='a-width-full itemCard cl-cor'
    >
      <div className=' a-sp-bwt cl-back-corousel' onClick={()=>this.props.onClickItem()}>
        <ItemCard h='24%' saveFlag={false} />
        {/* <ItemCard h='24%' saveFlag={false} />
        <ItemCard h='24%' saveFlag={false} />
        <ItemCard h='24%' saveFlag={false} /> */}
      </div>
      <div className=' cl-back-corousel a-sp-bwt'>
        <ItemCard h='24%' saveFlag={false} />
        {/* <ItemCard h='24%' saveFlag={false} />
        <ItemCard h='24%' saveFlag={false} />
        <ItemCard h='24%' saveFlag={false} /> */}
      </div>
    </Carousel>
  )
}



export class ItemCard extends Component {
  constructor(props)
  {
    super(props);
    this.state={
    fashionStylist:[
      {
        imgUrl:"https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/a/bansaj500389543-2_2.jpg",
        name:"THE RIGHT CLUB",
        color:"Olive Buttom-down Handloom...",
        price:"Rs. 2290",
      },
      {
        imgUrl:"https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/t/rtlsaj50041469-2_4.jpg",
        name:"THE RIGHT CLUB",
        color:"Olive Buttom-down Handloom...",
        price:"Rs. 2290",
      },
      {
        imgUrl:"https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/t/rtlsaj50041484-2_4.jpg",
        name:"THE RIGHT CLUB",
        color:"Olive Buttom-down Handloom...",
        price:"Rs. 2290",
      },
      {
        imgUrl:"https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/t/rtlsaj50041532-2_1.jpg",
        name:"THE RIGHT CLUB",
        color:"Olive Buttom-down Handloom...",
        price:"Rs. 2290",
      },
    ]

    }
  }
  render() {
    let showSave = true;
  if (this.props.saveFlag !==  undefined) {
    showSave = this.props.saveFlag
  }
    return (
      <div className="row" >
        {this.state.fashionStylist.map(i=>(
          
        <div className='a-txt-left s-ml-0 s-mr-0 a-back-white m-l-5' style={{ width: this.props.h, }}>
      <div className='a-rel'>
        <img src={i.imgUrl}
           alt="dislay-images"  />
        <img src={Wishlist} className='a-abs'
          style={{ top: 8, bottom: 'auto', left: 'auto', right: 8, width: '30px' }}
          alt="dislay-images"
        />
        <img src={save} className={showSave ? 'a-abs' : 'd-none'}
          style={{ top: 'auto', bottom: 8, left: 'auto', right: 8, width: '14px' }}
          alt="listing-images"
       />
      </div>
      <div style={{paddingLeft: "10px"}}  onClick={NavUtil.goToProductDetails}>
        <h5 className='a-mt-8 a-14-txt a-mb-0 semiBold cl-cor-title cl-ml-0'>{i.name} </h5>
        <p className='a-14-txt a-mt-0 a-mb-0 regular cl-cor-subtitle'>{i.color} </p>
        <h5 className=' a-14-txt a-mt-0 a-mb-0 cl-cor-price' >{i.price} </h5>
      </div>
 
    </div>
    ))}
        
      </div>
    );
  }
}


