import React, { Component } from 'react';
import favicon from "../../../assets/01 Icons/02 Home Page/Wishlist.svg";
import { NavUtil } from '../../common/navutil';


class ProductRelatedCard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [
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


      ]
    };
  }

  componentDidMount() {
    console.log("okokok", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div class="">
          {this.state.dataSet.map(i => (
            <div
              className=" products-related-card m-b-20"
              onClick={NavUtil.goToProductDetails}
            >
              <div>
                <img
                  className="product3-fav-icon"
                  src={favicon}
                  alt="fav-icon"
                />

                <img
                  className="category-list-card-img"
                  src={i.imgurl}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '5px' }}
                  alt="category-listing-card"
                />
              </div>
              <div className='a-txt-left'>
                <div className=" font-14 a-sb-txt a-colr-21">{i.name}</div>
                <div className=" font-14 a-r-txt a-colr-42">{i.color}</div>

                <div className="font-14 a-sb-txt a-colr-21">{i.rupess} </div>

                <div className="a-mt-8 font-14 a-r-txt a-colr-61">{i.size}</div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}


export default ProductRelatedCard3;