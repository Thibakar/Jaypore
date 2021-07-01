import React, { Component } from 'react'
import Wishlist from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'


class YouMightLike extends Component {
    render() {
        return (
            <div className="">
                <div className="text-center mt-24 font-18 colr-21 sb-txt">YOU MIGHT ALSO LIKE</div>
                <div className="col-12">
                    <div className="row mt-8">
                        <div className="col-6 mb-8">
                            {/* <ImageCard /> */}
                            <img src={Wishlist} alt="hearticon" className="youmightlike-hearticon heartIconSize" />
                            <img src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/a/j/ajwjwj30029266-1_1.jpg" className="imageRounded" alt="productimage" />
                            <h6 className="cardBelowText font-size-14 ml--10 mrt-4">Grey Elasticated-<br />saist Cotton Palazzo</h6>
                            <p className="price-font-size ml--10 mrt-4"><strong>Rs.1690</strong></p>
                        </div>
                        <div className="col-6 pl-6">
                            {/* <ImageCard /> */}
                            <img src={Wishlist} alt="hearticon" className="youmightlike-hearticon heartIconSize" />
                            <img src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/n/bnksaj50040308-2_2.jpg" className="imageRounded" alt="productimage" />
                            <h6 className="cardBelowText font-size-14 ml--10 mrt-4">Grey Elasticated-<br />saist Cotton Palazzo</h6>
                            <p className="price-font-size ml--10 mrt-4"><strong>Rs.1690</strong></p>
                        </div>
                        <div className="col-6 margin-top--20 mb-8">
                            {/* <ImageCard /> */}
                            <img src={Wishlist} alt="hearticon" className="youmightlike-hearticon heartIconSize" />
                            <img src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/n/bnksaj50040300-2_2.jpg" className="imageRounded" alt="productimage" />
                            <h6 className="cardBelowText font-size-14 ml--10 mrt-4">Grey Elasticated-<br />saist Cotton Palazzo</h6>
                            <p className="price-font-size ml--10 mrt-4"><strong>Rs.1690</strong></p>
                        </div>
                        <div className="col-6 pl-6 margin-top--20">
                            {/* <ImageCard /> */}
                            <img src={Wishlist} alt="hearticon" className="youmightlike-hearticon heartIconSize" />
                            <img src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/n/bnksaj50040297-2_2.jpg" className="imageRounded" alt="productimage" />
                            <h6 className="cardBelowText font-size-14 ml--10 mrt-4">Grey Elasticated-<br />saist Cotton Palazzo</h6>
                            <p className="price-font-size ml--10 mrt-4"><strong>Rs.1690</strong></p>
                        </div>
                        <div className="col-6 margin-top--20">
                            {/* <ImageCard /> */}
                            <img src={Wishlist} alt="hearticon" className="youmightlike-hearticon heartIconSize" />
                            <img src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/n/bnksaj50040290-2_2.jpg" className="imageRounded" alt="productimage" />
                            <h6 className="cardBelowText font-size-14 ml--10 mrt-4">Grey Elasticated-<br />saist Cotton Palazzo</h6>
                            <p className="price-font-size ml--10 mrt-4"><strong>Rs.1690</strong></p>
                        </div>
                        <div className="col-6 pl-6 margin-top--20">
                            {/* <ImageCard /> */}
                            <img src={Wishlist} alt="hearticon" className="youmightlike-hearticon heartIconSize" />
                            <img src="https://static.jaypore.com/tr:w-313,h-415,e-sharpen/media/catalog/product/b/n/bnksaj50040282-2_2.jpg" className="imageRounded" alt="productimage" />
                            <h6 className="cardBelowText font-size-14 ml--10 mrt-4">Grey Elasticated-<br />saist Cotton Palazzo</h6>
                            <p className="price-font-size ml--10 mrt-4"><strong>Rs.1690</strong></p>
                        </div>
                    </div>

                    <button className="border-radius btn-white ml--10 loadmoreBtn load-more-shadow" >
                        Load more products</button>
                </div>
            </div>
        )
    }
}

export default YouMightLike
