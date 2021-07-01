import React, { Component } from "react";
import RightArrow from "../../../assets/01 Icons/05 My Bag/right_arrow_red.svg";
import RemoveModal from "../mybagmodals/remove_item_modal";
export default class MyBagCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBagDetails: [
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with ",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          date: "17th July 2018",
          giftWrapCharge: "(Rs. 50 will be charged.)"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with ",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          date: "17th July 2018",
          giftWrapCharge: "(Rs. 50 will be charged.)"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with ",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          date: "17th July 2018",
          giftWrapCharge: "(Rs. 50 will be charged.)"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with ",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          date: "17th July 2018",
          giftWrapCharge: "(Rs. 50 will be charged.)"
        },
        {
          img:
            "https://i.pinimg.com/564x/05/82/1d/05821d12bfe3c6875960832a8436a668.jpg",
          productName: "Ivory-Green Handloom Ikat Cotton Dress with ",
          webSiteName: "JAYPORE",
          quantity: "1",
          size: "M",
          rupess: "Rs. 2290",
          offer: "Rs. 3330",
          date: "17th July 2018",
          giftWrapCharge: "(Rs. 50 will be charged.)"
        }
      ],
      visible: false
    };
  }

  toggleVisible = () => {
    console.log("this", this.state.visible);
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <React.Fragment>
        <RemoveModal
          toggleVisible={() => this.toggleVisible()}
          visible={this.state.visible}
        />
        <div className=" card bg-pink card-p-0" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, border: '1px solid #F5E3D8' }}>
          {this.state.myBagDetails.map(i => (
            <div className="container">
              <div className="row" style={{ padding: '24px 16px 16px 24px' }}>
                <div className="">
                  <img className="image-Mybag" src={i.img} alt="" />
                </div>

                <div class="p-l-12">
                  <div className="a-16-txt regular a-colr-21 m-b-8">{i.productName} </div>
                  <div className="a-14-txt semiBold as_site_nme m-b-8">
                    {i.webSiteName}
                  </div>
                  <div className="sb-txt m-b-8">
                    <div>
                      {/* <span className="a-14-txt regular"><span>Qty:</span> <span className="as_qty_lite a-sb-txt">{i.quantity}</span>
                        <div className="d-in-blk" style={{ width: '24px', height: '24px', lineHeight: '24px', textAlign: 'center' }}>
                          <img className="mybag-card-arrow" src={RightArrow} alt="" />
                        </div>
                      </span> */}
                      <span className="a-14-txt regular"><span>Qty:</span>
                        <select style={{ width: '30px', height: '24px', lineHeight: '24px', fontWeight:"bold", textAlign: 'center', background: '#fff' }}>
                          <option className="as_qty_lite a-sb-txt">{i.quantity}</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <img className="mybag-card-arrow" src={RightArrow} alt="" />
                      </span>
                      {/* <span className="p-l-25">
                        <span className="a-14-txt regular"><span className="as_qty_lite">
                          Size: </span><span className="as_qty_lite a-sb-txt">{i.size}</span>
                          <div className="d-in-blk" style={{ width: '24px', height: '24px', lineHeight: '24px', textAlign: 'center' }}>
                            <img className="mybag-card-arrow" src={RightArrow} alt="" />
                          </div>
                        </span>{" "}
                      </span> */}
                      <span className="p-l-25"></span>
                      <span className="a-14-txt regular"><span>Size:</span>
                        <select style={{ width: '33px', height: '24px', lineHeight: '24px', fontWeight:"bold", textAlign: 'center', background: '#fff' }}>
                          <option className="as_qty_lite a-sb-txt">{i.size}</option>
                          <option>XS</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                        </select>
                        <img className="mybag-card-arrow" src={RightArrow} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="m-b-8">
                    <span className="a-sb-txt a-18-txt">{i.rupess} </span>
                  </div>
                  <div className="box-mybag-card font-14 m-txt">
                    <div className="a-m-8 a-mr-16">
                      <span className="a-14-txt medium">Dispatched by:</span>{" "}
                      <span className="a-sb-txt">{i.date}</span>
                      <div className="orange-font m-t-10">
                        <span className="medium a-14-txt ">
                          Return accepted within 10 days of delivery
                      </span>
                      </div>
                    </div>

                  </div>
                </div>

                <div style={{ position: 'absolute', right: '16px' }}>
                  <button
                    className="button-remove a-11-txt medium login-text-blue as_mrgn_chng"
                    onClick={() => {
                      this.toggleVisible();
                    }}
                  >
                    REMOVE
                  </button>
                </div>

              </div>
              <div className="row">
                <div style={{ paddingLeft: '165px' }}>
                  <div class="font-13 p-t-5">
                    <label className="as_custom_chck_box w-100-p "><span className="medium a-14-txt as_qty_lite">Gift wrap this item</span>
                      <input type="checkbox" />
                      <span className="as_checkmark testCheckBox"></span>
                      <span className="text-grey-mybag regular a-14-txt p-l-5">
                        {i.giftWrapCharge}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="">
                <hr className="margin-r-l--17" />
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
