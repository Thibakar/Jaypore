import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import notavailable from '../../assets/01 Icons/04 PDP/size_notavailable.svg'
import selected from '../../assets/01 Icons/04 PDP/size_selected.svg'
import inWishlist from '../../assets/01 Icons/04 PDP/wishlist_added.svg'
import available from '../../assets/01 Icons/04 PDP/size_available.svg'
import upArrow from '../../assets/01 Icons/04 PDP/upArrow.svg'
import circularImageIcon from "../../assets/images/percentage_green.svg";
import shippingTruck from "../../assets/images/shipping_truck.svg"
import caresvg from "../../assets/images/care.svg"
import materialssvg from "../../assets/images/materials.svg"
import weightsvg from "../../assets/images/weight.svg"
import measurementsicon from "../../assets/images/measurements.svg"
import coloursiconsvg from "../../assets/images/colours.svg"
import skusvg from "../../assets/images/sku.svg"
import share from "../../assets/01 Icons/04 PDP/Share.svg";
import email from "../../assets/01 Icons/04 PDP/Email.svg";
import facebook from "../../assets/01 Icons/04 PDP/Facebook.svg";
import twitter from "../../assets/01 Icons/04 PDP/Twitter.svg";
import messenger from "../../assets/01 Icons/04 PDP/Send.svg";
import copylink from "../../assets/01 Icons/04 PDP/Copy.svg";
import ReactDOM from 'react-dom'
import SimilarProduct from './similar_product'
import ProductRelatedCard from "./productdetailscards/productRelated_card";
import NewArrivalCard from "./productdetailscards/newArrival_card";
import ShopAllCurationsCard from "./productdetailscards/shopAllCurations_card";
import ProductRelatedCard1 from "./productdetailscards/productRelated_card1";
import ProductRelatedCard2 from "./productdetailscards/productRelated_card2";
import ProductRelatedCard3 from "./productdetailscards/productRelated_card3";
import bagIcon from '../../assets/01 Icons/01 Login Signup/Bag.svg'
import SelectSizeModal from './select_size_chart'
import '../productdetails/pdp_style.css'
import { BaseComponent } from '../common/BaseComponent';
import { NavUtil } from '../common/navutil';

