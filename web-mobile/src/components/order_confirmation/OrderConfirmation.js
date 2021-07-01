import React, { Component } from "react";
// import './orderConfirmCss.css'
import Wishlist from "../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg";
import Ready from "../../assets/Jaypore Assets/01 Icons/03 Listing/Ready to ship.svg";
import Similar from "../../assets/Jaypore Assets/01 Icons/03 Listing/Similar Products.svg";
import "../../assets/css/ayush.css";
import close from "../../assets/Jaypore Assets/01 Icons/08 Header & Footer/back.svg";
import OCImage from "../../assets/Jaypore Assets/01 Icons/07 Order Confirmation/Order Confirmation.svg";
import { Link } from "react-router-dom";
import downArrow from "../../assets/Jaypore Assets/01 Icons/07 Order Confirmation/drop.png";
import Footer from "../common/footer/footer";

class OrderConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCover: true,
      promotional: true,
      isapply: false,
      categoryCoverImagae:
        "https://www.vinculumgroup.com/wp-content/uploads/2016/03/Big-Image-1.jpg",
      categoryItemData: [
        {
          id: "1",
          name: "Ivory-Blue Handloom ",
          imageurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/t/steapj70002738-1_1.jpg",
          price: "2290",
          size: "XS,M,L,S,XL"
        },
        {
          id: "2",
          name: "Ivory-Blue Handloom ",
          imageurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/j/d/jdiappl10000419-1_2.jpg",
          price: "2290",
          size: "XS,M,L,S,XL"
        },
        {
          id: "3",
          name: "Ivory-Blue Handloom ",
          imageurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/t/n/tnmapj20011096-1_3.jpg",
          price: "2290",
          size: "XS,M,L,S,XL"
        },
        {
          id: "4",
          name: "Ivory-Blue Handloom ",
          imageurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/l/n/lntjikt100006161-1_2.jpg",
          price: "2290",
          size: "XS,M,L,S,XL"
        },
        {
          id: "5",
          name: "Ivory-Blue Handloom ",
          imageurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/d/a/datapj20010127-1_1.jpg",
          price: "2290",
          size: "XS,M,L,S,XL"
        },
        {
          id: "6",
          name: "Ivory-Blue Handloom ",
          imageurl:
            "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/t/b/tbrapj20011565-1.jpg",
          price: "2290",
          size: "XS,M,L,S,XL"
        }
      ],
      itemPurchasedData: [
        {
          id: "1",
          name: "Ivory-Blue Handloom ",
          imgurl:
            "https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg",
          price: "2990",
          size: "M",
          qty: "1"
        },
        {
          id: "1",
          name: "Ivory-Blue Handloom ",
          imgurl:
            "https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg",
          price: "2990",
          size: "M",
          qty: "1"
        },
        {
          id: "1",
          name: "Ivory-Blue Handloom ",
          imgurl:
            "https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg",
          price: "2990",
          size: "M",
          qty: "1"
        },
        {
          id: "1",
          name: "Ivory-Blue Handloom ",
          imgurl:
            "https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg",
          price: "2990",
          size: "M",
          qty: "1"
        }
      ],
      isShowMore: false
    };
  }

  _renderItem = () => {
    let item = [];
    // let len = this.state.categoryItemData.length;
    for (let i = 0; i < this.state.categoryItemData.length; i += 2) {
      item.push(
        <div className="row-even-div" key={i}>
          <CardItem
            data={this.state.categoryItemData[i]}
            key={this.state.categoryItemData[i].id}
          />
          <CardItem
            data={this.state.categoryItemData[i + 1]}
            key={this.state.categoryItemData[i + 1].id}
          />
        </div>
      );
    }
    return item;
  };

  _toggle_showMore = () => {
    this.setState({
      isShowMore: !this.state.isShowMore,
      isapply: !this.state.isapply
    });
  };

  goToHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  imageDivision = () => {
    let heTag = this.state.itemPurchasedData.length;
  };

  toggle_apply = () => {
    console.log(this.state.isapply);
    this.setState({
      isapply: !this.state.isapply
    });
  };

  render() {
    return (
      <div className="container-div back-color-pink right-center">
        <div className="a-height-56 row-bwt-div  white-back-color p-13">
          <img
            src={close}
            alt=""
            width="24px"
            height="24px"
            className="a-icon-back"
            onClick={() => this.props.history.goBack()}
          />
          <Link to="/orderConfirmationNew/help" className="needhelp a-sky-blue-color">
            Need Help?
          </Link>
        </div>
        <div className="a-cardOrder right-center border-radius">
          <img src={OCImage} alt="" height="43px" width="43px" />
          <h5 className="a-18-txt pb-12 a-mt-16">
            <b>Thank you for your order</b>
          </h5>
          <div className="a-order-detail right-center btn-radius">
            <h5>
              <b>Order ID: 12345</b>
            </h5>
            <h5 className="mb-0">
              Payable Amount:<b> Rs. 9288</b>
            </h5>
          </div>
          <h5 className="a-mt-24">
            <b>Cash On Delivery</b>
          </h5>
          <h5 className="a-mt-16 mb-0 grey-txt">
            Your order will be shipped to
          </h5>
          <h5 className="a-mt-8 ">
            Flat -207, Hill View Appartment, Mehta Chowk, Mehrauli, New Delhi,
            121003 India
          </h5>
          <div
            className={
              this.state.isShowMore ? "a-item-list btn-radius" : "d-none"
            }
          >
            <h4 className="left-align">Items Purchased</h4>
            {this.state.itemPurchasedData.map((item, i) => (
              <div key={i}>
                <ItemPurchased item={item} />

                <hr className="a-hr-1" />
              </div>
            ))}
          </div>
          <div
            className="a-show-up-down row-even-div a-p-12 "
            onClick={() => this._toggle_showMore()}
          >
            <h5
              className="a-sky-blue-color sub-sub-heading-txt  "
            // onClick={() => this.toggle_apply()}
            >
              {this.state.isShowMore ? "SHOW LESS" : "SHOW MORE "}
            </h5>

            <img
              className={
                this.state.isapply
                  ? "rot-180 m-t-4 downArrow"
                  : "downArrow m-t-4"
              }
              src={downArrow}
              alt=""
            />
          </div>
        </div>
        <div className=" right-center a-p-16">
          <h5>We've sent the invoice of this order to</h5>
          <h5>
            <b>shahnawaz.alam@jaypore.com</b>
          </h5>
          <button
            className=" a-mt-8 a-cont-shop-btn color-white font-bold"
            onClick={() => this.goToHome()}
          >
            Continue Shopping
          </button>
        </div>
        <h5 className="mt-24 a-18-txt colr-42 mb-4">
          You Might Also Love These Products
        </h5>
        {this._renderItem()}
        <div className="a-p-16">
          <button className="a-load-more-btn">Load more products</button>
        </div>
        <div className="left-align">
          <Footer />
        </div>
      </div>
    );
  }
}

