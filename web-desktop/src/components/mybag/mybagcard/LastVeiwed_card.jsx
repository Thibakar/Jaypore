import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import ItemCard from "../../homepage/homepagecards/item_card";
import MyBagCard from "./myBag_card";
import Mybaglastviewedcard from "../mybaglastviewedcard";
//import similaricon from "../../../assets/01 Icons/03 Listing/Similar Products.svg"
//import readyToShip from "../../../assets/01 Icons/03 Listing/Ready to ship.svg";
export default class LastVeiwedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwnsdecShxDajwLfvcoRIYfL_7ajxpmq0YaR9hGYKXusOoPs6o",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",

          size: "XS, S, M, L, XL"
        }
      ]
    };
  }

  render() {
    return (
      <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      infiniteLoop={true}
      className='a-width-full itemCard  new_arrival carousel-slider-Newarrival'
    >
      <div className='a-row a-back-white a-sp-bwt ' >
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
      </div>
      <div className='a-row a-back-white a-sp-bwt'>
      <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
        <Mybaglastviewedcard h='24.5%' />
      </div>
    </Carousel>
    );
  }
}
