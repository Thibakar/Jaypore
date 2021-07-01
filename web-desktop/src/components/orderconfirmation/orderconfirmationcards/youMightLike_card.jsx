import React, { Component } from 'react';

import favicon from "../../../assets/01 Icons/02 Home Page/Wishlist.svg"
import similaricon from "../../../assets/01 Icons/03 Listing/Similar Products.svg"
import readyToShip from "../../../assets/01 Icons/03 Listing/Ready to ship.svg"
import { NavUtil } from '../../common/navutil';

class YouMightLikeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

            dataSet: [{
                imgurl: "https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: "https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg",
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                offer: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269,e-sharpen/media/catalog/product/s/i/siisaj50040699-2_1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },
            {
                imgurl: 'https://static.jaypore.com/tr:w-227,h-269/media/catalog/product/e/k/ekyapsamcnajp61-1.jpg',
                name: "JAYPORE",
                color: "Ivory-Blue Handsome Cotton",
                offerPrice: "Rs.2290",
                price: "Rs.3330",
                discount: "30% Off",
                size: "XS, S, M, L, XL"
            },

            ]
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="flex">
                    {this.state.dataSet.map((i, index) =>
                        (
                            <div className={(index + 1) % 3 === 0 ? "bg-white  you-might-like-card3" : "bg-white  you-might-like-card"} onClick={NavUtil.goToProductDetails}>
                                <div className='a-rel'>
                                    <img className="you-might-like-fav-icon" src={favicon} alt="fav-icon" />
                                    <img className="you-might-like-similar-icon" src={similaricon} alt="similar-icon" />
                                    <img className="you-might-like-readytoship-icon" src={readyToShip} alt="readytoship-icon" />
                                    <img className="category-list-card-img hm-br-5" src={i.imgurl} alt="category-listing-card" />

                                </div>
                                <div className='text-left' >
                                    <h6 className=" a-sb-txt a-14-txt a-colr-21 m-t-8">{i.name}</h6>
                                    <p className=" a-r-txt a-14-txt a-colr-61 m-t-4">{i.color}</p>
                                    <div className=" a-14-txt m-t-4">
                                        <span className="a-sb-txt">{i.offerPrice}{"  "}</span>
                                        <span className="offer a-r-txt a-colr-75">{i.price}</span>{"  "}
                                        <span className="offer-label font-12 category-offer-label a-sb-txt" style={{ padding: '0px 3px 0px 3px' }}>30% OFF</span>
                                    </div>
                                    <div className="size m-t-8 a-r-txt a-14-txt a-colr-61 p-b-24">{i.size}</div>
                                </div>
                            </div>
                        ))}
                </div>






            </React.Fragment>
        );
    }
}

export default YouMightLikeCard;