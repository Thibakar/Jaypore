import React, { Component } from 'react'
import ImageCard from '../common/homePageCard'
import ViewAllButton from '../common/ViewAllButton'
import SaveCollection from '../../assets/Jaypore Assets/01 Icons/02 Home Page/Save Collection.svg'


class HomeBagFullOfJoy extends Component {
    render() {
        return (
            <div>
               <div className="div-rel"  onClick={()=>this.props.props.history.push('/productListing')}>
                <img alt="" src="https://static.jaypore.com/tr:w-,h-,e-sharpen/media/bsimages/200113DIB034_Daily_Objects_MTO_slider.jpg" className="bannerImageSize" />
                <img src={SaveCollection} alt="heart icon" className="div-abs a-icon-abs-img" />
                <h2 className="labletext position-absolute headingAlignmetAboveBanners pl-16 text-white">Bagful Of Joy</h2>
                        <p className="labletext position-absolute textAlignmetAboveBanners pl-16 text-white">Silk embellished, quited and tasseled<br/>potlis for unbridled festivities</p>
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

export default HomeBagFullOfJoy
