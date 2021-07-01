import React, { Component } from 'react'
import ImageCard from '../common/homePageCard'
import ViewAllButton from '../common/ViewAllButton'
import SaveCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Save Collection.svg'


class HomeTimeLessAppeal extends Component {
    render() {
        return (
            <div>
            <div className="div-rel" onClick={()=>this.props.props.history.push('/productListing')}>
                <img alt="" src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/191228KAH017_KAH_Kapaas_Katha_slider.jpg" className="bannerImageSize" />
                <img src={SaveCollection} alt="heart icon" className="div-abs a-icon-abs-img" />
                <h2 className="labletext position-absolute headingAlignmetAboveBanners pl-16 text-white">Timeless Appeal</h2>
                        <p className="labletext position-absolute textAlignmetAboveBanners pl-16 text-white">Alluring silver tone jhumkis with<br/>intricate datailing</p>
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

                <ViewAllButton />
            </div>
        </div>
        )
    }
}

export default HomeTimeLessAppeal
