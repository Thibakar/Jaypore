import React, { Component } from "react";
import "./addBag.css";
import { Link } from "react-router-dom";

class AddBag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      dataset: [
        {
          url:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          name: "Pink Flared Cotton Kurta with Muli Slip  and Gota (Set of 2) ",
          product: "JAYPORE",
          price: "Rs. 7650",
          qty: "1",
          size: "M"
        },
        {
          url:
            "https://static.jaypore.com/tr:w-800,h-1060/media/catalog/product/r/c/rctapj20005182-1_1.jpg",
          name: "Pink Flared Cotton Kurta with Muli Slip  and Gota (Set of 2) ",
          product: "JAYPORE",
          price: "Rs. 7650",
          qty: "1",
          size: "M"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="addbag-card">
          {this.state.dataset.map((i,index) => (
            <div className='item-bag-div'>
              <div className="row p-b-10 item-bag ">
                <div className="col-md-3 ">
                  <img className="goto-bag-images" src={i.url} alt="" />
                </div>
                <div className="col-md-9 p-l-30">
                  <div className="row">
                    <span className="a-r-txt font-12 text-grey-mybag p-t-10"> {i.name}</span>
                  </div>
                  <div className="row p-t-10 ">
                    <span className=" a-b-txt font-12">{i.product}</span>
                    <span className="a-b-txt font-14 p-l-120">{i.price}</span>
                  </div>
                  <div className="row p-t-10">
                    <span className="text-grey-mybag font-12">
                      Qty : <span className="a-sm-txt">1</span>
                    </span>
                    <span className="text-grey-mybag font-12 p-l-20">
                      Size :<span className="a-sb-txt">M</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={index===(this.state.dataset.length-1)?'d-none':'dotted-bag'}/>
            </div>
          ))}
          <div className="price-box">
            <div className="flex">
              <span className="price-addbag a-r-txt font-14">Total Price</span>
              <span className="rupees-addbag a-sb-txt p-l-175 ">Rs. 10640 </span>
            </div>
          </div>
          <Link to="/myBag">
            <button className="go-to-bag-btn" type="button">
              Go to Bag
          </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default AddBag;
