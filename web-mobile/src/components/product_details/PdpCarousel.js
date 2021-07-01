import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Bag from '../../assets/Jaypore Assets/01 Icons/01 Login Signup/Bag.svg'

export class PdpCarousel extends Component {
    render() {
        return (
            <div
            className='div-rel pdpCarousel'
            >
                <Carousel
                autoPlay={true}
                interval={3000}
                dynamicHeight={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={true}
                >
                    <div>
                        <img alt="" src="https://static.jaypore.com/media/mobilebanner/200113DIB034_Daily_Objects_MTO_mobile_slider.jpg" />
                    </div>
                    <div>
                        <img alt="" src="https://static.jaypore.com/media/mobilebanner/191231BRA100R_BRA_BRANCA_MTO_Relaunch_Mobile_Slider.jpg" />
                    </div>
                    <div>
                        <img alt="" src="https://static.jaypore.com/media/mobilebanner/14012020_Brand_Bestselling_mobile_banner.jpg" />
                    </div>
                    <div>
                        <img alt="" src="https://static.jaypore.com/media/mobilebanner/200107LAD017_LAD_LADAKH_SHAWLS_mobile_slider.jpg" />
                    </div>
                    <div>
                        <img alt="" src="https://static.jaypore.com/media/mobilebanner/191105LNT006_191211BAD20_191209SFC004_Dobby_white_range_Mobile_Slider.jpg" />
                    </div>
                </Carousel>
                <div className="shopThisLook m-txt div-abs a-shop-by-pos">
                    <span><img src={Bag} alt="" height="14px" width="14px" /></span>
                    {" "}Shop this look</div>
            </div>
        )
    }
}

export default PdpCarousel