export default OrderConfirmation;

function CardItem(props) {
  return (
    <div className="white-back-color box-shadow-div card-order-confirm mt-5-px left-align">
      <Link to={"/productDetail"} activeClassName="active">
        <div className="div-rel">
          <img
            src={props.data.imageurl}
            alt="coverImage"
            height="225px"
            width="100%"
            className="card-image"
          />
          <div className='band-off row-div div-abs btn-radius'
            style={{ top: '8px', bottom: 'auto', left: '8px', right: 'auto' }}>
            <p className='white-color sb-txt font-12'>30% OFF</p>
          </div>
          <img
            src={Wishlist}
            alt={props.data.name}
            style={{ top: "8px", bottom: "auto", left: "auto", right: "8px" }}
            height="15px"
            width="16px"
            className="card-image div-abs "
          />

          <img
            src={Ready}
            alt={props.data.name}
            style={{ top: "auto", bottom: "8px", left: "8px", right: "auto" }}
            height="36px"
            width="36px"
            className="card-image div-abs "
          />

          <img
            src={Similar}
            alt={props.data.name}
            style={{ top: "auto", bottom: "8px", left: "auto", right: "8px" }}
            height="23px"
            width="23px"
            className="card-image div-abs "
          />
        </div>
        <div className="p-4">
          <h5 className="title-bold sp-letter black-color p-b-2">JAYPORE</h5>
          <h5 className="title grey-txt p-b-2">
            Ivory-Blue Handloom
          </h5>
          <div className="row-div-start p-b-2">
            <h5 className="title-bold black-color ">Rs. 2100</h5>
            <h5 className="title ml-5-m under-though grey-txt">Rs. 3000</h5>
          </div>
          <h5 className="title black-color">XS, S, M, L, XL</h5>
        </div>
      </Link>
    </div>
  );
}

function ItemPurchased(props) {
  return (
    <div className="row-bwt-div a-mb-mt-12" style={{ flexDirection: "row" }}>
      <img alt="" src={props.item.imgurl} className="a-img-item-order" />
      <div className="left-align item-purchase" style={{ width: "75%" }}>
        <h5 className="a-item-order-name">{props.item.name}</h5>
        <h5 className="a-item-order-name grey-txt">JAYPORE</h5>
        <h5 className="a-item-order-name grey-txt">
          Qty:
          <b className="black-color sub-sub-heading-txt">{props.item.qty}</b>
          <span className="a-ml-24">
            {" "}
            Size:
            <b className="black-color sub-sub-heading-txt">{props.item.size}</b>
          </span>
        </h5>
        <h5 className="a-item-order-name ">
          <b>Rs.{props.item.price}</b>
        </h5>
      </div>
    </div>
  );
}

