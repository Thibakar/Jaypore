import React, { Component } from "react";

class ItemPurchasedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBagDetails: [
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with Pockets",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          price: "2330"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with Pockets",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          price: "2330"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with Pockets",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          price: "2330"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with Pockets",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          price: "2330"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with Pockets",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          price: "2330"
        }
      ]
    };
  }
  render() {
    return (
      <div className="item-purchased-card">
        <div className="a-m-txt a-16-txt a-colr-42 m-b-8">Items Purchased</div>
        {this.state.myBagDetails.map(i => (
          <div>
            <div className="row">
              <div className="col-md-4 oc-item-purchased-div">
                <img
                  className="image-Mybag item-purchased-images"
                  src={i.img}
                  alt=""
                />
              </div>

              <div className="col-md-8 item-purchased-details a-r-txt a-14-txt">
                <div className="a-14-txt a-r-txt a-colr-21">{i.productName} </div>
                <div className="m-t-8 oc-brand-color a-sb-txt a-14-txt a-colr-75">{i.webSiteName}</div>
                <div className="row m-t-8">
                  <div className="p-l-15 ">
                    Qty:<span className="a-sb-txt"> {i.quantity}</span>
                    <span className="p-l-15">
                      Size:<span className="a-sb-txt"> {i.size}</span>{" "}
                    </span>
                  </div>
                </div>
                <div className=" m-t-8">
                  <span className="a-sb-txt a-16-txt">Rs. {i.price}</span>
                </div>

              </div>

            </div>
            <div className="m-t-8">
              <hr />
            </div>
          </div>

        ))}

      </div>
    );
  }
}

export default ItemPurchasedCard;
