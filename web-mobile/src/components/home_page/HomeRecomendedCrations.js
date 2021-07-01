import React, { Component } from 'react'
import ImageCard from '../common/homePageCard'
import SaveCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Save Collection.svg'


class HomeRecomendedCrations extends Component {
    render() {
        return (
            <div>
                <div className="card mt-8 pl-16 pr-16">
                    <h3 className="mt-24 mb-16"><strong>Recommended Curations</strong></h3>
                </div>
                    <div className="div-rel" onClick={()=>this.props.props.history.push('/productListing')}>
                    <img alt="" src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/191105LNT006_191211BAD20_191209SFC004_Dobby_white_range_Slider.jpg" className="bannerImageSize" />
                    <img src={SaveCollection} alt="heart icon" className="div-abs a-icon-abs-img" />
                    <h2 className="labletext position-absolute headingAlignmetAboveBanners pl-16 text-white">Brighten Up</h2>
                        <p className="labletext position-absolute textAlignmetAboveBanners pl-16 text-white">Delicate block-printed, embroidered<br/>scarves and stoles to wrap yourself in</p>
                </div>
                <div className="bg-white pl-16 pr-16 pt-16 image-container">
                    <div className='a-scroll-div'>
                        <div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div>
                        <div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div><div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div><div className='a-dis-in mr-8'>
                            <ImageCard />
                        </div>
                    </div>

                    <button type="button" className="btn-viewAll border-radius mb-24 mt-16"><strong>View All</strong></button>
                </div>
            </div>
        )
    }
}

export default HomeRecomendedCrations
