import React from "react";
import "../../assets/css/similarproduct.css";

import close from "../../assets/01 Icons/03 Listing/close.svg";
// import Wishlist from "../../assets/01 Icons/09 Navigation Drawer - Desktop/My Wishlist.svg";

import Modal from 'react-modal';
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: 'black'
  },

  content: {
    margin: "0 auto",
    left: "6%",
    right: '30%',
    height: 416,
    padding: 5,
    backgroundColor: 'rgba(255,255,255,255)',
    width: "1271px",
    height:"688px",
    backgroundColor: "#fffaf7",
    overflow: "hidden"

  }
}

class Similarproducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      RecentItemsData: [
        {
          headertext: "Similar-Products",
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/k/r/kruhoj80062343-2_3.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        },
        {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/t/m/tmskdj80063567-2_5.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        },
        {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/t/m/tmskdj80063570-2_5.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover",
          Productprice: "Rs. 820"
        },
        {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/t/m/tmskdj80063566-2_5.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        }, {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/t/m/tmskdj80063564-2_5.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6 in X 11.6in)",
          Productprice: "Rs. 820"
        },
        //  bottom section 
         // SECOND SECTION OF IMAGES LIST
        {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/k/r/kruhoj80062345-2_3.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        },
       
        {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/k/r/kruhoj80062345-2_3.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        },
        {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/a/d/adzhoj80064245-2_2.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        }, {

          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/r/i/rithoj80064782-2_2.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        },
        {
          imgurl:
            "https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/t/m/tmskdj80063564-2_5.jpg",
          Productname: "HAMSINI",
          Productdescription: "Indigo Cotton Cushion Cover(15.6in X 11.6in)",
          Productprice: "Rs. 820"
        },
      ]
    }
  }
  render() {
    return (
      <div className="similar-producut-container">
        <Modal
          isOpen={this.state.isVisible}
          style={customStyles} >
          <div className="similarproduct-modal-header">
            <h1 className="similarproduct-modal-heading">Similar Products</h1>
            <img className="similarproduct-modal-img"  src={close} onClick={() => this.props.history.goBack()} />
           
          </div>
          <div className="similarproduct-modal-bodcontainer">
          {
            this.state.RecentItemsData.map(i => (
              <div className="similarproduct-modal-body">
            <img src={i.imgurl} alt="pillowone" />
           
            <h4 className="prodcutname-similarproduct">{i.Productname}</h4>
            <p className=" prodcutname-similarproduct-disc" >{i.Productdescription}</p>
            <h4 className="prodcutname-similarproduct-price">{i.Productprice}</h4>
              </div>
            ))
          }
          </div>

        </Modal>
      </div>

    );
  }
}
export default Similarproducts;



