import React from "react";
import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'
import similarproducts from "../../components/Similiar_Products/similarProducts";
import Modal from "react-modal";
import "../../assets/css/recentitems.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
  } from "react-router-dom";

class RecentItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RecentItemsData: [
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/o/roaapjj10000767-1_3.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          text: "Pink Flared Cotton Kurtas with Mul Slip and Gota (Set of 2)",
          isInStock:true,
          rupess: "Rs. 4490",
          size: "XS, S, M, L, XL",
          buttontext:"Add to Bag"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/m/smhsaj50038217-2_4.jpg",
          name: "JAYPORE",
          color: "Ivory-Blue Handsome Cotton",
          text: "White-Tan Handcrafted Macrame Cotton Backpack",
          isInStock:true,
          rupess: "Rs. 5520",
          size: "XS, S, M, L, XL",
          buttontext:"Add to Bag",
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/p/v/pvthoj80064464-2_2.jpg",
          name: "HAMSINI",
          text: "Off White Cotton Cushion cover",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          isInStock:false,
          buttontext:"Show Similar Products",
        
         
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/v/s/vshapj40014719-2_4.jpg",
          name: "JAYPORE",
          text: "Purple-Green Handloom Ikat Cotton Dress With Pockets",
          color: "Ivory-Blue Handsome Cotton",
          isInStock:true,
          rupess: "Rs. 2793",
          buttontext:"Add to Bag",
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/j/rjdjwj60026941-1_3.jpg",
          name: "VINTAGE INTENTION",
          text: "Red-Green Enameled Polki Gold Earnings With Sapphire",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 70737",
          isInStock:true,
          size: "XS, S, M, L, XL",
          buttontext:"Add to Bag",
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/p/s/pspjwf30028534-2_2.jpg",
          name: "AJ CREATIONS ",
          text: "Multicolred Jade and Agate Jadau Necklace",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 7650",
          isInStock:true,
          buttontext:"Add to Bag",
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/j/a/jaysaj50035888-2_2.jpg",
          name: "JAYPORE",
          text: "Marron-Ivary Shibori-Dyed Tussar Silk Saree ",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 23650",
          isInStock:true,
          size: "XS, S, M, L, XL",
          buttontext:"Add to Bag",
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/s/f/sfhjwj30012346-1_2.jpg",
          name: "JAYPORE",
          text: "Tribal Silver Earnings ",
          color: "Ivory-Blue Handsome Cotton",
          rupess: "Rs. 2290",
          size: "XS, S, M, L, XL",
          isInStock:true,
          buttontext:"Add to Bag",
        }
      ]
    };

  }

  goToDeteleModel = () => {
    this.props.history.push("/Similarproducts");
  };


  render() {
 
   
    return (
      <React.Fragment>
       <Header props={this.props}/>
        <div className="desktop-main-container-recentitems">

          <h1 className="desktop-main-content-txt desktop-main-contant-heading">Recently Viewed Items</h1>
          <p className="desktop-main-content-para">
            Dresses with delicate prints,breathable fabrics and a range of colors
        </p>
        </div>
        <div className="desktop-main-content-body-images-items-description-container">
        {this.state.RecentItemsData.map(i => (
               <React.Fragment>
            <div className="desktop-main-content-body-images-items-list">
          
              <img className="image3" src={i.imgurl} alt="img" />
              <div className={i.isInStock?'d-none':"out-of-stock-description-desktop"}>OUT OF STOCK</div>
              <div className="desktop-main-body-item-description-list_">
              <p className="text1">{i.name}</p>
              <h1 className="categories-description">
                {i.text}
              </h1>
              {/* <a href="/" className="text1">
                {i.color}
              </a> */}
              <b className="text1">{i.rupess}</b>
              <a href="/" className="item-sizes">
                {i.size}
              </a>
              </div>
              <div className="common-btn-for-desktop-recent-view-page">
        
            <button onClick={(i.buttontext==="Add to Bag")?null:() => this.goToDeteleModel()}  className="but2 but3 text1">{i.buttontext}</button>
           
          
              </div>
            </div>
           
           </React.Fragment>
         
          ))}
          
        </div>
        <Footer/>

      </React.Fragment>

    );
  }
}

export default RecentItems;
