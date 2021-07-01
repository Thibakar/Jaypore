import React, { Component } from "react";
import favicon from "../../../assets/01 Icons/02 Home Page/Wishlist.svg";
import similaricon from "../../../assets/01 Icons/03 Listing/Similar Products.svg";
import readyToShip from "../../../assets/01 Icons/03 Listing/Ready to ship.svg";
class CategoryListingCard3 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSet: [
        {
          imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/m/y/myracjj10002313-2_2.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
                offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/m/y/myracjj10002312-2_2.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
                offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl: 'https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/h/rhnsaj50041185-2_1.jpg',
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwnsdecShxDajwLfvcoRIYfL_7ajxpmq0YaR9hGYKXusOoPs6o',
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",
          size: "XS, S, M, L, XL"
        },
        {
          imgurl: "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/h/shracj500389771-2_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwnsdecShxDajwLfvcoRIYfL_7ajxpmq0YaR9hGYKXusOoPs6o",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",
          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",
          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-500,h-662/media/catalog/product/e/k/ekyapsamcnajp70-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",
          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/h/shvsaj000070638-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://thumbor-cdn1.popxo.com/unsafe/400x0/filters:quality(90)/https://popxo-uploads.s3.amazonaws.com/2016/08/jaypore-pink-kurta-and-slip-best-kurta-brands-380x500.png",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://i.pinimg.com/originals/03/41/a1/0341a14b66b575f0dc5e8ef5e5c26bdb.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",
          size: "XS, S, M, L, XL"
        },

        {
          imgurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/p/s/pspjwf30015132-1_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/p/s/pspjwf30015132-1_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        },

        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/j/sjnsaj675443029-2_2.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          discount: "Rs. 3330",
          offer:"30% offer",

          size: "XS, S, M, L, XL"
        }
      ]
    };
  }

  componentDidMount() {
    console.log("okokok", this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div class="flex">
          {this.state.dataSet.map(i => (
            <div
              className=" category-list-card3"
              onClick={() => this.props.onClickItem1()}
            >
              <div className="category-card3-list">
                <img className="category-card3-fav-icon" src={favicon} alt="fav-icon" />
                <img className="category-card3-similar-icon" src={similaricon} alt="similar-icon" />
                <img className="category-card3-readytoship-icon" src={readyToShip} alt="readytoship-icon" />
                <img className="category-list-card-img3" src={i.imgurl} alt="category-listing-card" />
                <div className="jp-size-available">
                                        <img className="category-similar-icon-size" src={similaricon} alt="similar-icon" />
                                        <img className="category-readytoship-icon-size" src={readyToShip} alt="readytoship-icon" />
                                        <div>
                                            <div className="jp-size-item jp-size-title">AVAILABLE SIZES</div>
                                            <div className="jp-size-item">XS</div>
                                            <div className="jp-size-item">S</div>
                                            <div className="jp-size-item">M</div>
                                            <div className="jp-size-item">L</div>
                                            <div className="jp-size-item">XL</div>
                                        </div>
                                    </div>
              </div>
              <div>
                <h6 className=" dress-name ">{i.name}</h6>
                <p className=" clr-name  category-dress-color">{i.color}</p>
                <div className="flex ">
                  <p className=" dress-rate ">{i.rupess} </p>
                  <span className="offer p-l-10">{i.discount}</span>
          <span className="offer-label"> {i.offer}</span>
                </div>
                <p className="size">
                  {/* {i.size} */}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default CategoryListingCard3;
