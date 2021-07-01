import React, { Component } from 'react'
import Wishlist from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'
import Ready from '../../assets/Jaypore Assets/01 Icons/03 Listing/Ready to ship.svg'
import Similar from '../../assets/Jaypore Assets/01 Icons/03 Listing/Similar Products.svg'
import Event from '../../assets/Jaypore Assets/01 Icons/05 My Bag/Saved.svg'
import HeaderBack from '../common/header/HeaderBack'
import Sort from './Sort'
import Footer from '../common/footer/footer'
import FashionStyleList from './FashionStyleList'
import BestSellingOut from './BestSellingOut'
import NewArrivalCard from './NewArrivalCard'
import FastSellingOut from './FastSellingOut'
import FashionLovers from './fashionLovers'
import ReadyToShipCard from './ReadyToShipCard'
import CurationCard from './curationCard'
import NewArrivalsJewelry from './NewArrivalsJewelry'
import NewArrivalsApparels from './NewArrivalsApparels'
import AllOtherCurations from '../product_details/AllOtherCurations'

export class CategoryMain extends Component {


    constructor(props) {
        super(props)
        this.state = {
            eventView: false,
            categoryCover: true,
            promotional: true,
            onFilterShow: false,
            brand: "Dresses",
            sortVisible: false,
            simple: true,
            categoryCoverImagae: 'https://static.fibre2fashion.com/Newsresource/images/249/jaypore_261460.jpg',
            categoryItemData: [
                {
                    "id": '1',
                    "name": 'Ivory-Blue Handloom Ikat cotton...',
                    "imageurl": 'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/t/steapj70002738-1_1.jpg',
                    "price": '2290',
                    "size": "XS,M,L,S,XL"
                }, {
                    "id": '2',
                    "name": 'Ivory-Blue Handloom Ikat cotton...',
                    "imageurl": 'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/j/d/jdiappl10000419-1_2.jpg',
                    "price": '2290',
                    "size": "XS,M,L,S,XL"
                }, {
                    "id": '3',
                    "name": 'Ivory-Blue Handloom Ikat cotton...',
                    "imageurl": 'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/t/n/tnmapj20011096-1_3.jpg',
                    "price": '2290',
                    "size": "XS,M,L,S,XL"
                }, {
                    "id": '4',
                    "name": 'Ivory-Blue Handloom Ikat cotton...',
                    "imageurl": 'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/l/n/lntjikt100006161-1_2.jpg',
                    "price": '2290',
                    "size": "XS,M,L,S,XL"
                }, {
                    "id": '5',
                    "name": 'Ivory-Blue Handloom Ikat cotton...',
                    "imageurl": 'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/d/a/datapj20010127-1_1.jpg',
                    "price": '2290',
                    "size": "XS,M,L,S,XL"
                }, {
                    "id": '6',
                    "name": 'Ivory-Blue Handloom Ikat cotton...',
                    "imageurl": 'https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/t/b/tbrapj20011565-1.jpg',
                    "price": '2290',
                    "size": "XS,M,L,S,XL"
                }
            ]
        }
    }


    static getDerivedStateFromProps(props, state) {

        switch (props.location.state) {
            case 'all': {
                return {
                    eventView: false,
                    categoryCover: true,
                    brand: "Dresses",
                    promotional: true,
                    simple: true,
                }
                break;
            }
            case 'simple': {
                return {
                    eventView: false,
                    simple: true,
                    categoryCover: false,
                    brand: "Dresses",
                    promotional: false,
                }
                break;
            }
            case 'cover': {
                return {

                    eventView: false,
                    categoryCover: true,
                    simple: true,
                    brand: "Dresses",
                    promotional: false,
                }
                break;
            }
            case 'promo': {
                return {
                    eventView: false,
                    categoryCover: false,
                    simple: true,
                    brand: "Dresses",
                    promotional: true,
                }
                break;
            }
            case 'event': {
                return {
                    eventView: true,
                    categoryCover: true,
                    simple: false,
                    brand: "Dresses",
                    promotional: false,
                }
                break;
            }
            case 'brand': {
                return {

                    eventView: false,
                    categoryCover: true,
                    brand: "Brand Name",
                    simple: true,
                    promotional: false,
                }
                break;
            }
            default: {

            }
        }
    }


    _renderItem = () => {
        let item = [];
        let len = this.state.categoryItemData.length;
        for (let i = 0; i < this.state.categoryItemData.length; i += 2) {
            item.push(
                <div className='row-even-div p-div-card-div pt-1' key={i}>
                    <CardItem data={this.state.categoryItemData[i]}
                        key={this.state.categoryItemData[i].id} 
                        goToPDP={()=>this.goToPDP()}
                        />
                    <CardItem data={this.state.categoryItemData[i + 1]}
                        key={this.state.categoryItemData[i + 1].id}
                        goToPDP={()=>this.goToPDP()}                        
                        />
                       
                </div>
                
            )
        }
        return item;
    }
 

