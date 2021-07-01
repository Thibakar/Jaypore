import React, { Component } from "react";
import favicon from "../../../assets/01 Icons/02 Home Page/Wishlist.svg";
import similaricon from "../../../assets/01 Icons/03 Listing/Similar Products.svg";
import readyToShip from "../../../assets/01 Icons/03 Listing/Ready to ship.svg";

class CategorySpecialCard1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: [
        {
          imgurl:
            "https://static.jaypore.com/tr:w-201,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          discount: "Rs. 3330",
                offer:"30% OFF",

          size: "XS, S, M, L, XL"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-201,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          discount: "Rs. 3330",
                offer:"30% OFF",

          size: "XS, S, M, L, XL"
        }
      ],
      dataSet2: [
        {
          imgurl:
            "https://static.jaypore.com/tr:w-392,h-/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          discount: "Rs. 3330",
                offer:"30% OFF",

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
        <div className="row">
          {this.state.dataSet.map(i => (
            <div className="col-md-6 cl-plr-0 cl-col-md-6">
              <div
                className=" category-special-card-small"
                onClick={() => this.props.onClickItem()}
              >
                <div className="cl-position-relative">
                  <img
                    className="category-fav-icon cu-ptr"
                    src={favicon}
                    alt="fav-icon"
                  />
                  <img
                    className="category-similar-icon"
                    src={similaricon}
                    alt="similar-icon"
                  />
                  <img
                    className="category-readytoship-icon"
                    src={readyToShip}
                    alt="readytoship-icon"
                  />
                  <img
                    className="category-list-card-img cl-br-5"
                    src={i.imgurl}
                    alt="category-listing-card"
                  />
                </div>
                <div>
                  <h6 className=" dress-name ">{i.name}</h6>
                  <p className=" clr-name  category-dress-color">{i.color}</p>
                  <div className="flex ">
                    <p className=" dress-rate ">{i.rupess} </p>
                    <span className="offer p-l-10">{i.offer}</span>
                    <span className="offer-label cl-offer-label"> 30% OFF</span>
                  </div>
                  <p className="size">{i.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {this.state.dataSet2.map(i => (
            <div className="col-md-12 cl-plr-0">
              <div
                className="category-special-card-large"
                onClick={() => this.props.onClickItem()}
              >
                <div className="cl-position-relative">
                  <img
                    className="category-special-fav-icon-large"
                    src={favicon}
                    alt="fav-icon"
                  />
                  <img
                    className="category-special-similar-icon-large"
                    src={similaricon}
                    alt="similar-icon"
                  />
                  <img
                    className="category-special-readytoship-icon-large"
                    src={readyToShip}
                    alt="readytoship-icon"
                  />
                  <img
                    className="category-special-card-img cl-br-5"
                    src={i.imgurl}
                    alt="category-listing-card"
                  />
                </div>
                <div>
                  <h6 className=" dress-name ">{i.name}</h6>
                  <p className=" clr-name  category-dress-color">{i.color}</p>
                  <div className="flex ">
                    <p className=" dress-rate ">{i.rupess} </p>
                    <span className="offer p-l-10">{i.discount}</span>
                    <span className="offer-label"> {i.offer} </span>
                  </div>
                  {/* <p className="size">{i.size}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default CategorySpecialCard1;
