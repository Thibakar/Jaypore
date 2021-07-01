import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';


class HomeMainCaarousel extends Component {
    render() {
        return (
            <div>
                <Carousel 
                autoPlay={true}
                    interval={3000}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={true}
                    >
                    <div>
                        <img alt="" className="carouselHeight" src="https://static.jaypore.com/media/mobilebanner/200120CUR155_DivineDesign_Flat_50_Off_Curation_mobile_banner.jpg" />
                    </div>
                    <div>
                        <img alt="" className="carouselHeight" src="https://static.jaypore.com/media/mobilebanner/17012020_Upto70_mobile_banner.jpg" />
                    </div>
                    <div>
                        <img alt="" className="carouselHeight" src="https://static.jaypore.com/media/mobilebanner/14012020_Brand_Bestselling_mobile_banner.jpg" />
                    </div>
                    <div>
                        <img alt="" className="carouselHeight" src="https://static.jaypore.com/media/mobilebanner/191231BRA100R_BRA_BRANCA_MTO_Relaunch_Mobile_Slider.jpg" />
                    </div>
                    <div>
                        <img alt="" className="carouselHeight" src="https://static.jaypore.com/media/mobilebanner/200109AJW031_AJW_Anand_Jewellers_Mobile_Slider.jpg" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default HomeMainCaarousel