    goToPDP=()=>{
        console.log("clicked")
        this.props.history.push('/productDetail')
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        window.scrollTo(0, 0)

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = () => {
        if (window.pageYOffset < 20) {
            this.setState({
                onFilterShow: false
            })
        }
        else {
            this.setState({
                onFilterShow: true
            })
        }
    }


    sortToggle = () => {
        console.log("this is the sort click")
        this.setState({
            sortVisible: !this.state.sortVisible
        })
    }

    headerGoBack = () => {
        this.props.history.goBack();
    }

    goHome = () => {
        console.log("okokok")
        this.props.history.push('/');
    }



    render() {
        let promotionalView = this.state.promotional ?
            <div className='right-center margin-s-10 r-txt margin-m-10 back-color-darkpink p-10'>
                <h3 className='sub-heading white-color   pt-10 '>Fitting Finishing Touch</h3>
                <h2 className='heading   white-color'>Buy 2, Get Flat 20% OFF</h2>
                <p className='  sub-sub-heading-txt text-dark-pink pb-10'>
                    Splurge on statement making jewelry, bold brocade bags and daintily embellished footwear for sparkly evenings
                </p>
            </div> : <div />
        let coverView = this.state.categoryCover ?
            <img src={this.state.categoryCoverImagae} alt="coverImage"
                height="300px"
                width="100%" style={{ marginTop: 10, objectFit: 'fill' }} />
            : <div />

        let event_list = this.state.eventView ? <div className='left-align  white-back-color p-20 ' style={{ marginBottom: 10 }}>
            <div className='row-bwt-div'>
                <h2 className='heading   pt-10'>Event Name</h2>
                <img src={Event} alt="coverImage"
                    style={{ marginLeft: 10 }}
                />
            </div>
            <h3 className='sub-heading-txt   pt-10  ' ><b>Studio B40  Sep 02-21</b></h3>
            <h3 className='sub-heading-txt   pt-10  '>Block-printed and embroidered, woven dhurrie cushion cover to refersh your spaces</h3>
        </div> : <div />

        let simpleView = <div className={this.state.simple ? 'left-align  white-back-color pr-20-pl-20 pb-10 box-shadow-div ' : 'd-none'} >
            <div className='heading   pt-16 m-txt font-20'>{this.state.brand}</div>
            <div className='grey-txt r-txt'>Dresses with delicate prints, breathable fabrics and a range of colors</div>
        </div>
        return (
            <div>
                <Sort visible={this.state.sortVisible}
                    sortToggle={() => this.sortToggle()}
                />
                <HeaderBack headerGoBack={() => this.headerGoBack()}
                    goHome={() => this.goHome()}
                />
                <div className='back-color-pink  r-txt container-div '>
                    {promotionalView}
                    {event_list}
                    {simpleView}
                    {coverView}
                    <div style={{ display: 'block' }}>
                        <div>{this._renderItem()}</div>
                        <div> <FashionStyleList/></div>
                        <div><FashionLovers/></div>
                        <div>{this._renderItem()}</div>
                        <div ><BestSellingOut/></div>
                        <div>{this._renderItem()}</div>
                        <div><NewArrivalCard/></div>
                        <div>{this._renderItem()}</div>
                        <div><FastSellingOut/></div>
                        <div><ReadyToShipCard/></div>
                        <div>{this._renderItem()}</div>                       
                       
                        <div><CurationCard/></div>
                        <div>{this._renderItem()}</div>
                       <div><NewArrivalsApparels/></div>
                        <div><NewArrivalsJewelry/></div>
                        <div><AllOtherCurations/></div>
                        
                       
                    </div>
                    <div className={this.state.onFilterShow ? 'footer top-footer-margin m-txt' : 'd-none'}
                    >
                        <div className="row-even-div p-8-px">
                            <button className='btn-radius pb-10-pt-10 sort-btn white-back-color brand-border-color'
                                onClick={() => this.sortToggle()}
                            >
                                <div className=' brandcolor-txt m-txt'
                                    style={{ marginBottom: '0px' }}
                                >Sort</div>
                            </button>

                            <button onClick={() => this.props.history.push('/category/filter')} className='btn-radius pb-10-pt-10  filter-btn white-back-color brand-border-color'
                            >
                                <div className=' brandcolor-txt m-txt'
                                    style={{ marginBottom: '0px' }}
                                >Refine Results</div>
                            </button>
                        </div>
                    </div>
                    <div className='p-10' >
                        <button className='btn-viewAll border-radius mb-24 mt-16 m-txt' style={{ width: '100%' }}>
                            Load more products
                        </button>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default CategoryMain




export function CardItem(props) {
    return (
        <div className="white-back-color box-shadow-div card-div mt-5-px" >
                <div className='div-rel'>
                    <img src={props.data.imageurl} alt="coverImage"
                        height="225px" width="100%" className='card-image' onClick={()=>props.goToPDP()} />
                    <div className='band-off row-div div-abs btn-radius'
                        style={{ top: '8px', bottom: 'auto', left: '8px', right: 'auto' }}>
                        <p className='white-color sb-txt font-12'>30% OFF</p>
                    </div>
                    <img src={Wishlist} alt={props.data.name} style={{ top: '8px', bottom: 'auto', left: 'auto', right: '8px' }}
                        height="15px" width="16px" className='card-image div-abs ' />

                    <img src={Ready} alt={props.data.name} style={{ top: 'auto', bottom: '8px', left: '8px', right: 'auto' }}
                        height="36px" width="36px" className='card-image div-abs ' />

                    <img src={Similar} alt={props.data.name} style={{ top: 'auto', bottom: '8px', left: 'auto', right: '8px' }}
                        height="23px" width="23px" className='card-image div-abs ' />

                </div>
                <div className="p-4 font-12" onClick={()=>props.goToPDP()}>
                    <div className='sp-letter black-color sb-txt'>JAYPORE</div>
                    <div className='grey-txt'>Ivory-Blue Handloom Ikat Cotton...</div>
                    <div className='row-div-start'>
                        <div className='black-color sb-txt'>Rs. 2100</div>
                        <div className='under-though ml-5-m grey-txt'>Rs. 3000</div>
                    </div>
                    <div className='m-txt grey-txt'>XS, S, M, L, XL</div>
                </div>

        </div>
    )

}