/*
<div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-12 ml-0">
                        <div className="card">
                            <div className="card-body right-center">
                            <img src={OCImage} alt='image'  style={{marginTop:'20px'}}
                                height="43px" width="43px" className='card-image  ' />
                                <h3><b className="designing01">Thank you for your order</b></h3>


                                <div className="card back-color-pink mt-20 btn-radius" id="cardDesrr" >
                                    <div className="card-body back-color-pink " id="cardId">
                                        <h5 style={{marginTop:10}}><strong>Order ID : 12345 </strong></h5>
                                        <p className='font-style-15 '>Payable Amount: <b>Rs. 9288</b></p>
                                    </div>
                                </div>


                                <h4
                                className='mt-20'
                                ><b >Cash On Delivery</b></h4>
                                <p > Your order will be shipped to :</p>
                                <p > Flat -207, Hill view Apartment, Mehta Chowk, Mehrauli, New Delhi, 121003 India</p>



                               <div className='card-order back-color-pink btn-radius p-10'>
                               <h4 className="left-align ">Items purchased</h4>


                                <div className='row-bwt-div ' style={{flexDirection:'row'}}>
                                    <img src="https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg" alt="Mountains"
                                        height="110px" width='40%'
                                        />
                                    <div className="left-align p-10" style={{width:'60%'}}>
                                    <p>Ivory-Green handloom Ikat... </p>
                                        <p style={{color: '#d3d3d3'}}>JAYPORE</p>
                                        <p>Qty:<b>1 &nbsp;</b> Size: <b>M</b></p>
                                        <p className='font-style-15'><b>Rs. 2990</b></p>
                                    </div>
                                </div>

                                <div className='row-bwt-div ' style={{flexDirection:'row'}}>
                                    <img src="https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg" alt="Mountains"
                                        height="110px" width='40%'
                                        />
                                    <div className="left-align p-10" style={{width:'60%'}}>
                                    <p>Ivory-Green handloom Ikat... </p>
                                        <p style={{color: '#d3d3d3'}}>JAYPORE</p>
                                        <p>Qty:<b>1 &nbsp;</b> Size: <b>M</b></p>
                                        <p className='font-style-15'><b>Rs. 2990</b></p>
                                    </div>
                                </div>

                                <div className='row-bwt-div ' style={{flexDirection:'row'}}>
                                    <img src="https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg" alt="Mountains"
                                        height="110px" width='40%'
                                        />
                                    <div className="left-align p-10" style={{width:'60%'}}>
                                    <p>Ivory-Green handloom Ikat... </p>
                                        <p style={{color: '#d3d3d3'}}>JAYPORE</p>
                                        <p>Qty:<b>1 &nbsp;</b> Size: <b>M</b></p>
                                        <p className='font-style-15'><b>Rs. 2990</b></p>
                                    </div>
                                </div>

                                <div className='row-bwt-div ' style={{flexDirection:'row'}}>
                                    <img src="https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg" alt="Mountains"
                                        height="110px" width='40%'
                                        />
                                    <div className="left-align p-10" style={{width:'60%'}}>
                                    <p>Ivory-Green handloom Ikat... </p>
                                        <p style={{color: '#d3d3d3'}}>JAYPORE</p>
                                        <p>Qty:<b>1 &nbsp;</b> Size: <b>M</b></p>
                                        <p className='font-style-15'><b>Rs. 2990</b></p>
                                    </div>
                                </div>

                                <div className='row-bwt-div ' style={{flexDirection:'row'}}>
                                    <img src="https://img3.junaroad.com/uiproducts/16830217/zoom_0-1577707373.jpg" alt="Mountains"
                                        height="110px" width='40%'
                                        />
                                    <div className="left-align p-10" style={{width:'60%'}}>
                                    <p>Ivory-Green handloom Ikat... </p>
                                        <p style={{color: '#d3d3d3'}}>JAYPORE</p>
                                        <p>Qty:<b>1 &nbsp;</b> Size: <b>M</b></p>
                                        <p className='font-style-15'><b>Rs. 2990</b></p>
                                    </div>
                                </div>

                                     <div className="col-7">
                                        <p>Ivory-Green handloom Ikat... </p>
                                        <p style={{color: '#d3d3d3'}}>JAYPORE</p>
                                        <p>Qty:<b>1 &nbsp;</b> Size: <b>M</b></p>
                                        <p className='font-style-15'><b>Rs. 2990</b></p>
                                    </div>
                                    </div>






                                    <hr className="hrtag" />
                                </div>

                            <div id="showmore">SHOW LESS</div>

                        </div>
                        <div>
                            <p className="paragraphstyle">we've sent the invoice of this order to<br /><strong>shahnawaz.alam@jaypore.com</strong></p>
                        </div>
                        <div>
                            <button className="block">Continue Shopping</button>
                        </div>
                        <div>
                        <h4><strong style={{margin: '23px 36px'}}> You Might Also Love These Products</strong></h4>
                        </div>

                        {this._renderItem()}

                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseTwo">
                                            Departments
        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">

                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseTwo">
                                            Most Searched Categories
        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">

                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" aria-controls="collapseTwo">
                                            Company
        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            // </div>


            */
