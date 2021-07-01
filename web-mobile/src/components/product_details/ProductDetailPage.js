import React, { Component } from 'react'
import PdpCarousel from './PdpCarousel'
import PdpSelectSize from './PdpSelectSize'
import PdpColorOptions from './PdpColorOptions'
import PdpCheckDeliveryDate from './PdpCheckDeliveryDate'
import PdpAvailablePromos from './PdpAvailablePromos'
import PdpDescription from './PdpDescription'
import ShareItem from './ShareItem'
import PdpAddToBag from './PdpAddToBag'
import PdpItemsLook from './PdpItemsLook'
import YouMightLike from './YouMightLike'
import NewArrivals from './NewArrivals'
import MostPopular from './MostPopular'
import AllOtherCurations from './AllOtherCurations'
import BackWhiteImg from '../../assets/PDP/back_arrow_white.svg'
import BegWhiteImg from "../../assets/PDP/bag_white.svg"; 
import { Link } from 'react-router-dom'
import Wishlist from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Wishlist.svg'
import Footer from '../common/footer/footer'

export class ProductDetailPage extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedSize:''
        }
    }

    changeSizeSelect=(val)=>{
        this.setState({
            selectedSize:val
        })
    }

    headerGoBack = () => {
        this.props.history.goBack();
    }

    addToCard = () => {
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="header-jaypore row-bwt-div div-abs" style={{
                    backgroundColor: 'transpernt',

                    width: '100%'
                }}>
                    <div className="header-menu-bar zindex">
                        <img src={BackWhiteImg} alt="Go Back" width='24px' height="16px"
                            onClick={() => this.headerGoBack()}
                        />

                    </div>
                    <div className='shop-bag-div-head zindex'>
                        <img src={Wishlist} alt="search" className='pad-5' width='24px' height='24px' onClick={this.addToCard} />
                        <Link to={{ pathname: '/myBag', state: 'all' }} params={{ value: "all" }} activeClassName="active">
                            <img src={BegWhiteImg} alt="shopping-beg" className='pad-5 pl-4' width='35px' height='35px'/>
                        </Link>
                    </div>
                </div>
                <PdpCarousel />
                <div className="pl-16 pr-16">
                    <div className="mt-24 sb-txt font-12 colr-42">THE IKAT CLOSET</div>
                    <div className="mt-16 sb-txt font-16 colr-21">Ivory-Grey Handloom Ikat Cotton Top</div>
                    <div className="mt-16 sb-txt font-14 colr-42">A Woven Legacy</div>
                    <div className="mt-16 mb-24"><span className='sb-txt font-16 colr-21'>Rs. 3700</span> 
                    <strike className='cross-txt'> 4100</strike> 
                    <span className="font-14 sb-txt white-color bg-jaypore-green green-span ml-10">30% OFF</span></div>
                    <hr className="border-bottem-dotted mr-16 mb-0 mt-0" />
                    <PdpSelectSize {...this.props}
                    changeSizeSelect={(val)=>this.changeSizeSelect(val)}
                    />
                    <hr className="border-bottem-dotted mb-0 mr-16" />
                    <PdpColorOptions />
                    <hr className="border-bottem-dotted mb-0 mr-16 mt-0" />
                    <PdpCheckDeliveryDate />
                    <hr className="border-bottem-dotted mt-24 mr-16 mb-0" />
                    <PdpAvailablePromos />
                    <hr className="border-bottem-dotted mr-16 mb-0" />
                    <PdpDescription />
                    <div className='shadow-div'></div>
                    <PdpAddToBag />
                    <div className='shadow-div'></div>
                    <ShareItem />
                    <hr className="border-bottem-dotted" />
                    <PdpItemsLook />
                    <hr className="border-bottem-dotted" />
                    <YouMightLike />
                    <hr className="custom-jayporeHrTag ml--20" style={{ border: 'none' }} />
                    <NewArrivals />
                    <hr className="custom-jayporeHrTag ml--20" />
                    <MostPopular />
                    <hr className="custom-jayporeHrTag ml--20" />
                    <AllOtherCurations />
                    <Footer/>
                </div>
             

            </div>
        )
    }
}

export default ProductDetailPage
