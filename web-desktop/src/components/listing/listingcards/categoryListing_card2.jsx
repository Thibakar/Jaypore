import React, { Component } from 'react';


import favicon from "../../../assets/01 Icons/02 Home Page/Wishlist.svg"
import similaricon from "../../../assets/01 Icons/03 Listing/Similar Products.svg"
import readyToShip from "../../../assets/icons/ready-to-ship.svg"
import '../../../assets/css/listing.css'
class CategoryListingCard2 extends Component {
    constructor (props) {
        super(props)
        this.state = {

            dataSet: [{
                imgurl: "https://static.jaypore.com/tr:w-201,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",

                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-201,h-269,e-sharpen/media/catalog/product/s/h/shvsaj000070638-1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-201,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",

                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-201,h-269/media/catalog/product/e/k/ekyapsamcnajp70-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-201,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",

                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-201,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",

                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-201,h-269/media/catalog/product/e/k/ekyapsamcnajp70-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",

                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-201,h-269,e-sharpen/media/catalog/product/s/h/shvsaj000070638-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                rupess: "Rs. 2290",
                discount: "Rs. 3330",
                offer:"30% OFF",
                size: "XS, S, M, L, XL"
            },

            ]
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.state.dataSet.map((i) =>
                        (
                            <div className=" category-list-card" onClick={() => this.props.onClickItem()}>
                                <div className="category-image-div">
                                    <img className="category-fav-icon cu-ptr" src={favicon} alt="fav-icon" />
                                    <img className="category-similar-icon" src={similaricon} alt="similar-icon" />
                                    <img className="category-readytoship-icon" src={readyToShip} alt="readytoship-icon" />
                                    <img className="category-list-card-img" src={i.imgurl} alt="category-listing-card" />
                                    <div className="jp-size-available">
                                        <img className="category-similar-icon-size cu-ptr" src={similaricon} alt="similar-icon" />
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
                                    <div className="flex category-card-footer">
                                        <p className=" dress-rate ">{i.rupess} </p>
                                        <span className="offer p-l-10">{i.discount}</span>
                                        <span className="category-offer-label">{i.offer} </span>
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

export default CategoryListingCard2;