export class ProductPage extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                productImagesUrl: [
                    'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj100009482-2_1.jpg',
                    'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj100009482-1_1.jpg',
                    'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj100009482-4_1.jpg',
                    'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj100009482-2_1.jpg',
                    'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj100009482-1_1.jpg',
                    'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/r/o/roaapjj100009482-4_1.jpg'
                ],
                size: [
                    {
                        sizeName: 'S',
                        availablity: false
                    }, {
                        sizeName: 'M',
                        availablity: true
                    }, {
                        sizeName: 'L',
                        availablity: true
                    }, {
                        sizeName: 'XL',
                        availablity: true
                    },
                ]
            },
            selectedSizeValue: '',
            isAvailOpen: false,
            isProductDetail: false,
            isSizeVisible: false,
        }
    }

    _carousel = () => {
        let data = [];
        this.state.data.productImagesUrl.map(item =>
            data.push(
                <div>
                    <img src={item} alt="home-img" />
                </div>
            )
        );
        return data;
    };

    toggleAvailPromo = () => {
        this.setState({
            isAvailOpen: !this.state.isAvailOpen
        })
    }

    toggleProductDetail = () => {
        this.setState({
            isProductDetail: !this.state.isProductDetail
        })
    }
    selectedSize = (size) => {
        let s = size.availablity ? size.sizeName : '';
        this.setState({
            selectedSizeValue: s
        })
    }

    getSizeBack = (size) => {
        let imageSource = '';
        if (size.availablity === false) {
            imageSource = notavailable
        } else {
            if (size.sizeName === this.state.selectedSizeValue) {
                imageSource = selected
            }
            else {
                imageSource = available
            }
        }
        return imageSource;
    }

    _size_row = () => {
        let data = [];
        this.state.data.size.map((item) => {
            data.push(
                <div className='sizeChart' onClick={() => this.selectedSize(item)}>
                    <img src={this.getSizeBack(item)} width='100%' height='100%' />
                    <div className={this.state.selectedSizeValue === item.sizeName ? 'selected-size-txt a-r-txt cu-ptr' : 'cu-ptr a-r-txt unselected-size-txt'}>
                        {item.sizeName}</div>
                </div>
            )
        })
        return data;
    }


    toggleSize = () => {
        this.setState({
            isSizeVisible: !this.state.isSizeVisible
        })
    }

    openCompleteLook = () => {
        // let category = ReactDOM.findDOMNode(this.refs.detaildiv)
        let compLook = ReactDOM.findDOMNode(this.refs.share)
        // category.scrollTo(0, 200)
        compLook.scrollIntoView(true);
        console.log('caetegory', compLook.clientHeight)
    }

    render() {
        return (
            <div>
                <Header />
                <SelectSizeModal visible={this.state.isSizeVisible}
                    toggleVisible={() => this.toggleSize()}
                />
                <div className='contentMainContainer'>
                    <div className='container'>
                        <div className=' a-pt-24'>
                            <div className='productHalfDiv pdpCarousel'>
                                <Carousel
                                    showIndicators={false}
                                    showThumbs={true}
                                    showStatus={false}
                                    showArrows={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                >
                                    {this._carousel()}
                                </Carousel>
                                <img src={inWishlist} className='a-abs whislistpdp' />
                                <div className='shop-look-pdp a-abs cu-ptr'
                                    onClick={() => this.openCompleteLook()}><img src={bagIcon} className='a-mr-8' />Shop this look</div>
                            </div>

                            <div className='productHalfDiv a-rel' ref='detaildiv' style={{ float: "right" }}>

                                <div className='pdpDescription disable-scrollbars '>

                                    <div className='a-pl-24 font-12 a-txt-left'>
                                        <ul class="breadcrumb">
                                            <li className='a-r-txt'>
                                                <a href="#">Home</a>
                                            </li>
                                            <li className='a-r-txt'>
                                                <a href="#">Clothing</a>
                                            </li>
                                            <li className='a-r-txt'>
                                                <a href="#">Women</a>
                                            </li>
                                            <li className='a-r-txt'>
                                                <a href="#">Top</a>
                                            </li>
                                            <li>
                                                <a href="#">The Ikat Closet Top</a>
                                            </li>
                                            <li>
                                                <a href="#">All by The Ikat Closet</a>
                                            </li>
                                        </ul>
                                        <div className='a-mt-24 a-16-txt a-sb-txt a-colr-42'>THE IKAT CLOSET</div>
                                        <div className='a-mt-16 a-24-txt a-sb-txt a-colr-42'>Ivory-Grey Handloom Ikat Cotton Top</div>
                                        <div className='a-mt-16 a-16-txt a-sb-txt a-colr-42'>A Woven Legacy</div>
                                        <div className="row p-l-15 a-mt-16">
                                            <div className="product-price a-sb-txt a-24-txt">Rs. 1990</div>
                                            <div className=" p-l-10 product-price-offer">1990</div>
                                            <span className="offer-label"> 30% OFF</span>
                                        </div>
                                        <div className='dottedLine100' />
                                        <div className='a-mt-24 a-18-txt a-m-txt a-colr-42'>Select Size</div>
                                        <div className='d-in-blk a-mt-16'>
                                            {this._size_row()}
                                            <div className='sizeChart a-ml-8 a-sb-txt'>
                                                <div className="login-text-blue cu-ptr" onClick={() => this.toggleSize(

                                                )}>SIZE CHART</div>
                                            </div>
                                        </div>
                                        <div className='a-colr-61 a-mt-24'>Size not available? <a href="#pdp-u-might-like" className='login-text-blue a-sb-txt'>View similar products </a></div>
                                        <div className='dottedLine100' />
                                        <div className='a-mt-24 a-18-txt a-m-txt a-colr-42'>Color Options</div>
                                        <div className='d-in-blk a-mt-8'>
                                            <div className='colorOption cu-ptr' style={{ borderColor: '#f5e3d8' }}>
                                                <div className='colorInner' style={{ backgroundColor: '#e096a6' }} />
                                            </div>
                                            <div className='colorOption cu-ptr' style={{ borderColor: '#f5e3d8' }}>
                                                <div className='colorInner' style={{ backgroundColor: '#f5d6a7' }} />
                                            </div>
                                            <div className='colorOption cu-ptr' style={{ borderColor: '#f5e3d8' }}>
                                                <div className='colorInner' style={{ backgroundColor: '#f9ae91' }} />
                                            </div>
                                            <div className='colorOption cu-ptr' style={{ borderColor: '#f5e3d8' }}>
                                                <div className='colorInner' style={{ backgroundColor: '#93c2ca' }} />
                                            </div>
                                        </div>
                                        <div className='dottedLine100' />
                                        <div className='a-mt-24 a-18-txt a-m-txt a-colr-42'>Check-Delivery-Date & COD option</div>
                                        <div className='a-mt-16'>
                                            <input type='text' className='pincode-input a-sb-txt' placeholder='Enter PIN Code' />
                                            <button className='pincode-btn a-16-txt'>
                                                Check  Now
                                                     </button>
                                        </div>
                                        <div className='dottedLine100 a-mb-24' />
                                        <div className='login-text-blue a-18-txt a-m-txt cu-point' onClick={() => this.toggleAvailPromo()} >Available Promos
                                                    <img src={upArrow} className={this.state.isAvailOpen ? 'arrow-up-down ' : 'arrow-up-down a-rot-180 '} />
                                        </div>
                                        {
                                            this.state.isAvailOpen ?

                                                <div className="available-promos a-rel" >
                                                    <div className='a-18-txt a-colr-42'>Promo Codes</div>
                                                    <div class='copyClip'>
                                                            Click to copy promocode
                                                            </div>
                                                            <div className='copyCliparrow' />
                                                    <div id="promo-div-id">
                                                        <div class="slide-r"  >
                                                            
                                                            <div className='td-promo a-mt-16 cu-ptr'>
                                                                <div className='d-in-blk' style={{ padding: 14 }}>
                                                                    <div className='a-sb-txt a-16-txt'>JOYPORE20</div>
                                                                    <div className='a-12-txt a-r-txt'>Get 10% Off on purchase above Rs. 1000</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="slide-r">
                                                            <div className='td-promo'>
                                                                <div className='d-in-blk' style={{ padding: 14 }}>
                                                                    <div className='a-sb-txt a-16-txt'>JOYPORE20</div>
                                                                    <div className='a-12-txt a-r-txt'>Get 10% Off on purchase above Rs. 1000</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='a-18-txt a-colr-42 a-mt-24'>Bank Offers</div>
                                                    <div className='bankOffer a-mt-16'>
                                                        <img src={circularImageIcon} className='d-in-blk offer-img-bank' />
                                                        <div className='d-in-blk bank-offer-txt'>
                                                            <div className='font-14 a-sb-txt'>Rs. 200 off on using ICICI Bank Debit Card</div>
                                                            <div className='font-12 a-r-txt'>* Rs.200 OFF on order above Rs.1000</div>
                                                            <div className='dottedLine-bank' />
                                                            <div className='font-12 a-sb-txt'>Terms Conditions</div>
                                                            <div className='font-12 a-r-txt'>* Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                                            <div className='font-12 a-r-txt'>* Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                                        </div>

                                                    </div>
                                                </div>
                                                : <div />
                                        }
                                        <div className='dottedLine100 a-mb-24 a-mt-24' />
                                        <div className='login-text-blue a-18-txt cu-point' onClick={() => this.toggleProductDetail()}>Product Details
                                                    <img src={upArrow} className={this.state.isProductDetail ? 'arrow-up-down ' : 'arrow-up-down a-rot-180 '} />
                                        </div>
                                        {
                                            this.state.isProductDetail ?

                                                <div className="available-promos" >
                                                    <div className="profuctdetailsbody a-14-txt a-r-txt" style={{ margin: '2%', fontSize: '14' }}>
                                                        <div className='a-sb-txt a-14-txt'>Disclaimer</div>
                                                        <div className='a-r-txt a-14-txt a-mt-8'>This product is hand block printed and there might be slight irregularities in
                                                        color and prints occuring. These irregularities are the hallmark of hand
                                                        block printed product and make each exquisite piece one-of-its-kind.
                                                                  </div>

                                                        <div className=' a-18-txt a-mt-32'>More Details</div>
                                                        <div className='a-sb-txt a-14-txt a-mt-32'> <img src={shippingTruck} alt="welcom.in" style={{ marginRight: '2%' }} />
                                                            Shipping Information</div>
                                                        <div className='a-r-txt a-14-txt a-mt-16'>Dispatched in a maximum of 23 business days. Returns accepted within 10 days
                                                        of delivery. Cancellation requests will be accepted strictly within 24 hours of placing the order
                                                        only. This product is made on order.
                                                                 </div>
                                                        <div className='a-sb-txt a-14-txt a-mt-24'> <img src={measurementsicon} alt="welcom.in" style={{ marginRight: '2%' }} />
                                                            Measurements</div>
                                                        <div className='a-mt-16'>Refer to the <span className="a-m-txt login-text-blue cu-ptr" onClick={() => this.toggleSize()}>Size Chart</span></div>
                                                        <div className='a-r-txt a-mt-8'>The model (height 5'8") is wearing a size <span>S</span></div>
                                                        <div className='a-sb-txt a-mt-8'> <img src={coloursiconsvg} alt="welcom.in" style={{ marginRight: '2%' }} />
                                                            Color</div>
                                                        <div className='a-mt-24' >Multi-Color</div>
                                                        <div className='a-sb-txt a-mt-24'>
                                                            <img src={weightsvg} alt="welcom.in" style={{ marginRight: '2%' }} />Weight<span className="pdpspanitm2 a-m-txt">
                                                                (in grams)</span></div>
                                                        <div className='a-mt-16' >NA</div>
                                                        <div className='a-mt-24 a-sb-txt'> <img src={materialssvg} alt="welcom.in" style={{ marginRight: '2%' }} />
                                                            Material<span className="pdpspn7"> (s)</span></div>
                                                        <div className='a-mt-16'>Collect</div>
                                                        <div className='a-mt-24 a-sb-txt'> <img src={caresvg} alt="welcom.in" style={{ marginRight: '2%' }} /> Care
                                                        </div>
                                                        <div className='a-mt-16'>Drt Clean Only</div>
                                                        <div className='a-mt-24 a-sb-txt'> <img src={skusvg} alt="welcom.in" style={{ marginRight: '2%' }} />SKU</div>
                                                        <div className='a-mt-16'>SHMAPJ20004284</div>
                                                    </div>
                                                </div>
                                                : <div />
                                        }
                                        <div className='dottedLine100 a-mb-24 a-mt-24' ref='share' />
                                        <div className='a-sb-txt'>
                                            <img src={share} />
                                            {"   "} Share this item with friends
                                                </div>
                                        <div className='a-mt-16'>
                                            <div className='share-imgages cu-ptr'>
                                                <img src={email} />
                                                <div className='a-mt-8 font-12 a-r-txt'>Email</div>
                                            </div>
                                            <div className='share-imgages cu-ptr'>
                                                <img src={facebook} />
                                                <div className='a-mt-8 font-12 a-r-txt'>Facebook</div>
                                            </div>
                                            <div className='share-imgages cu-ptr'>
                                                <img src={twitter} />
                                                <div className='a-mt-8 font-12 a-r-txt'>Tweet</div>
                                            </div>
                                            <div className='share-imgages cu-ptr'>
                                                <img src={messenger} />
                                                <div className='a-mt-8 font-12 a-r-txt'>Send</div>
                                            </div>

                                            <div className='share-imgages cu-ptr'>
                                                <img src={copylink} />
                                                <div className='a-mt-8 font-12 a-r-txt'>Copy Link</div>
                                            </div>
                                        </div>

                                        <div className='dottedLine100 a-mb-24 a-mt-24' ref='complete_the_look' />
                                        <div className='a-18-txt a-m-txt a-colr-42'>Complete the look</div>
                                        <SimilarProduct />
                                    </div>

                                </div>
                                <div className='btn-click-db-ab'>
                                    <table cellSpacing={8} style={{ width: '100%' }}>
                                        <tr>
                                            <td className='directbuy cu-ptr' onClick={NavUtil.goToShippingPayment}>Direct Buy</td>
                                            <td className='btn-add-bag cu-ptr' onClick={NavUtil.goToMyBag}>Add To Bag</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                        <div className="You-might-also-like m-t-30 m-b-30">
                            <div className="text-center a-24-txt a-colr-21 a-sb-txt a-mt-24" id="pdp-u-might-like">
                                YOU MIGHT ALSO LIKE</div>
                            <div class="related-card a-mt-24">
                                <div className="you-may a-rel">
                                    <div className="a-row">
                                        <div className="col-md-3" style={{ padding: 0 }}>
                                            <ProductRelatedCard />
                                        </div>
                                        <div className="col-md-2" style={{ padding: 0 }}>
                                            <ProductRelatedCard1 />
                                        </div>
                                        <div className="col-md-4" style={{ padding: 0 }}>
                                            <ProductRelatedCard2 />
                                        </div>
                                        <div className="col-md-3" style={{ padding: 0 }}>
                                            <ProductRelatedCard3 />
                                        </div>
                                    </div>
                                    <div className='effectPdp a-abs'>

                                    </div>


                                </div>
                                <button type="button" className="load-more-btn">
                                    load more products...
                             </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" division  bg-pink"></div>

                {/*********** New Arrivals******************** */}
                <div className=" new-arrival">
                    <div className=" m-t-50 text-center a-24-txt a-colr-21 a-sb-txt">
                        NEW ARRIVALS</div>
                    <div className="container m-t-20">
                        <div>
                            <NewArrivalCard />
                        </div>
                    </div>
                </div>

                <div className=" division bg-pink"></div>

                {/**************************most popular*************************** */}

                <div className=" most-arrival">
                    <div className=" m-t-50 text-center a-24-txt a-colr-21 a-sb-txt">
                        MOST POPULAR</div>
                    <div className=" container m-t-20 " style={{ marginTop: 16 }}>
                        <NewArrivalCard />
                    </div>
                </div>

                <div className=" division  bg-pink"></div>

                {/**************************Shop All Curations*************************** */}

                <div className=" most-arrival">
                    <div className=" m-t-50 text-center a-24-txt a-colr-21 a-sb-txt">
                        SHOP ALL CURATION</div>
                    <div className=" container a-mb-24" style={{ marginBottom: 12 }}>
                        <ShopAllCurationsCard />
                    </div>
                </div>
                <div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default ProductPage
